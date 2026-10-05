import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, budget, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Vui lòng nhập đầy đủ họ tên, số điện thoại và email." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
    });

    const leadData = {
      name,
      phone,
      email,
      service: service || "Chưa chọn",
      budget: budget || "Chưa chọn",
      message: message || "Không có",
      submittedAt: timestamp,
      sheetId: "1gU44TgC2cobLY45mIxYAgDFVz0cg0SbMqUohuY6U4TU",
    };

    // 1. Forward to Google Apps Script Webhook if configured
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    let googleSheetSynced = false;

    if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(leadData),
          redirect: "follow",
        });
        const resText = await res.text();
        console.log("[LEAD API] Webhook response status:", res.status, resText);
        if (res.ok) {
          googleSheetSynced = true;
        }
      } catch (webhookErr) {
        console.error("[LEAD API] Google Sheet webhook error:", webhookErr);
      }
    } else {
      console.warn(
        "[LEAD API] GOOGLE_SHEET_WEBHOOK_URL is not set in .env.local! Data is safely stored in data/leads.json."
      );
    }

    // 2. Safe local persistent fallback in data/leads.json
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const filePath = path.join(dataDir, "leads.json");
      let existingLeads = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        existingLeads = JSON.parse(fileContent || "[]");
      }
      existingLeads.unshift({
        ...leadData,
        googleSheetSynced,
      });
      fs.writeFileSync(filePath, JSON.stringify(existingLeads, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("[LEAD API] Error saving lead locally:", fsErr);
    }

    return NextResponse.json({
      success: true,
      message: "Gửi thông tin thành công!",
      googleSheetSynced,
      warning: !webhookUrl
        ? "GOOGLE_SHEET_WEBHOOK_URL chưa được cấu hình trong .env.local"
        : undefined,
    });
  } catch (error) {
    console.error("[LEAD API] Error submitting lead:", error);
    return NextResponse.json(
      { error: "Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  const filePath = path.join(process.cwd(), "data", "leads.json");
  let leads = [];
  if (fs.existsSync(filePath)) {
    try {
      leads = JSON.parse(fs.readFileSync(filePath, "utf-8") || "[]");
    } catch (e) {}
  }

  // Attempt sync for unsynced leads if webhook is configured
  let newlySynced = 0;
  if (webhookUrl && leads.some((l: any) => !l.googleSheetSynced)) {
    for (const lead of leads) {
      if (!lead.googleSheetSynced) {
        try {
          const res = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(lead),
            redirect: "follow",
          });
          if (res.ok) {
            lead.googleSheetSynced = true;
            newlySynced++;
          }
        } catch (e) {
          console.error("[LEAD API] Auto-sync error for lead:", lead.email, e);
        }
      }
    }
    if (newlySynced > 0) {
      fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf-8");
    }
  }

  return NextResponse.json({
    webhookConfigured: Boolean(webhookUrl && webhookUrl.trim().length > 0),
    totalLeads: leads.length,
    newlySynced,
    leads,
  });
}

/**
 * Google Apps Script Webhook cho Google Sheet:
 * https://docs.google.com/spreadsheets/d/1gU44TgC2cobLY45mIxYAgDFVz0cg0SbMqUohuY6U4TU/edit
 *
 * HƯỚNG DẪN CÀI ĐẶT NHANH (30 GIÂY):
 * 1. Mở Google Sheet: https://docs.google.com/spreadsheets/d/1gU44TgC2cobLY45mIxYAgDFVz0cg0SbMqUohuY6U4TU/edit
 * 2. Trên thanh menu, chọn: Tiện ích mở rộng (Extensions) > Apps Script
 * 3. Xóa toàn bộ nội dung cũ trong editor, dán toàn bộ code file này vào.
 * 4. Bấm "Triển khai" (Deploy) ở góc trên bên phải > chọn "Triển khai mới" (New deployment).
 *    - Chọn loại (Select type): "Ứng dụng web" (Web App)
 *    - Mô tả: "UeiHT Lead Webhook"
 *    - Thực thi dưới dạng (Execute as): "Tôi" (Me)
 *    - Người có quyền truy cập (Who has access): "Bất kỳ ai" (Anyone)
 * 5. Bấm "Triển khai", cấp quyền truy cập tài khoản Google của bạn.
 * 6. Sao chép "URL ứng dụng web" (Web App URL có dạng: https://script.google.com/macros/s/.../exec).
 * 7. Mở file `.env.local` trong dự án và dán vào:
 *    GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/.../exec"
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var SPREADSHEET_ID = "1gU44TgC2cobLY45mIxYAgDFVz0cg0SbMqUohuY6U4TU";
    var ss = null;
    try {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    } catch (err) {}
    if (!ss) {
      ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    }
    var sheet = ss.getActiveSheet() || ss.getSheets()[0];

    // Tự động tạo hàng tiêu đề nếu bảng tính còn trống
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời Gian Gửi",
        "Họ Và Tên",
        "Số Điện Thoại",
        "Email",
        "Dịch Vụ Quan Tâm",
        "Ngân Sách Dự Kiến",
        "Nội Dung / Yêu Cầu Chi Tiết"
      ]);
      // Định dạng header màu xanh UeiHT
      sheet.getRange(1, 1, 1, 7)
        .setFontWeight("bold")
        .setBackground("#0284c7")
        .setFontColor("#ffffff")
        .setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Ghi dữ liệu khách hàng vào hàng mới
    sheet.appendRow([
      data.submittedAt || new Date().toLocaleString("vi-VN"),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.service || "",
      data.budget || "",
      data.message || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Đã thêm dữ liệu thành công" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", message: "UeiHT Google Sheet Webhook is running." }))
    .setMimeType(ContentService.MimeType.JSON);
}

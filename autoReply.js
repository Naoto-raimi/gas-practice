function autoReply(e) {
  let values = e.values;
  let companyName = values[1];
  let name = values[2];
  let email = values[3];

  var mailTo = "***.com";
  var title = "test";
  var body = `
  ${name}様
  
  以下の内容でよろしいですか？
  会社名：${companyName}
  メールアドレス：${email}
  `;
  GmailApp.sendEmail(mailTo, title, body);
}

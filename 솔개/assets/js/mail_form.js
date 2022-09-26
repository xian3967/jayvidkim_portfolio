$(function() {
  $('#form-contact-submit').on('click', function() {

    // Formに入力されたデータを取得
    var name = $('#form-contact-name').val();
    var email = $('#form-contact-email').val();
    var body = $('#form-contact-message').val();

    // 連想配列化
    var postData = {"name":name, "email":email, "body":body};

    // POSTで送信
    $.post(
      "confirm.php",
      postData,
    );

    // 送信完了後の処理（送信完了のメッセージ表示）
    $('.send-email').html('<p>送信完了しました。お問い合わせありがとうございます。</p>');
    $('#form-contact-name').val("");
    $('#form-contact-email').val("");
    $('#form-contact-message').val("");
  });
});

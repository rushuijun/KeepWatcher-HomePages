$(function () {

    function validateForm(objName) {
        $(objName).parent().find(".glyphicon" ).remove();
        $(objName).parent().removeClass("has-error");
        $(objName).parent().removeClass("has-success");
        if($(objName).val() == "" ){
            $(objName).after("<span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>");
            $(objName).parent().addClass("has-error");
            return "NG";
        } else {
            $(objName).after("<span class=\"glyphicon glyphicon-ok form-control-feedback\"></span>");
            $(objName).parent().addClass("has-success");
            return "";
        }
    }
    
    //$("#contactForm").submit(function () {
    $("#submit").on("click", function () {
        var formData = decodeURIComponent($("#contactForm").serialize());
        //formの必須項目をチェックする
        if (validateForm("#contactNameKJ") + validateForm("#contactNameKN") + validateForm("#contactTel") + validateForm("#contactInputEmail") + validateForm("#contactMessage") != ""){
            return false;
        }
        
        $.ajax({
            url: "../PHP/sendMail.php",
            type: "POST",
            data: formData,
            // 送信前
            beforeSend: function () {
                // ボタンを無効化し、二重送信を防止
                $("#submit").attr('disabled', true);
            },
            // 応答後
            complete: function () {
                // ボタンを有効化し、再送信を許可
                $("#submit").attr('disabled', false);
            },
            success: function (data) {
                document.getElementById("contactForm").reset();
                $("#contactForm").addClass("hidden");
                $(".alert-success").removeClass("hidden");
            },
            error: function (data) {
                alert(data + "\n送信失敗！");
            }
        });
    });

    $("#closeAlert").on("click", function () {
        location.reload();
    });
});
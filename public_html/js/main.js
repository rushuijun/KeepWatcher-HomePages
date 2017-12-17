$(function () {
    $("#header").load("/pages/common/header.html", function (activeTargetId) {
        //現在ページ名を取得する。
        pathName = window.location.pathname;
        pathNameArray = pathName.split("/");
        fileNameArray = pathNameArray.slice(pathNameArray.length - 1, pathNameArray.length).toString(String).split(".");
        activeTargetId = fileNameArray.slice(0, 1);
        //現在ページ名と同名のタグをactiveクラスを追加する。
        if (!activeTargetId) {
            activeTargetObj = $(".nav").find("#" + activeTargetId);
            if (!activeTargetObj) {
                activeTargetObj.addClass("active");
            }
        }
    });
    $("#footer").load("/pages/common/footer.html", function () {
        date = new Date();
        $("#copyright").text("Copyright © " + date.getFullYear() + " KBT-JP inc. All rights Reserved.");
    });

    $(document).on("click", ".widget h2", function () {
        $(this).parent().toggleClass('active');
    });

});

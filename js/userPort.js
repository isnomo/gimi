
(function () {
    // 用户列表
    $.ajax({
        type: "POST",
        url: "http://gimi321.com/admin.php/user_alladminuser",
        data: {'page':'1'},
        dataType: 'JSON',
        cache: false,
        success: function (data,response) {
            console.log('请求成功');
            console.log(data);
            console.log(response);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("上传失败，请检查网络后重试");
        }
    });

})();
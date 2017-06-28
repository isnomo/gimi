
(function () {

    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象 
        var r = window.location.search.substr(1).match(reg);    //匹配目标参数
        if (r != null) return unescape(r[2]); return null;      //返回参数值
    };
    //得到url参数
    var urltype = $.getUrlParam('type');
    console.log(urltype);
    if (urltype == 'add') {
        console.log('添加用户');
        // 启用表单验证
        validator();
        // 缩略图上传
        var file,imgPath,imgUrl;
        $('#title-img>.change-title>input').change(function (e) {
            file = this.files[0];
            imgPath = $(this).val();

            if (imgPath == "") {
                return false;
            } else {
                imgUrl = window.URL.createObjectURL(this.files[0]);
            }

            if (!/image\/\w+/.test(file.type)) {
                alert("请确保文件为图像类型");
                return false;
            }
            if (file.size > 2000000) {
                alert('图片过大,不得超过2M！');
                return false;
            }
            console.log(file);
            $('#title-img>img').attr({ 'src': imgUrl, 'width': '109px;', 'height': '109px;' });
            $('#userEdit button[type=submit]').attr('disabled', false);
            $('#title-img').siblings('span').hide();
        });


        $('#userEdit button[type=submit]').click(function (e) {
            // 阻止表单提交
            e.preventDefault();

            // 判断是否传图
            var noImg = 'images/img1.png';
            if ($('#title-img img').attr('src') == noImg) {
                $('#userEdit button[type=submit]').attr('disabled', true);
                $('#title-img').siblings('span').show();
                return false;
            }
            // 获得表单实例
            // var dataJson = $("#userEdit").serializeArray();
            // dataJson.push({
            //     'name':'icon_link',
            //     'value':file
            // });


           

            var url = "http://gimi321.com/admin.php/user_adduser"; // 接收上传文件的后台地址
            // FormData 对象
            var userForm = document.getElementById('userEdit');
            var form = new FormData(userForm);
            form.append("icon_link", file); // 文件对象
            // console.log(form);


            // XMLHttpRequest 对象
            var xhr = new XMLHttpRequest();
            xhr.open("post", url, true);
            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(form);
            xhr.onreadystatechange = function (data) {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        alert("上传成功");

                    } else {
                        alert("请检查网络重新上传");

                    }
                }
            };
            xhr.onload = function () {
                // 
            };
            


        });
    }





})();
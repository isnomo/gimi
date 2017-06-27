// FIX ME ALL USERNUM
(function () {
    // 用户列表
    function pageAjax(num) {
        $.ajax({
            type: "POST",
            url: "http://gimi321.com/admin.php/user_alladminuser",
            data: { 'page': num },
            dataType: 'JSON',
            cache: false,
            success: function (response) {
                // 用户列表数据
                var userList = response.data.info;
                var pageNum = response.data.sum;
                var userHtml = '';
                var btnHtml = '';
                // 渲染数据
                for (var i = 0; i < userList.length; i++) {
                    var userNum = userList[i];
                    var userInfo = userList[i].user_info;
                    // 日期格式化
                    var datatime = new Date(parseInt(userInfo.birth) * 1000);
                    var y = datatime.getFullYear();
                    var m = datatime.getMonth() + 1;
                    m < 10 && (m = '0' + m);
                    var d = datatime.getDate();
                    d < 10 && (d = '0' + d);
                    var birth = y + "-" + m + "-" + d;

                    userHtml += `<tr>
                                <td>
                                    <input id="user${userInfo.id}-mycheckbox" name="user-contorl" data-color="yellow" type="checkbox" class="checkbix" data-text="">
                                    <label aria-label="" role="checkbox" for="user${userInfo.id}-mycheckbox" class="checkbix"><span class=""></span></label>
                                </td>
                                <td>${(num-1) * 9 + i + 1}</td>
                                <td><img src="${userInfo.icon_link}" alt=""></td>
                                <td>${userInfo.nickname}</td>
                                <td>${userInfo.sex == 0 ? '女' : '男'}</td>
                                <td>${birth}</td>
                                <td class="table-text">${userInfo.intro}</td>
                                <td>${userInfo.location}</td>
                                <td>${userNum.score_num}</td>
                                <td>${userNum.hot_num}</td>
                                
                                <td>${userInfo.phone}</td>
                                <td>${userInfo.add_time}</td>
                                <td class="text-blue">${userNum.publish_num}</td>
                                <td class="text-blue">${userNum.comment_num}</td>
                                <td class="text-blue">${userNum.order_num}</td>
                                ${userInfo.is_state == 1 ? '<td class="text-green">正常</td>' : '<td class="text-yellow">禁用</td>'}
                                <td><a href="" class="user-edit"><i class="fa fa-edit"></i></a></td>
                            </tr>`;
                }
                $('#tableSort>tbody').html(userHtml);
                TableSort();

                // 渲染分页按钮
                if(pageNum > 1 && num > 1){
                    btnHtml += `<button type="button" class="btn btn-yellow">上一页</button>`;
                }
                for(var i = 1; i <= pageNum; i++){
                    if(i == num){
                        btnHtml += `<button type="button" class="btn btn-yellow active">${i}</button>`;
                    }else{
                        btnHtml += `<button type="button" class="btn btn-yellow">${i}</button>`;
                    }
                }
                if(pageNum > 1 && num < pageNum){
                    btnHtml += `<button type="button" class="btn btn-yellow">下一页</button>`;
                }
                $('.page-btn').html(btnHtml);

                // 总数据
                // for(var i = 1;i < pageNum; i++){
                //     var userAll;
                //     console.log(userList.length);
                //     userAll += pageNum[i].data.info.length;
                // }

                $('#page-all').html(10);
                $('#page-star').html((num-1)*9+1);
                $('#page-end').html((num-1)*9+userList.length);


            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("上传失败，请检查网络后重试");
            }
        });
    }
    pageAjax(1);

    // 分页按钮点击
    $('.page-btn').on('click','.btn',function(){
        var toNum = $(this).html();
        var dNum =  parseInt($('.page-btn .active').html());
        console.log(dNum);
        if(toNum == '上一页'){
            pageAjax(dNum - 1);
        }else if(toNum == '下一页'){
            pageAjax(dNum + 1);
        }else{
            pageAjax(toNum);
        }
    });

})();
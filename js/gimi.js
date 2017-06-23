
(function () {

    // 左侧开关按钮
    $('.menu-list > a').click(function () {

        var parent = $(this).parent();
        var sub = parent.find('> ul');
        if (sub.is(':visible')) {
            sub.slideUp(200, function () {
                parent.removeClass('nav-active');
                //    $('.main-content').css({height: ''});
                //    mainContentHeightAdjust();
            });
        } else {
            visibleSubMenuClose();
            parent.addClass('nav-active');
            sub.slideDown(200, function () {
                // mainContentHeightAdjust();
            });
        }
        return false;
    });

    function visibleSubMenuClose() {
        $('.menu-list').each(function () {
            var t = $(this);
            if (t.hasClass('nav-active')) {
                t.find('> ul').slideUp(200, function () {
                    t.removeClass('nav-active');
                });
            }
        });
    }

    // 全选
    function selectAll(name, type) {
        if (name != null && name != "") {
            var userids = $("input[name='" + name + "']");
            if (userids != undefined && userids.length > 0) {
                if (type == "all") {
                    for (var i = 0; i < userids.length; i++) {
                        if (userids[i].checked == false) {
                            userids[i].checked = true;
                        }
                    }
                } else if (type == "notAll") {
                    for (var i = 0; i < userids.length; i++) {
                        if (userids[i].checked == true) {
                            userids[i].checked = false;
                        }
                    }
                } else if (type == "reAll") {
                    for (var i = 0; i < userids.length; i++) {
                        if (userids[i].checked == true) {
                            userids[i].checked = false;
                        } else {
                            userids[i].checked = true;
                        }
                    }
                }
            }
        }
    }
    

    // 用户管理全选
    $('#userall-mycheckbox').change(function () {
        if (this.checked == true) {
            selectAll('user-contorl', 'all');
        } else {
            selectAll('user-contorl', 'notAll');
        }
    });
    
    
    Checkbix.init();
    // 表格排序
    TableSort();
    // 时间
    format(new Date());
    //    调整主要内容高度
    //    function mainContentHeightAdjust() {
    //       // Adjust main content height
    //       var docHeight = $(document).height();
    //       if(docHeight > $('.main-content').height())
    //          $('.main-content').height(docHeight);
    //    }

    //  class add mouse hover
    // $('.custom-nav > li').hover(function () {
    //     $(this).addClass('nav-hover');
    // }, function () {
    //     $(this).removeClass('nav-hover');
    // });

})();
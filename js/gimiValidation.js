
var validator = function(){
    //用户编辑
    $('#userEdit').bootstrapValidator({
        message: '输入的内容无效',
        fields: {
            nickname: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空！'
                    }
                }
            },
            sex: {
                validators: {
                    notEmpty: {
                        message: '性别为必选项！'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: '性别为必选项！'
                    }
                }
            },
            birth: {
                validators: {
                    notEmpty: {
                        message: '生日不能为空！'
                    }
                }
            },
            location: {
                validators: {
                    notEmpty: {
                        message: '所在地不能为空！'
                    }
                }
            },
            intro: {
                validators: {
                    notEmpty: {
                        message: '个人简介不能为空！'
                    }
                }
            },
            register_time: {
                validators: {
                    notEmpty: {
                        message: '注册时间不能为空！'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: '手机号不能为空！'
                    },regexp: {
                        regexp: /^1[3|4|5|7|8][0-9]\d{8}$/,
                        message: '请输入正确的手机号码！'
                    }
                }
            }

        }
    });
     $('#tagEdit').bootstrapValidator({
        message: '输入的内容无效',
        fields: {
            tag: {
                validators: {
                    notEmpty: {
                        message: '标签名不能为空！'
                    }
                }
            }

        }
     });
}
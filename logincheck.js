
jQuery(document).ready(function() {

    $('.loginpage form').submit(function(){
        var username = $(this).find('.username').val();
        var password = $(this).find('.password').val();
        if(username == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
                alert("用户名不正确！");
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
		
        if(password == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
    });

    $('.loginpage form .username, .loginpage form .password').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });

});

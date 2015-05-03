(function(NS){
    "use strict";
    NS.validations = NS.validations || {} ;


    NS.validations = $.extend(NS.validations,{
        email : function(email){
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        },

        phone : function(phone){
            phone = phone.replace(/\D/g, '');
            return (phone.length === 10);
        },

        isntEmpty : function(str){
            return str.length > 1;
        },
        setFieldState : function(el, state){
            state ? el.removeClass('invalid') : el.addClass('invalid');
        }
    });

})(najwa);
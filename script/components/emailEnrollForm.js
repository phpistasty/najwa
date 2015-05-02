(function(NS){
    "use strict";

    var modules = $('.js_emailEnrollForm');

    NS.add('emailEnrollForm', {
        init : function(){
            if(modules.length > 1 ) {
                setBindings();
            }
        }
    });


    function submission(){
        var emailAddr = modules.find('.js_emailField');
        if(NS.validations.email(emailAddr.val())){
            NS.xhr({
               url : "/dummy",
                data: {
                    emailAddress : emailAddr.val()
                },
                success : successMessaging,
                error : errorMessaging
            });
        }else{
            // add validation fails
            emailAddr.addClass('invalid');
        }
    }

    function successMessaging(data){

    }

    function errorMessaging(){

    }

    function validationErrorMessaging(){

    }

    function setBindings(){
        modules.each(function(index){
            $(this).on('submit', function(evt){
                evt.preventDefault();
                evt.stopImmediatePropagation();
                submission( this );
                return false;
            });
        });
    }

})(najwa);
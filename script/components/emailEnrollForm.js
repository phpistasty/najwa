(function(NS){
    "use strict";

    var parent = $('.js_emailEnrollForm');

    NS.add('emailEnrollForm', {
        init : function(){
            console.log('init hit');
            setBindings();
        }
    });


    function submission(){
        var emailAddr = parent.find('.js_emailField');
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
        alert('yay');
    }

    function errorMessaging(){

    }

    function validationErrorMessaging(){

    }

    function setBindings(){
        parent.on('submit', function(evt){
            console.log('submit');
            evt.preventDefault();
            evt.stopImmediatePropagation();
            submission();
            return false;
        });
    }

})(najwa);
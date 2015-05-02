(function(NS){
    "use strict";

    var modules = $('.js_emailEnrollForm');
    var instances = [];

    NS.add('emailEnrollForm', {
        init : function(){
            modules.each(function(index){
                var form = new EmailEnrollmentForm(instances.length, $(this));
                //form.bindings();
                instances.push(form);
            });
        }
    });


    function EmailEnrollmentForm(index, $el){
        this.$el = $el;
        this.instanceId = index;
    }

    EmailEnrollmentForm.prototype.submission = function(){
        var emailAddr = this.$el.find('.js_emailField');
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
    };

    EmailEnrollmentForm.prototype.bindings = function(){

    };

    EmailEnrollmentForm.prototype.showSuccessState = function(){

    };


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
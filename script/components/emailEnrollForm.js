(function(NS){
    "use strict";

    var modules = $('.js_emailEnrollForm');
    var instances = [];

    NS.add('emailEnrollForm', {
        init : function(){
            modules.each(function(index){
                var form = new EmailEnrollmentForm(instances.length, $(this));
                form.bindings();
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
        this.$el.on('submit', function(evt){
            evt.preventDefault();
            evt.stopImmediatePropagation();
            submission( this );
            return false;
        });
    };

    EmailEnrollmentForm.prototype.showSuccessState = function(){

    };


})(najwa);
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
        if(!NS.validations.email(emailAddr.val())){
            NS.validations.setFieldState(emailAddr, false);
            return false;
        }
    };

    EmailEnrollmentForm.prototype.bindings = function(){
        var self = this;

        this.$el.on('submit', function(evt){
            if(!self.submission()){
                evt.preventDefault();
                return false;
            }
        });

        this.$el.on('focus', '.invalid', function(evt){
            NS.validations.setFieldState($(this), true);
        });

    };

    EmailEnrollmentForm.prototype.showSuccessState = function(){

    };


})(najwa);
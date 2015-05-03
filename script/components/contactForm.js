(function(NS){
    "use strict";

    var modules = $('.js_contactUsForm');
    var instances = [];

   NS.add('contactForm', {
       init : function(){

           modules.each(function(index){
               var form = new ContactUsForm(instances.length, $(this));
               form.bindings();
               instances.push(form);
           });
       }
   });

    function ContactUsForm(index, $el ){
        this.$el = $el;
        this.instanceId = index;
    }

    ContactUsForm.prototype.submission = function(){

        var ajax,
            formData = {
            type : this.$el.find('.js_type').val(),
            email: this.$el.find('.js_email').val(),
            name : this.$el.find('.js_name').val(),
            body : this.$el.find('.js_body').val()
        };

        return this.validate(formData);
    };


    ContactUsForm.prototype.validate = function(formData){
        var valid = true;

        // dirty validations
        if(!NS.validations.email(formData.email)){
            this.emailState(false);
            valid = false;
        }

        if(!NS.validations.isntEmpty(formData.name)){
            this.nameState(false);
            valid = false;
        }

        if(!NS.validations.isntEmpty(formData.body)){
            this.bodyState(false);
            valid = false;
        }

        return valid;
    };

    ContactUsForm.prototype.emailState = function(valid){
        NS.validations.setFieldState(this.$el.find('.js_email'), valid);
    };

    ContactUsForm.prototype.nameState = function(valid){
        NS.validations.setFieldState(this.$el.find('.js_name'), valid);
    };

    ContactUsForm.prototype.bodyState = function(valid){
        NS.validations.setFieldState(this.$el.find('.js_body'), valid);
    };

    ContactUsForm.prototype.bindings = function(){
        var self = this;
        this.$el.on('submit', function(evt){
            if(!self.submission()){
                evt.preventDefault();
                return false;
            }
        });

        this.$el.on('focus change', '.invalid', function(evt){
            NS.validations.setFieldState($(this), true);
        });

    };

})(najwa);
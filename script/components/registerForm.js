(function(NS){

    "use strict";

    var modules = $('.js_registerForm');
    var instances = [];


    NS.add('registerForm', {
        init : function(){
            modules.each(function(index){
                var form = new RegisterForm(instances.length, $(this));
                form.bindings();
                instances.push(form);
            });
        }
    });

    function RegisterForm(index, $el){
        this.instanceId = index;
        this.$el = $el;
    }

    RegisterForm.prototype.bindings = function(){
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

    RegisterForm.prototype.submission = function(){

        var formData = {
            name : this.$el.find('.js_name').val(),
            email : this.$el.find('.js_email').val(),
            phone : this.$el.find('.js_phone').val()
        };

        return this.validate(formData);

    };


    RegisterForm.prototype.validate = function(formData){
        var valid = true;
        if(!NS.validations.isntEmpty(formData.name)){
            NS.validations.setFieldState(this.$el.find('.js_name'), false);
            valid = false;
        }
        if(!NS.validations.email(formData.email)){
            NS.validations.setFieldState(this.$el.find('.js_email'), false);
            valid = false;
        }
        if(!NS.validations.phone(formData.phone)){
            NS.validations.setFieldState(this.$el.find('.js_phone'), false);
            valid = false;
        }

        return valid;
    };





})(najwa);
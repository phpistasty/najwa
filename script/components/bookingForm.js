(function(NS){
    "use strict";
    var modules = $('.js_bookingForm');
    var instances = [];

    NS.add('bookingForm', {
        init : function(){
            modules.each(function(index){
                var form = new BookingForm(index, $(this));
                form.bindings();
                instances.push(form);
            });
        }
    });

    function BookingForm(index, $el){
        this.instanceId = index;
        this.$el = $el;
    }

    BookingForm.prototype.bindings = function(){
        this.$el.on('focus change', '.invalid', function(){
            NS.validations.setFieldState($(this), true);
        });
        this.$el.on('submit', function(evt){

        });
    };

    BookingForm.prototype.submission = function(evt){
        var formData = {
            name: this.$el.find('.js_name').val(),
            email: this.$el.find('.js_email').val(),
            telephone: this.$el.find('.js_telephone').val(),
            date: this.$el.find('.js_date').val()
        };
        return this.validate(formData);
    };

    BookingForm.prototype.validate =  function(formData){
        var valid = true;

        if(!NS.validations.isntEmpty(formData.name)){
            valid = false;
        }

        if(!NS.validations.email(formData.email)){
            this.setEmailState(false);
            valid = false;
        }

        if(!NS.validations.phone(formData.telephone)){
            this.setPhoneState(false);
            valid = false;
        }

        if(!NS.validations.date.isntEmpty(formData.date)){
            this.setDateState(false);
            valid = false;
        }

        return valid;
    };

    BookingForm.prototype.setNameState = function(valid){
        NS.validations.setFieldState(this.$el.find('.js_name'), valid);
    };

    BookingForm.prototype.setEmailState = function(valid){
        NS.validations.setState(this.$el.find('.js_email'), valid);
    };

    BookingForm.prototype.setPhoneState = function(valid){
        NS.validations.setState(this.$el.find('.js_telephone'), valid);
    };

    BookingForm.prototype.setDateState = function(valid){
        NS.validations.setState(this.$el.find('.js_date'), valid);
    };


})(najwa);
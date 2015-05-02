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
            subject : this.$el.find('.js_subject').val(),
            body : this.$el.find('.js_body').val()
        };

        // validate form data
        // submit XHR;
        if(this.validate(formData)){
            ajax = this.submit(formData);
        }else{
            // form isn't valid , if any state needs to be on the whole form
        }

    };

    ContactUsForm.prototype.submit = function(formData){

        return NS.xhr({
            url : "/contactform",
            data : formData,
            success : this.showSuccessState
        });

    };

    ContactUsForm.prototype.validate = function(formData){
        var valid = true;

        // dirty validations
        if(!NS.validations.email(formData.email)){
            this.emailState(false);
            valid = false;
        }

        if(!NS.validations.isntEmpty(formData.subject)){
            this.subjectState(false);
            valid = false;
        }

        if(!NS.validations.isntEmpty(formData.body)){
            this.bodyState(false);
            valid = false;
        }

        return valid;
    };

    ContactUsForm.prototype.showSuccessState = function(data){
        // show the 'submit successful'

    };

    ContactUsForm.prototype.emailState = function(valid){
        if(valid){
            // disable invalid?
        }else{
            // show error state
        }
    };

    ContactUsForm.prototype.subjectState = function(valid){
        if(valid){
            // disable invalid?
        }else{
            // show error state
        }

    };

    ContactUsForm.prototype.bindings = function(){
        var self = this;
        this.$el.on('submit', function(evt){
            evt.preventDefault();
            self.submission();
            return false;
        });
    };



})(najwa);
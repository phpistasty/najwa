(function(NS){
    "use strict";
    var modules = $('.js_bookingForm');

    NS.add('bookingForm', {
        init : function(){

        }
    });

    function BookingForm(index, $el){
        this.instanceId = index;
        this.$el = $el;
    }

    BookingForm.prototype.bindings = function(){

    }


})(najwa);
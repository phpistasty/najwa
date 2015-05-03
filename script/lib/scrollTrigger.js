(function(NS){
    "use strict";

    NS.ScrollTrigger = ScrollTrigger;
    var instances = [];

    function ScrollTrigger(){
        instances.push(this);
        return this;
    }

    ScrollTrigger.prototype.setBreakpoint = function(px){
        this.breakpoint = px;
        return this;
    };

    ScrollTrigger.prototype.setOnClass = function(onClass){
        this.onClass = onClass;
        return this;
    };

    ScrollTrigger.prototype.setElement = function($el){
        this.$el = $el;
        return this;
    };

    ScrollTrigger.prototype.setScrollPosition = function(position){
        if(this.breakpoint < position){
            if(!this.$el.hasClass(this.onClass)){
                this.$el.addClass(this.onClass);
            }
        }else{
            this.$el.removeClass(this.onClass);
        }
    };

    $(window).on('scroll', function(){
        var spos = $(window).scrollTop();
        for(var i = 0; i < instances.length; i++){
            instances[i].setScrollPosition(spos);
        }
    });




})(najwa);
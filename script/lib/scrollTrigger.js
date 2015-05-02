(function(NS){
    "use strict";

    NS.ScrollTrigger = ScrollTrigger;
    var instances = [];

    function ScrollTrigger(){
        console.log('init scroll trigger');
        console.log(instances);
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
        console.log(this.breakpoint)
        if(this.breakpoint < position){
            console.log(this.breakpoint, position);
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
            console.log(instances);
            instances[i].setScrollPosition(spos);
        }
    });




})(najwa);
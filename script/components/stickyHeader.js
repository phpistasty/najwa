(function(NS){
    "use strict";
    var modules = $('.js_stickyHeader');
    var instances = [];


    NS.add('stickyHeader', {
        init : function() {
            modules.each(function(index){
                console.info(index);
                console.log(NS);
                var stickyHeader = new StickyHeader(instances.length, $(this));
                instances.push(stickyHeader);
            });
        }
    });


    function StickyHeader(index, $el){
        this.$el = $el;
        this.instanceId = index;
        var scroller = new NS.ScrollTrigger();
        scroller.setBreakpoint(this.$el.offset().top + this.$el.height())
            .setOnClass('sticky')
            .setElement(this.$el);
    }




})(najwa);
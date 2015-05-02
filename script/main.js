/**
 * Created by stevemorgan on 5/2/15.
 */

// declare namespaces for object structure

var najwa = {
    add : function(module, obj){
        this.modules[module] = $.extend(this.modules[module], obj);
    },
    xhr :function(req){
        if(typeof req !== "object"){
            throw new Error("Request object missing");
        }
        req.method = req.method || "POST";
        return $.ajax(req);
    },
    modules : {

    }
};


$(document).ready(function(){
   for(key in najwa.modules){

       if(typeof najwa.modules[key].init === "function"){
           najwa.modules[key].init();
       }
   }
});
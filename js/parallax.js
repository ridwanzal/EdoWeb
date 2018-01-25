/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * module parallax example
 */

var parallax  = debounce(function(){
    
});

function debounce(func, wait, immediate){
    var tiemout;
    return function(){
        var context = this;
        args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function(){
           timeout = null;
           if(!immediate) func.apply(context, args);
        }, wait);
        if(immediate && !timeout) func.apply(context, args);
    }
}
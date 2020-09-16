define(()=>{
    function counter(){
        this.value = 0;
    }
    counter.prototype = {
        getValue: function(){
            return this.value;
        },
        increment: function(){
           this.value=this.value+1;
        }
    }
 
    return counter;
 })
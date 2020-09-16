/* define(()=>{
   let counter = { 

        getValue: ()=>{
            if(localStorage.getItem('counter')){
                return +localStorage.getItem('counter')
            }
            else{                
                localStorage.setItem('counter', 0);
                return 0;
            }
        },
        increment: ()=>{
            let counterValue = +localStorage.getItem('counter');
            localStorage.setItem('counter', ++counterValue);
        }
    }
    
    return counter; 
}) */
define(['counterBase'], (counterBase)=>{
    return new counterBase();
})
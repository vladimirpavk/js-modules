requirejs(['require.config'], ()=>{
    requirejs(['math', 'htmlParser'], ()=>{
        let val = 1;
        define(()=>{
            return{
                initializeCounter: ()=>{
                    let element = htmlParser.getCounter();
                    element.innerHTML=val;
                    setInterval(()=>{
                        val = val + 1;
                        element.innerHTML = val; 
                    },1000);            
                
                    htmlParser.getResetButton().addEventListener('click', (event)=>{                
                        val = math.resetValue(val);
                    })
                
                    htmlParser.getPlusButton().addEventListener('click', (event)=>{
                        val = math.addValue(val, 5);
                    })
                
                    htmlParser.getMinusButton().addEventListener('click', (event)=>{
                        val = math.subValue(val, 5);
                    })                                     
                }
            }
        })
    })       
})
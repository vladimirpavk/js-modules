requirejs(['math', 'htmlParser', 'counter'], (math, htmlParser, counter)=>{
    let element = htmlParser.getCounter();    
    setInterval(()=>{       
        element.innerHTML = counter.getValue();
        counter.increment();
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
})          
define(["utils/math"], (math)=>{    
    let val = 1;

    return{
        initializeCounter: ()=>{        
            let element = document.getElementsByClassName('counter')[0];
            element.innerHTML=val;
            setInterval(()=>{
                val = val + 1;
                element.innerHTML = val; 
            },1000);            
        
            document.getElementById('resetButton').addEventListener('click', (event)=>{                
                val = math.resetValue(val);
            })
        
            document.getElementById('plusButton').addEventListener('click', (event)=>{
                val = math.addValue(val, 5);
            })
        
            document.getElementById('minusButton').addEventListener('click', (event)=>{
                val = math.subValue(val, 5);
            })

            if(document.getElementsByClassName('nextPageButton')[0]){
                document.getElementsByClassName('nextPageButton')[0].addEventListener('click', (event)=>{
                    //console.log('sdfsdf');
                    window.location="2page.html";
                })
            }      
        }
    }
})
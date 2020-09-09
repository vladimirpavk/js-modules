window.onload = (doc)=>{    
    let val = 1;
    let element = document.getElementsByClassName('counter')[0];
    element.innerHTML=val;
    setInterval(()=>{
        val = val + 1;
        element.innerHTML = val; 
    },1000);

    document.getElementById('resetButton').addEventListener('click', (event)=>{
        console.log(event);
    })

    document.getElementById('plusButton').addEventListener('click', (event)=>{
        console.log(event);
    })

    document.getElementById('minusButton').addEventListener('click', (event)=>{
        console.log(event);
    })
}
define(
    ()=>{
        return{
            getWindow: ()=>window,
            getBody: ()=>document.getElementsByTagName('body')[0],
            getCounter: ()=>document.getElementsByClassName('counter')[0],
            getResetButton: ()=>document.getElementById('resetButton'),
            getPlusButton: ()=>document.getElementById('plusButton'),
            getMinusButton: ()=>document.getElementById('minusButton'),
            getNextPageButton: ()=>document.getElementsByClassName('nextPageButton')[0]
        
        }
    });
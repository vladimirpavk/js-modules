define(()=>{
    let stats = {
        counter:+localStorage.getItem('counter')
    }
    return stats;
})
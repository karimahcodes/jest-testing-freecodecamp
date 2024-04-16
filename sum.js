// function sum (a,b) {
    //     return a + b;
    // }
    
    // function myFunction(input){
    //     if (typeof input !=='number') {
    //         throw new Error('Invalid input')
    //     }
    // }
    // module.exports = {
    //     sum,
    //     myFunction
    //   };




    /*****TESTING ASYNCHRONOUS FUNCTIONS****/
    //callback function
    function fetchData(callback) {
        setTimeout(()=>{
            callback('peanut butter')
        }, 1000);
    }
    function fetchPromise(){
        return new Promise((resolve, reject) =>
        setTimeout(()=>resolve('peanut butter', 1000))
    )
    }
    
    module.exports = {
        fetchData, fetchPromise
    };

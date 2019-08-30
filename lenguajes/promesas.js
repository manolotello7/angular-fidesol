function algoAsinc () {
    return new Promise( (resolve, reject) => {
        setTimeout ( () => {
            let n = Math.random()
            if (n < 0.8) {resolve('Todo OK ' + n)} 
            else {reject('Error ' + n)}
        }, 1000)
    })
}  


algoAsinc()
.then( (data) => { console.log(data)})
.catch( (error) =>{ console.log(error)});

// async await (ES6+)

(async function () {
    try {
        let data = await algoAsinc()
        console.log(data)        
    } catch (error) {
        console.log(error)
    }
})()
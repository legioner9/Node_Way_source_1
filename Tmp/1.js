const createPromise = (value, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, delay)
    })
}

const p1 = createPromise('Pr_1',200);
const p2 = createPromise('Pr_1',300);
const p3 = createPromise('Pr_1',100);

async function start (){
    const res = await Promise.race([p1,p2,p3]);  
    res   
}

start()





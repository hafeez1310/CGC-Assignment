const arr = ["a", "a", "a", "b", "b", "c", "c", "c", "d"];

let res =arr.reduce((acc,currVal)=>{
    if(!acc[currVal]) {
        acc[currVal] = 1
    } else{
        acc[currVal] +=1
    }
    return acc
},{})
console.log(res);


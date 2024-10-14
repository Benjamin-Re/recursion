function fibs (n) {
    let arr = [0, 1]  
    for(let i = 2; i <= n; i++) {
        let currentFibo = 0
        currentFibo += (arr[i-1] + arr[i-2])
        arr.push(currentFibo)
    }
}

function fibsRec(n) {
    if(n === 0) {
        return [0, 1]
    } else {
        let arr = fibsRec(n - 1)
        let currentFibo = (arr[n] + arr[n - 1])
        return arr.concat(currentFibo)
    }
}

console.log(fibsRec(8))


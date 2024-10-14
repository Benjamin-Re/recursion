function mergeSort(arr) {
    if(arr.length === 1) {
        return arr
    } else {
        let arrA = arr.slice(0, arr.length / 2)
        let arrB = arr.slice(arr.length / 2)
        arrA = mergeSort(arrA)
        arrB = mergeSort(arrB)
        return merge(arrA, arrB)
    }
}

function merge(a, b) {
    let c = []
    while(a.length > 0 && b.length > 0) {
        if(a[0] > b[0]){
            c.push(b.shift())
        } else {
            c.push(a.shift())
        }
    }
    // either a or b is empty but we don't know which one
    while(a.length > 0) {
        c.push(a.shift())
    }
    while(b.length > 0) {
        c.push(b.shift())
    }
    return c
}

console.log(mergeSort([2, 3, 1, 5, 0]))
/* mergeSort([2, 3, 1, 5, 0])
arrA = 2, 3
arrB = 1, 5, 0
arrA = mergeSort(2,3) <== c [2, 3]
    arrA = 2
    arrB = 3
    arrA = mergeSort(2) = 2
        return 2
    arrB = mergeSort(3) = 3
        return 3
    return merge(2, 3) = [2, 3]
        c = [] 
        c = [2]
        c = [2, 3]
arrB = mergeSort(1,5,0) <== [0, 1, 5]
    arrA = [1]
    arrB = [5, 0]
    arrA = mergeSort([1]) = 1
    arrB = mergeSort([5,0]) <== [0, 5]
        arrA = 5
        arrB = 0
        arrA = mergeSort(5) = 5
        arrB = mergeSort(0) = 0
        return merge ==> c = [0, 5]
    return merge ==> [0, 1, 5]
return merge([2,3] [0, 1 5])
    c = [0, 1, 2, 3, 5] <===
*/



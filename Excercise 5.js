//5.  Given an array of numbers which is almost sorted in 
//ascending order.  Find the index where sorting order is violated.


function findmin(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i + 1]){
            return i + 1
        }
    }
}

console.log(findmin([2, 12, 15, 48, 64]))
console.log(findmin([-9, -4, -4, 3, 12, 4, ]))

//5.  Given an array of numbers which is almost sorted in 
//ascending order.  Find the index where sorting order is violated.

//------------------ 1st version-----------------

function findmin(arr) {
    // debugger
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return arr[i+1];
        }   
    }
    return -1;
}

console.log(findmin([2, 12, 15, 48, 64]));
console.log(findmin([-9, -4, -4, 3, 12, 4, ]));

//-----------------2nd version with recursion ----------

function findmin(arr) {
    // debugger
    if (arr[0]< arr[1]) {
        arr.shift();
        return findmin(arr);
    }
    if (arr.length < 2) {
        return "The sorting is right";
    }
    return arr[1];
}

console.log(findmin([2, 12, 15, 48, 64]));
console.log(findmin([-9, -4, -4, 3, 12, 4, ]));
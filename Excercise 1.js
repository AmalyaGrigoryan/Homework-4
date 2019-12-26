//1.  Write a function which receives an array and a number as arguments and returns a 
//new array from the elements of the given array which are larger than the given number.  

function findmax(arr, number){
    var largest = []
    for (var counter = 0; counter < arr.length; counter++) {
     if (arr[counter] > number) {
       largest.push(arr[counter])
     }
    }
    return largest
 }
   
 console.log(findmax([10, 25, 16, -5, 30, 15, 24], 16))

 function  loop(arr,b){
    str = "["
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > b) {
        if (i != arr.length - 1) {
          str += arr[i] + ", "
        }
        else {
          str += arr[i] + "]"
        }
      }
    }
    if (str.length == 1) {
      console.log("Such numbers does not exist.")
    }
    else{
      console.log(str)
    }
  }
  loop([10, 25, 16, -5, 30, 15, 24],16);


  
 function  loop(arr,b){
    str = "["
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > b) {
        if (i != arr.length - 1) {
          str += arr[i] + ", "
        }
        else {
          str += arr[i] + "]"
        }
      }
    }
    if (str.length == 1) {
      console.log("Such numbers does not exist.")
    }
    else{
      console.log(str)
    }
  }
  loop([1, 1, 2, -3, 0, 8, 4, 0],9);
//4. Given an array of numbers. Write a recursive
// function to find its minimal positive element.
// (if such element does not exist, return -1)․

// function findmin(arr){
// 	arr = arr.sort(function(a, b){return a-b});
// 	console.log(arr)
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 0) {
// 			console.log(arr[i])
// 			break; 
// 		}
// 	}
// }

// findmin([56, -9, 87, -23, 5, -105, 55, 6]);



function findmin(arr){
 
var output = [];
var inserted;

for (var i = 0, ii = arr.length ; i < ii ; i++){
  inserted = false;
  for (var j = 0, jj = output.length ; j < jj ; j++){
    if (arr[i] < output[j]){
      inserted = true;
      output.splice(j, 0, arr[i]);
      break;
    }
  }
    if (!inserted){
        output.push(arr[i])
    }
}
for(let i = 0;i < output.length; i++){
    if(output[i] > 0){
        console.log(output[i])
        return false;
    }
}
}

findmin([56, -9, 87, -23, 5, -105, 55, 1]);
findmin([45, -9, 15, 5, -78]);
findmin([-5, -9, -111, -1000, -7]);







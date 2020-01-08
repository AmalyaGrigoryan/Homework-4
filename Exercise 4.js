//4. Given an array of numbers. Write a recursive
// function to find its minimal positive element.
// (if such element does not exist, return -1)․

//------------1st version with recursion---------------------

function findmin(arr) {
    // debugger
  var c = arr[0];

    if ((arr[arr.length - 1]) < 0) {
        arr.pop();
    }
    if ((arr[arr.length - 1]) < c) {
        arr.shift();
        return findmin(arr);
    }
    if (c < 0) {
        arr.shift();
        return findmin(arr);
    }
    if (!c) {
        return -1;
    }
    return c;
}
console.log(findmin([56, -9, 87, -23, 5, -105, 55, 1]));
console.log(findmin([45, -9, 15, 5, -78]));
console.log(findmin([-5, -9, -111, -1000, -7]));

//--------2nd version without recursion--------------------------

function findmin(arr) {
  var output = [];
  var inserted;
    
    for (var i = 0, ii = arr.length ; i < ii ; i++) {
      inserted = false;
        for (var j = 0, jj = output.length ; j < jj ; j++) {
            if (arr[i] < output[j]) {
              inserted = true;
              output.splice(j, 0, arr[i]);
              break;
            }
        }
        if (!inserted) {
            output.push(arr[i]);
        }
    }

    for (let i = 0;i < output.length; i++) {
        if (output[i] > 0) {
            console.log (output[i]);
            return false;
        }  
    }
    console.log( -1 );
}
    
findmin([56, -9, 87, -23, 5, -105, 55, 1]);
findmin([45, -9, 15, 5, -78]);
findmin([-5, -9, -111, -1000, -7]);

//---------------3rd version ---------------

function findmin(arr){
  // debugger
  arr = arr.sort(function(a, b){return a-b});
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			console.log(arr[i]);
			break; 
		}
    }
    console.log(-1);
}
    
findmin([56, -9, 87, -23, 5, -105, 55, 1]);
findmin([45, -9, 15, 5, -78]);
findmin([-5, -9, -111, -1000, -7]);


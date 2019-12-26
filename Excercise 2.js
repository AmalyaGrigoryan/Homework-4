//2. Write a function, which receives two numbers as arguments 
//and finds all numbers between them such that each digit of the number is even. 
//The numbers obtained should be printed in a comma-separated sequence on a single line.
// function  loop(a,b){
//   str = ""
//   for (let i = a; i <= b; i++) {
//     if (i % 2 == 0) {
//       c = false;
//       i += ""
//       for (var j = 0; j < i.length; j++) {
//         if (i[j] % 2 != 0) {
//           // console.log(i[j])
//           c = true;
//         }
//       }
//       if (!c) {
//         str += i+", "
//       }
//     }
//   }
//   console.log(str)
// }
// loop(19,42);


function  loop(a,b){
  str = ""
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      c = false;
      i += ""
      for (var j = 0; j < i.length; j++) {
        if (i[j] % 2 != 0) {
          // console.log(i[j])
          c = true;
        }
      }
      if (!c) {
        str += i+", "
      }
    }
  }
  if (str == "") {
    console.log("Such numbers does not exist.")
  }
  else{
    console.log(str)
  }
}
loop(99,199);
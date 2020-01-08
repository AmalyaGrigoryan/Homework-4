// 3.Write a recursive function to determine 
// whether all digits of the number are odd or not

// -----------1st version with recursion-------------
function truefalse(a) {
  // debugger
  a += "";
    if ((a % 10) % 2 !== 0) {
        a = (a - (a % 10) ) / 10;
        return truefalse(a);
    }
    if (a == 0) {
     return true;
    }
  return false;
}
console.log(truefalse(4211133));
console.log(truefalse(7791));
console.log(truefalse(5));

//----------2nd version without recursion--------------------------

function truefalse(a) {
  c = true;
  a += "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
      c = false;
    }
  }
  console.log(c);
}
truefalse(4211133);
truefalse(7791);
truefalse(5);
// //------------------------------------------------------


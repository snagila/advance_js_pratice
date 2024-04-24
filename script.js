var globalVar = "Global";
let innerFuncVar = "Test";

function outerFunctionScop() {
  var outerFunVar = " Outer";

  function innerFuncScop() {
    var innerFuncVar = "inner";

    // if (true) {
    //   let val = "is true";
    //   console.log(val);
    // }

    console.log(innerFuncVar);
    // console.log(outerFunVar);
    // console.log(globalVar);
  }
  innerFuncScop();
}

outerFunctionScop();

// console.log(innerFuncVar);
// console.log(outerFunVar);
// console.log(globalVar);



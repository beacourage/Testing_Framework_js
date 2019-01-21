"use strict"
const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

var assertion;

function ExpectEquality(actual, expected) {
  if (actual === expected) {
    console.log('pass');
    return true;
  } else {
    console.log('fail');
    return false;
  };
};

const expect = (actual) => ({
  toEqual: (expected) => {
    if (actual === expected) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

// const expect = (actual) => {
//   return matchers(actual)
// }
//
// const matchers = (actual) => ({
//   toEqual: (expected) => {
//     if (actual === expected) {
//       console.log('pass')
//       return true
//     } else {
//       console.log('fail')
//       return false
//     }
//   }
// })
//

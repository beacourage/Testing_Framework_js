"use strict"
const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

var assertion;

function ExpectEquality(actual, expected) {
  if (actual === expected) {
    console.log('%c pass', 'color:#008000');
    return true;
  } else {
    console.log('%c fail', 'color:#ff0000'	);
    return false;
  };
};

const expect = (actual) => ({
  toEqual: (expected) => {
    if (actual === expected) {
      console.log('%c pass', 'color:#008000')
      return true
    } else {
      console.log('%c fail', 'color:#ff0000')
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

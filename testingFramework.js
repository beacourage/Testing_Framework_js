const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

var assertion;

function ExpectEquality(assertion, exp) {
  if (exp === assertion) {
    console.log('pass');
    return true;
  } else {
    console.log('fail');
    return false;
  };
};

const expect = (exp) => {
  return matchers(assertion)
}

const matchers = (exp) => ({
  toEqual: (asssertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

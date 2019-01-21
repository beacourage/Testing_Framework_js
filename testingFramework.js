const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

function ExpectEquality(assertion, exp) {
  if (exp === assertion) {
    console.log('pass');
    return true;
  } else {
    console.log('fail');
    return false;
  };
};

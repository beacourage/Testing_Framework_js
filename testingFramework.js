const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

describe('Outer', function() {
  describe('Inner', function() {
  })
})

// const it = (message, fn) => describe(' ' + message, fn)
//
// // expect(value).toBe(value)
//
// const expect = (value) => { return }

// now we can type expect(1) we just need an object with a toBe property,
// that does the comparison between the value passed to expect and the value
// passed to toBe

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})
//
// the object returned by expect will contain at least one matcher, toBe,
// and hopefully toEqual in the future

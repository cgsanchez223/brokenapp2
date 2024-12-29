const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('output for the words', () => {
    expect(timeWord('04:23')).toBe('four twenty three am')
  })

  test('outputs words with --ty', () => {
    expect(timeWord('12:20')).toBe('twelve twenty pm')
  })

  test('midnight output', () => {
    expect(timeWord('00:00')).toBe('midnight')
  })

  test('noon output', () => {
    expect(timeWord('12:00')).toBe('noon')
  })

  test('throws error for out of range input', () => {
    expect(() => {
      timeWord("25:70")
    }).toThrow()
  })

  test('throws error for negative input', () => {
    expect(() => {
      timeWord("-1:-1")
    }).toThrow()
  })
});
export class RomanNumeralGenerator {
  generate(number: number) {
    const numerals = {
      1: "I",
      5: "V",
      10: "X"
    };
    return numerals[number];
  }
}

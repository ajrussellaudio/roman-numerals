export class RomanNumeralGenerator {
  generate(number: number) {
    const numerals = {
      1: "I",
      5: "V"
    };
    return numerals[number];
  }
}

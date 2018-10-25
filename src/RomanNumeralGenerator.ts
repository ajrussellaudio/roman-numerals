export class RomanNumeralGenerator {
  generate(number: number) {
    const numerals = {
      1: "I",
      5: "V",
      10: "X",
      50: "L",
      100: "C",
      500: "D"
    };
    return numerals[number];
  }
}

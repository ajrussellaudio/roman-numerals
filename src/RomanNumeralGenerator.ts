export class RomanNumeralGenerator {
  numerals = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I"
  };

  generate(number: number) {
    return this.numerals[number];
  }
}

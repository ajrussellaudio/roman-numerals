export class RomanNumeralGenerator {
  numerals: object = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I"
  };

  generate(number: number): string {
    return this.numerals[number];
  }

  getSortedNumeralKeys(): number[] {
    return Object.keys(this.numerals)
      .map(numeral => parseInt(numeral))
      .sort((a, b) => b - a);
  }
}

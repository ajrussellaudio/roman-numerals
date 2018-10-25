export class RomanNumeralGenerator {
  numerals: object = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  };

  generate(number: number): string {
    if (number <= 0) {
      return "";
    }
    if (this.numerals[number]) {
      return this.numerals[number];
    }
    const sortedKeys = this.getSortedNumeralKeys();
    for (let i = 0; i < sortedKeys.length; i++) {
      if (number > sortedKeys[i]) {
        return (
          this.numerals[sortedKeys[i]] + this.generate(number - sortedKeys[i])
        );
      }
    }
  }

  getSortedNumeralKeys(): number[] {
    return Object.keys(this.numerals)
      .map(numeral => parseInt(numeral))
      .sort((a, b) => b - a);
  }
}

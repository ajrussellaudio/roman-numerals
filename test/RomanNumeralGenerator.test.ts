import { RomanNumeralGenerator } from "../src/RomanNumeralGenerator";
import { expect } from "chai";

describe("RomanNumeralGenerator", () => {
  describe("generate", () => {
    let roman;

    beforeEach(() => {
      roman = new RomanNumeralGenerator();
    });

    it("should convert 0 to an empty string", () => {
      expect(roman.generate(0)).to.equal("");
    });

    it("should convert 1 to I", () => {
      expect(roman.generate(1)).to.equal("I");
    });

    it("should convert 2 to II", () => {
      expect(roman.generate(2)).to.equal("II");
    });

    it("should convert 3 to III", () => {
      expect(roman.generate(3)).to.equal("III");
    });

    it("should convert 4 to IV", () => {
      expect(roman.generate(4)).to.equal("IV");
    });

    it("should convert 5 to V", () => {
      expect(roman.generate(5)).to.equal("V");
    });

    it("should convert 9 to IX", () => {
      expect(roman.generate(9)).to.equal("IX");
    });

    it("should convert 10 to X", () => {
      expect(roman.generate(10)).to.equal("X");
    });

    it("should convert 20 to XX", () => {
      expect(roman.generate(20)).to.equal("XX");
    });

    it("should convert 40 to XX", () => {
      expect(roman.generate(40)).to.equal("XL");
    });

    it("should convert 50 to L", () => {
      expect(roman.generate(50)).to.equal("L");
    });

    it("should convert 99 to XCIX", () => {
      expect(roman.generate(99)).to.equal("XCIX");
    });

    it("should convert 100 to C", () => {
      expect(roman.generate(100)).to.equal("C");
    });

    it("should convert 400 to CD", () => {
      expect(roman.generate(400)).to.equal("CD");
    });

    it("should convert 500 to D", () => {
      expect(roman.generate(500)).to.equal("D");
    });

    it("should convert 900 to CM", () => {
      expect(roman.generate(900)).to.equal("CM");
    });

    it("should convert 1000 to M", () => {
      expect(roman.generate(1000)).to.equal("M");
    });

    it("should convert 3999 to MMCMXCIX", () => {
      expect(roman.generate(3999)).to.equal("MMMCMXCIX");
    });
  });

  describe("getSortedNumeralKeys", () => {
    let roman;

    beforeEach(() => {
      roman = new RomanNumeralGenerator();
    });

    it("should return array of valid numeral keys, sorted in descending order", () => {
      expect(roman.getSortedNumeralKeys()).to.eql([
        1000,
        900,
        500,
        400,
        100,
        90,
        50,
        40,
        10,
        9,
        5,
        4,
        1
      ]);
    });
  });
});

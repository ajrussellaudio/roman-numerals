import { RomanNumeralGenerator } from "../src/RomanNumeralGenerator";
import { expect } from "chai";

describe("RomanNumeralGenerator", () => {
  let roman;

  beforeEach(() => {
    roman = new RomanNumeralGenerator();
  });

  it("should convert 1 to I", () => {
    expect(roman.generate(1)).to.equal("I");
  });

  it("should convert 5 to V", () => {
    expect(roman.generate(5)).to.equal("V");
  });

  it("should convert 10 to X");
  it("should convert 50 to L");
  it("should convert 100 to C");
  it("should convert 500 to D");
  it("should convert 1000 to M");
});

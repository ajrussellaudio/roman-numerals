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

  it("should convert 10 to X", () => {
    expect(roman.generate(10)).to.equal("X");
  });

  it("should convert 50 to L", () => {
    expect(roman.generate(50)).to.equal("L");
  });

  it("should convert 100 to C", () => {
    expect(roman.generate(100)).to.equal("C");
  });

  it("should convert 500 to D", () => {
    expect(roman.generate(500)).to.equal("D");
  });

  it("should convert 1000 to M", () => {
    expect(roman.generate(1000)).to.equal("M");
  });
});

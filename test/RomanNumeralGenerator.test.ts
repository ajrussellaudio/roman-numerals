import { RomanNumeralGenerator } from "../src/RomanNumeralGenerator";
import { expect } from "chai";

describe("RomanNumeralGenerator", () => {
  let romanNumeralGenerator;

  beforeEach(() => {
    romanNumeralGenerator = new RomanNumeralGenerator();
  });

  it("should convert 1 to I");
  it("should convert 5 to V");
  it("should convert 10 to X");
  it("should convert 50 to L");
  it("should convert 100 to C");
  it("should convert 500 to D");
  it("should convert 1000 to M");
});

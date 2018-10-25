import { RomanNumeralGenerator } from "./src/RomanNumeralGenerator";

const number: number = parseInt(process.argv[2]);
const roman: RomanNumeralGenerator = new RomanNumeralGenerator();
const numeral: string = roman.generate(number);

console.log(number + " as a Roman numeral is:");
console.log(numeral);

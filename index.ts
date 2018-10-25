import { RomanNumeralGenerator } from "./src/RomanNumeralGenerator";

if (!process.argv[2]) {
  console.error(
    "Invalid input!\nPlease pass a number as an argument to run, e.g.\n\tnpm start -- 138"
  );
} else {
  const number: number = parseInt(process.argv[2]);
  const roman: RomanNumeralGenerator = new RomanNumeralGenerator();
  const numeral: string = roman.generate(number);

  console.log(number + " as a Roman numeral is:");
  console.log(numeral);
}

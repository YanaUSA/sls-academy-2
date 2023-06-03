import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

import {
  sortWordsAlphabetically,
  sortAscendingNumbers,
  sortDescendingNumbers,
  showWordsByLettersNumber,
  showOnlyUniqueValues,
} from "./utils.js";

const rl = readline.createInterface({ input, output });

export function sortingFn() {
  rl.question(
    "Hello. Enter 10 words or numbers dividing them into spaces: ",
    (input) => {
      const inputValues = input.split(" ");

      const onlyNumbers = inputValues.filter(Number);

      const onlyWords = inputValues.filter((el) => isNaN(el));

      rl.question(
        `How would you like to sort values?
        1. Sort words alphabetically
        2. Show numbers from lesser to greater
        3. Show numbers from bigger to smaller
        4. Display words in ascending order by number of letters in the word
        5. Show only unique words
        6. Display only unique values from the set of words and numbers entered
        To exit the program enter "exit"
        'Select (1 - 6) and press ENTER: `,
        (choice) => {
          switch (choice) {
            case "1":
              sortWordsAlphabetically(inputValues);
              break;
            case "2":
              sortAscendingNumbers(onlyNumbers);
              break;
            case "3":
              sortDescendingNumbers(onlyNumbers);
              break;
            case "4":
              showWordsByLettersNumber(onlyWords);
              break;
            case "5":
              if (onlyWords.length === 0) {
                console.log(
                  "Value you entered for this sorting is invalid. It must be a set of words"
                );
                sortingFn();
                return;
              }
              showOnlyUniqueValues(onlyWords);
              break;
            case "6":
              showOnlyUniqueValues(inputValues);
              break;
            case "exit":
              console.log("Good bye! Come back again!");
              rl.close();
              return;
            default:
              console.log(
                "Sorry, the value you entered doesn't exist. Please enter the value from choice-list"
              );
              sortingFn();
              return;
          }
          sortingFn();
        }
      );
    }
  );
}

sortingFn();

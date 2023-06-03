import { sortingFn } from "./app.js";

export function sortWordsAlphabetically(data) {
  const result = data.sort();
  console.log(result);
  return result;
}

export function sortAscendingNumbers(data) {
  if (data.length === 0) {
    console.log(
      "Value you entered for this sorting is invalid. It must be a a set of numbers"
    );
    sortingFn();
    return;
  }
  const result = [...data].sort((a, b) => a.toLowerCase() - b.toLowerCase());
  console.log(result);
  return result;
}

export function sortDescendingNumbers(data) {
  if (data.length === 0) {
    console.log(
      "Value you entered for this sorting is invalid. It must be a a set of numbers"
    );
    sortingFn();
    return;
  }
  const result = [...data].sort((a, b) => b.toLowerCase() - a.toLowerCase());
  console.log(result);
  return result;
}

export function showWordsByLettersNumber(data) {
  if (data.length === 0) {
    console.log(
      "Value you entered for this sorting is invalid. It must be a a set of words"
    );
    sortingFn();
    return;
  }
  const result = [...data].sort(
    (a, b) => a.toLowerCase().length - b.toLowerCase().length
  );
  console.log(result);
  return result;
}

export function showOnlyUniqueValues(data) {
  const result = [...new Set(data)];
  console.log(result);
  return result;
}

export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) return '';

  let resultString = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      const restOfString = value.slice(startString.length);
      if (restOfString) {
        resultString += resultString ? `-${restOfString}` : restOfString;
      }
    }
  }

  return resultString;
}

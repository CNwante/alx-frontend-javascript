export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) return ''; // Handle empty startString

  let resultString = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      // Slice off the startString and append the rest
      const restOfString = value.slice(startString.length);
      if (restOfString) {
        resultString += resultString ? `-${restOfString}` : restOfString;
      }
    }
  }

  return resultString;
}

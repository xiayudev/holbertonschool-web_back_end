export default function cleanSet(set, startString) {
  const allString = [];
  if (startString && typeof startString === 'string') {
    set.forEach((string) => {
      if (string && string.startsWith(`${startString}`)) {
        allString.push(string.substring(startString.length));
      }
    });
  }
  return allString.join('-');
}

export default function cleanSet(set, startString) {
  const allString = [];
  if (startString.length > 0) {
    set.forEach((string) => {
      if (string.startsWith(`${startString}`)) {
        allString.push(string.substring(startString.length));
      }
    });
  }
  return allString.join('-');
}

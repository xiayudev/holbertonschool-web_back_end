export default function cleanSet(set, startString) {
  const allString = [];
  if (startString) {
    set.forEach((string) => {
      if (string.startsWith(`${startString}`)) {
        allString.push(string.substring(startString.length));
      }
    });
  }
  return allString.join('-');
}

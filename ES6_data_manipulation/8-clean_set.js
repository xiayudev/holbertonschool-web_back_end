export default function cleanSet(set, startString) {
  const allString = [];
  if (startString.length > 0) {
    set.forEach((string) => {
      if (string.includes(`${startString}`)) {
        allString.push(string.trim());
      }
    });
  }
  return allString.join('-');
}

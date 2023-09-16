export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (let value of array) {
    value = appendString + value;
    arr.push(value);
  }

  return arr;
}

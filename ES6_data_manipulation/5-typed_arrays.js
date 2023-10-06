export default function createInt8TypedArray(lenght, position, value) {
  if (position < 0 || position > lenght) {
    throw Error('Position outside range');
  }
  const myBuffer = new ArrayBuffer(lenght);
  const myInt8 = new Int8Array(myBuffer);
  myInt8[position] = value;
  return myInt8;
}

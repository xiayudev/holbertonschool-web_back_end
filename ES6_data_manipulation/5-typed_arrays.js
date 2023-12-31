export default function createInt8TypedArray(lenght, position, value) {
  if (position < 0 || position > lenght) {
    throw Error('Position outside range');
  }
  const myBuffer = new ArrayBuffer(lenght);
  const myInt8 = new DataView(myBuffer);
  myInt8.setInt8(position, value);
  return myInt8;
}

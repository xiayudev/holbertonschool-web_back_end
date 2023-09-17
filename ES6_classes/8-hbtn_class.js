/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // eslint-disable-next-line class-methods-use-this
  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}

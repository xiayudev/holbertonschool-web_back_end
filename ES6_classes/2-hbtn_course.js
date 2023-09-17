/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
    if (typeof students !== 'object') {
      throw new TypeError('Students must be an object');
    }
    this._students = students;
  }

  get name() { return this._name; }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() { return this._length; }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() { return this._students; }

  set students(students) {
    if (typeof students === 'object') {
      this._students = students;
    } else {
      throw new TypeError('Students must be an object');
    }
  }
}

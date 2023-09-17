/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() { return this._name; }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw Error('Name must be a string');
    }
  }

  get length() { return this._length; }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw Error('Length must be a number');
    }
  }

  get students() { return this._students; }

  set students(students) {
    if (typeof students === 'object') {
      this._students = students;
    } else {
      throw Error('Students must be an Object');
    }
  }
}

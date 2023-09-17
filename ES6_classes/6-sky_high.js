/* eslint-disable no-underscore-dangle */
import Building from './5-building';

export default class SkyHighBuildin extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() { return this._floors; }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors';
  }
}

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    // eslint-disable-next-line no-underscore-dangle
    this._floors = floors;
  }

  evacuationWarningMessage() {
    // eslint-disable-next-line no-underscore-dangle
    return `Evacuate slowly the ${this._floors} floors`;
  }

  get sqft() {
    // eslint-disable-next-line no-underscore-dangle
    return this._sqft;
  }

  get floors() {
    // eslint-disable-next-line no-underscore-dangle
    return this._floors;
  }
}

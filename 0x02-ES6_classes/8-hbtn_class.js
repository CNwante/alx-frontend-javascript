export default class HolbertonClass {
  constructor(size, location) {
    // eslint-disable-next-line no-underscore-dangle
    this._size = size;
    // eslint-disable-next-line no-underscore-dangle
    this._location = location;
  }

  valueOf() {
    // eslint-disable-next-line no-underscore-dangle
    return this._size;
  }

  toString() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }
}

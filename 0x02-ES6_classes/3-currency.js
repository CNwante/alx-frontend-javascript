export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._name} (${this._code})`;
  }

  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  set code(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._code = value;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = value;
  }
}

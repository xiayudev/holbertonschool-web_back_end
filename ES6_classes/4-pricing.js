import Currency from './3-currency';

/* eslint-disable no-underscore-dangle */
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() { return this._amount; }

  set amount(amount) {
    if (amount instanceof Number) {
      this._amount = amount;
    } else {
      throw new Error('Amount must be a number');
    }
  }

  get currency() { return this._currency; }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new Error('Currency must be a currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

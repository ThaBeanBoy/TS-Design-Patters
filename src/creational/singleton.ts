// type Log = { timestamp: Date; message: string };
import Log from './log';

class Singleton {
  public logs: Log[];

  constructor() {
    this.logs = [];
  }

  // eslint-disable-next-line class-methods-use-this
  get count() {
    // return this._logs.length;
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line class-methods-use-this
  log() {
    throw new Error('Not implemented');
  }
}

const Logger = new Singleton();

export default Logger;

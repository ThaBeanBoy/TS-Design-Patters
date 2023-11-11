// type Log = { timestamp: Date; message: string };
import Log from './log';

class Singleton {
  public logs: Log[];

  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  // eslint-disable-next-line class-methods-use-this
  log(message: string) {
    this.logs.push(new Log(new Date(), message));
  }
}

const Logger = new Singleton();

export default Logger;

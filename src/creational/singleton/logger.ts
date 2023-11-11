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

  log(message: string) {
    const latestLog = new Log(new Date(), message);
    this.logs.push(latestLog);
    // eslint-disable-next-line no-console
    console.log(`${latestLog.timestamp.toISOString()} | ${latestLog.message}`);
  }
}

const Logger = new Singleton();

export default Logger;

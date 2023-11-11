export default class Log {
  public readonly timestamp: Date;

  public readonly message: string;

  public constructor(timestamp: Date, message: string) {
    this.timestamp = timestamp;
    this.message = message;
  }
}

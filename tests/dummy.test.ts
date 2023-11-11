import { describe, expect, test } from 'vitest';
import Logger from '../src/creational/singleton';
import Log from '../src/creational/log';

describe('Logger singleton', () => {
  test('Add a log', () => {
    const messages = ['message 1', 'message 2', 'message 3'];

    messages.forEach((message) => {
      Logger.log(message);
      expect(Logger.logs[Logger.count - 1].message).toBe(message);
    });
  });

  test('Correct count of logs', () => {
    // Added 3 logs in the previous test
    expect(Logger.count).toBe(3);
  });
});

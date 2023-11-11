import { describe, expect, test } from 'vitest';
import Logger from '../src/creational/singleton';
import Log from '../src/creational/log';

describe('Logger singleton', () => {
  test('Add a log', () => {
    Logger.log();
    expect(Logger.logs[Logger.count - 1]).toMatchObject({});

    Logger.log();
    expect(Logger.logs[Logger.count - 1]).toMatchObject({});

    Logger.log();
    expect(Logger.logs[Logger.count - 1]).toMatchObject({});
  });

  test('Correct count of logs', () => {
    // Added 3 logs in the previous test
    expect(Logger.count).toBe(3);
  });
});

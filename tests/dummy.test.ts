import { describe, expect, test, vi, afterAll } from 'vitest';
import Logger from '../src/creational/singleton/logger';

// https://stackoverflow.com/questions/76042978/in-vitest-how-do-i-assert-that-a-console-log-happened
const consoleMock = vi
  .spyOn(console, 'log')
  .mockImplementation(() => undefined);

const testMessages = ['message 1', 'message 2', 'message 3'];

describe('Logger singleton', () => {
  afterAll(() => {
    consoleMock.mockReset();
  });

  test('Add a log', () => {
    testMessages.forEach((message) => {
      Logger.log(message);
      expect(Logger.logs[Logger.count - 1].message).toBe(message);
    });
  });

  test('Calls to the console made', () => {
    expect(consoleMock).toBeCalledTimes(3);
  });

  test('Correct count of logs', () => {
    // Added 3 logs in the previous test
    expect(Logger.count).toBe(testMessages.length);
  });
});

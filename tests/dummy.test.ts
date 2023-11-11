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
    });

    expect(Logger.count).toBe(testMessages.length);
  });

  test('Calls to the console made', () => {
    expect(consoleMock).toBeCalledTimes(testMessages.length);
  });

  test('Messages logged', () => {
    const passed = consoleMock.mock.calls[0].every((consoleMessage, index) =>
      consoleMessage.includes(testMessages[index]),
    );

    expect(passed).toBe(true);
  });
});

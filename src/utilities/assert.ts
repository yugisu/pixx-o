/**
 * If condition fails, an error will occur and message
 * will be shown.
 *
 * @param condition Condition to be checked.
 * @param message Message to display if an assertion failed.
 */

const assert = (condition: boolean, message?: string) => {
  if (!condition) {
    throw message || 'Assertion failed!';
  }
};

export default assert;

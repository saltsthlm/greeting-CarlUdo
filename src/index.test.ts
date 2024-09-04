import { deepEqual } from "node:assert/strict";
import { test } from "node:test";

const greet = (name: string) => {
  return {
    message: `Welcome, ${name}!`
  };
};

test('should greet person', () => {
  const result = greet('Carl');

  deepEqual(result, { message: 'Welcome, Carl!' });
});

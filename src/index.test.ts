import { deepEqual } from "node:assert/strict";
import { test } from "node:test";

const greet = (name: string) => {
  let message = `Welcome, ${name}!`; // One step less to do the initialisation directly

  if (name.length === 0) {
    message = `Welcome whoever you're. I'm sure you've a name. Please provide it.`;
  }

  return {
    message: message
  };
};

test('should greet person', () => {
  const result = greet('Carl');
  const secondResult = greet('');

  deepEqual(result, { message: 'Welcome, Carl!' });
  deepEqual(secondResult, { message: `Welcome whoever you're. I'm sure you've a name. Please provide it.`} );
});

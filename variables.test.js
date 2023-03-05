import { question, assert } from './utils';

export const question1 = question('variables1', (answer) => {
  assert(typeof answer === 'string', 'answer should be a string');
  assert(answer === 'foo3', 'wrong answer, try again');
});

export const question2 = question('variables2', (answer) => {
  assert(typeof answer === 'string', 'answer should be a string');
  assert(answer === 'const', 'wrong answer, try again');
});

export const question3 = question('variables3', (answer) => {
  assert(typeof answer === 'boolean', 'answer should be a boolean');
  assert(answer, 'wrong answer, try again')
});

export const question4 = question('variables4', (answer) => {
  assert(typeof answer === 'string', 'answer should be a string');
  assert(typeof answer === 'global');
});
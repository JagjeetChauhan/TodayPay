import { create, all } from 'mathjs';

const math = create(all);

export const evaluateExpression = (expression) => {
  try {
    return math.evaluate(expression);
  } catch (error) {
    return 'Error';
  }
};

export const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

export const random = () => {
  return Math.random();
};

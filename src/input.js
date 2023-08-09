import { getInput as getActionsInput } from '@actions/core';
import { validateInput } from './validation';

export function getAndValidateInputs(inputs, getInput = getActionsInput) {
  const result = [];

  const handleStringInput = (name) => {
    const input = getInput(name);
    validateInput(input, 'string');
    result.push(input);
  };

  const handleBooleanInput = (name) => {
    const input = getInput(name);
    validateInput(input, 'boolean');
    const booleanValue = input.toLowerCase() === 'true';
    result.push(booleanValue);
  };

  const handleInput = {
    'string': handleStringInput,
    'boolean': handleBooleanInput,
    'default': (name) => {
      throw new Error(`Trying to handle unsupported input type for: ${name}`);
    }
  };

  inputs.forEach((input) => {
    const { name, type } = input;
    handleInput[type](name) || handleInput.default(name);
  });

  return result;
}

export const question = (elementId, fn) => (opts) => {
  const answer = opts.answer;

  const render = (text) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerText = text;
    }
  };

  if (typeof answer === undefined) {
    return render(elementId, 'Error: answer is undefined');
  }

  try {
    fn(answer);
  } catch (e) {
    return render(elementId, `Error: ${e.toString()}`);
  }

  return render(elementId, `Success: ${answer} is correct!`);
};

export const assert = (test, msg) => {
  if (!test) {
    throw msg || 'test failed';
  }
};

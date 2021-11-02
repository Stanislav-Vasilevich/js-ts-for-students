export function sum(a: number, b: number) {
  return a + b;
}

export const getName = (inputName: string) => {
  const smallLetters = inputName.toLowerCase().trim().replace(/[!@#$%^&*(),.?"':{}|<>_]+/, '').replace(/\S/, '').replace(/\+/, '');
  const arrayWords = smallLetters.split(' ');

  const firstLettersLarge = arrayWords.map(w => {
    const arrayLetters = w.split('');
    const firstLetterLarge = arrayLetters[0].toUpperCase();

    arrayLetters[0] = firstLetterLarge;

    const letter = arrayLetters.join('');

    return letter;
  });

  return firstLettersLarge.join(' ');
}
/**
 * Uppercases the first letter of a given string
 * @param string
 */
export function upperFirst(s: string | null) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
}

/**
 * Capitalize given string
 * @param string
 */
export function capitalize(s: string | null) {
  if (!s) return '';
  let sentence = s.toLowerCase();
  const words = sentence.split(/\s/);
  sentence = '';

  words.forEach((word, i) => {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    i === words.length - 1 ? (sentence += word) : (sentence += word + ' ');
  });
  return sentence;
}

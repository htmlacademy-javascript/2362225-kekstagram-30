//Функция для сравнивания длинны строки и максимальной длинной строки.
const lengthCheck = (string, Maxlength) => string.length <= Maxlength;

lengthCheck ('проверяемая строка', 20);
lengthCheck ('проверяемая строка', 18);
lengthCheck ('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом.
const palindromicCheck = (string) => {
  const normalizedString = string.toLowerCase ().replaceAll (' ', '');
  const invertedString = normalizedString.split ('').reverse ().join ('');
  return invertedString === normalizedString;
};

palindromicCheck ('топот');
palindromicCheck ('ДовОд');
palindromicCheck ('Лёша на полке клопа нашёл ');

// Функция для проверки, является ли строка палиндромом (без массивов).
const palindromicCheck2 = (string) => {
  const normalizeString = string.toLowerCase ().replaceAll (' ', '');
  for (let i = 0; i <= normalizeString.length / 2; i++) {
    return normalizeString.at (i) === normalizeString.at (-1 - i);
  }
};

palindromicCheck2 ('Кекс');
palindromicCheck2 ('ДовОд');
palindromicCheck2 ('Лёша на полке клопа нашёл ');


/* Функция принимает строку, извлекает содержащиеся в ней цифры от
 0 до 9 и возвращает их в виде целого положительного числа */

const returnsNumbers = (string) => {
  string = String (string);
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN (parseInt (string[i], 2))) {
      result += string.at (i);
    }
  }
  return parseInt (result, 10);
};

returnsNumbers ('2023 год');// 2023
returnsNumbers ('ECMAScript 2022');// 2022
returnsNumbers ('1 кефир, 0.5 батона'); // 105
returnsNumbers ('агент 007');// 7
returnsNumbers ('а я томат');// NaN

returnsNumbers (2023);// 2023
returnsNumbers (-1);// 1
returnsNumbers (1.5);// 15

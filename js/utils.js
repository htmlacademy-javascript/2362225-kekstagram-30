// Функция для получения рандомного числа из диапазона.
const getRandomInteger = (a, b) => {
  const lower = Math.ceil (Math.min (a, b));
  const upper = Math.floor (Math.max (a, b));
  const result = Math.random () * (upper - lower + 1) + lower;

  return Math.floor (result);
};

// Функция, создающая генератор уникальных идентификаторов
const createIdGenerator = () => {
  let idCounter = 0;

  // Возвращает новый уникальный идентификатор при каждом вызове
  return () => {
    idCounter += 1;
    return idCounter;
  };
};

// Функция для получения случайного индификатора из массива.
const getRandomArrayElement = (element) => element[getRandomInteger (0, element.length - 1)];

export { getRandomInteger, getRandomArrayElement, createIdGenerator };

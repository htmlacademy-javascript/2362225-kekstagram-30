const photoData = 25;
const avatar = 6;
const minNumberLikes = 15;
const maxNumberLikes = 200;
const numberComments = 30;
let lastGeneratedId = 0;

const name = [
  'Сергей',
  'Валера',
  'Ирина',
  'Татьяна',
  'Олег',
  'Ксения',
  'Илья',
  'Милана',
  'Вера',
  'Нина'
];

const photoDescription = [
  'Фотография сделана летом в городе Анапа',
  'С мужем поехали путешествовать, и первый город в который поедим это - Париж',
  'Наступило лето, а это значит быстрее купаться',
  'Только приехала из города Минск, а какие города посетили вы ?',
  'Сегоня погода просто изумительна, жалую вам счастливого дня!',
  'HtmlAcademy спасибо за отличные курсы, просто в восторге от них',
  'Сергей Остаповец отличный настаник в htmlacademy, многим его посоветую',
  'Привет всем у меня сегодня отличное настроение, а у вас ?',
  'Сегодня решил попробывать себя в роли бэкендера, как думаете получиться ?',
  'Начал изучать новый фреймворк - vue, скажите будет очень сложно ?'
];

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//функция для получения рандомного числа из диапазона.
const getRandomInteger = (a, b) => {
  const lower = Math.ceil (Math.min (a, b));
  const upper = Math.floor (Math.max (a, b));
  const result = Math.random () * (upper - lower + 1) + lower;

  return Math.floor (result);
};

//Функция для получения уникального числа.
const getUniqueId = () => {
  lastGeneratedId += 1;
  return lastGeneratedId;
};


//Функция для получения случайного индификатора из массива.
const getRandomArrayElement = (element) => element[getRandomInteger (0, element.length - 1)];

const createMessage = () => Array.from (
  { length: getRandomInteger (1, 2) },
  () => getRandomArrayElement (message)
).join (' ');

//Функция которая создает комментарий
const createСomment = () => ({
  id: getUniqueId (),
  avatar: `img/avatar-${getRandomInteger (1, avatar)}.svg`,
  message: createMessage (),
  name: getRandomArrayElement (name)
});

// Функция которая создает описание фотографии, опубликованной пользователем.
const createsUserPhoto = () => {
  const id = getUniqueId ();
  const uniqueId = id % 25 + 1; // Ограничиваем уникальные идентификаторы до 1-25

  return {
    id: uniqueId,
    url: `photos/${uniqueId}.png`,
    description: getRandomArrayElement (photoDescription),
    likes: getRandomInteger (minNumberLikes, maxNumberLikes),
    comments: Array.from ({ length: getRandomInteger (0, numberComments) }, createСomment)
  };
};

const creatingPictures = () => Array.from ({ length: photoData }, createsUserPhoto);

creatingPictures ();

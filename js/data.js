import { createIdGenerator, getRandomArrayElement, getRandomInteger } from './utils';

const photoData = 25;
const avatar = 6;
const minNumberLikes = 15;
const maxNumberLikes = 200;
const numberComments = 30;

const name = ['Сергей', 'Валера', 'Ирина', 'Татьяна', 'Олег', 'Ксения', 'Илья', 'Милана', 'Вера', 'Нина'];

const photoDescription = [
  'Фотография сделана летом в городе Анапа',
  'С мужем поехали путешествовать, и первый город в который поедим это - Париж',
  'Наступило лето, а это значит быстрее купаться',
  'Только приехала из города Минск, а какие города посетили вы ?',
  'Сегодня погода просто изумительна, желаю вам счастливого дня!',
  'HtmlAcademy спасибо за отличные курсы, просто в восторге от них',
  'Сергей Остаповец отличный наставник в htmlacademy, многим его посоветую',
  'Привет всем у меня сегодня отличное настроение, а у вас ?',
  'Сегодня решил попробовать себя в роли бэкендера, как думаете, получится ?',
  'Начал изучать новый фреймворк - Vue, скажите, будет очень сложно ?'
];

const message = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов, это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках, и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота, и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const createMessage = () => Array.from ({ length: getRandomInteger (1, 2) }, () => getRandomArrayElement (message)).join (' ');

// Функция, которая создает комментарий
const createComment = () => ({
  id: createIdGenerator (),
  avatar: `img/avatar-${getRandomInteger (1, avatar)}.svg`,
  message: createMessage (),
  name: getRandomArrayElement (name)
});

// Функция, которая создает описание фотографии, опубликованной пользователем.
const createUserPhoto = () => ({
  id: createIdGenerator (),
  url: `photos/${getRandomInteger (1, 25)}.jpg`,
  description: getRandomArrayElement (photoDescription),
  likes: getRandomInteger (minNumberLikes, maxNumberLikes),
  comments: Array.from ({ length: getRandomInteger (0, numberComments) }, createComment)
});
const creatingPictures = () => Array.from ({ length: photoData }, createUserPhoto);
creatingPictures ();

export { creatingPictures };

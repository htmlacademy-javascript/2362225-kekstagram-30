const thumbnailsTemplate = document.querySelector ('#picture').content.querySelector ('.picture');
const container = document.querySelector ('.pictures');

const creatingThumbnails = ({ url, description, likes, comments }) => {
  const thumbnailsCopy = thumbnailsTemplate.cloneNode (true);
  thumbnailsCopy.querySelector ('.picture__img').src = url;
  thumbnailsCopy.querySelector ('.picture__img').alt = description;
  thumbnailsCopy.querySelector ('.picture__comments').textContent = comments.length;
  thumbnailsCopy.querySelector ('.picture__likes').textContent = likes;

  return thumbnailsCopy;
};

const renderThumbnails = (arrow) => {
  const thumbnailsFragment = document.createDocumentFragment ();
  arrow.forEach ((picture) => {
    const thumbnail = creatingThumbnails (picture);
    thumbnailsFragment.append (thumbnail);
  });
  container.append (thumbnailsFragment);
};

export { renderThumbnails };

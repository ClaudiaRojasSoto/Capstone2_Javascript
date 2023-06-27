import getItemDetails from './getItemsDetails.js';

const showCommentsPopup = async (id) => {
  const details = await getItemDetails(id);

  const popup = document.createElement('div');
  popup.id = 'commentsPopup';
  popup.innerHTML = `
    <h2>${details.strMeal}</h2>
    <img src="${details.strMealThumb}" alt="${details.strMeal}">
    <p id="details-instructions">${details.strInstructions}</p>
    <h3>Add a comment</h3>
    <input type="text" placeholder="Your name" id="nameInput">
    <textarea placeholder="Your comment" id="commentInput"></textarea>
    <button class="closeButton">&times;</button>
  `;

  document.body.appendChild(popup);

  popup.querySelector('.closeButton').addEventListener('click', () => {
    document.body.removeChild(popup);
  });
};

export default showCommentsPopup;

import Book from './modules/book.js';
import UI from './modules/user-inter.js';
import Store from './modules/store.js';
import { DateTime } from './modules/luxon.js';
import { show } from './modules/nav.js';

// Display book events
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Add a book event
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent submit action of form
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Instatiate book
  const newbook = new Book(title, author);

  // Add book to UI
  UI.addBookToList(newbook);

  // Add book to local Storage
  Store.addBook(newbook);

  // Clear fields
  UI.clearFields();
});

// Event: Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  //    Remove book from UI by attaching it to a method
  UI.deleteBook(e.target);

  //  Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

// ======= Date and Time =======

const localTime = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);

const time = document.getElementById('showDate');

time.textContent = localTime;

// ======= Dynamic page switcher Javascript =======

// show is used in an onclick event

window.show = show;
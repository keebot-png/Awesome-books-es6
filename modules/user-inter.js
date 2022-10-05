import Store from './store.js';

// UI class: Handle UI tasks e.g. when a book displays on the list or removes from the list

export default class UI {
  static displayBooks = () => {
    const books = Store.getBooks();

    // Loop through all of the books in local storage and then add method addBookToList

    books.forEach((book) => {
      UI.addBookToList(book);
    });
  }

  // Adding row to the <tbody>

  static addBookToList = (book) => {
    const list = document.getElementById('book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
          <td>"${book.title}" by ${book.author}</td>
          <td><a href="#" class="btn btn-danger btn-md delete">Remove</a></td>
          `;

    list.appendChild(row);
  }

  static deleteBook = (element) => {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
    }
  }

  static clearFields = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

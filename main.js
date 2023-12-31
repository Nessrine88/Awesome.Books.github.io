/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */

// eslint-disable-next-line no-unused-vars
const list = document.getElementById('list');
const addBooks = document.getElementById('addBooks');
const contact = document.getElementById('contact');

const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const heading = document.getElementById('heading');

addBooks.addEventListener('click', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  title.value = '';
  author.value = '';
  section2.style.display = 'none';
  section3.style.display = 'block';
  section4.style.display = 'none';
  heading.style.display = 'none';
});

contact.addEventListener('click', (event) => {
  event.preventDefault();
  section2.style.display = 'none';
  section3.style.display = 'none';
  section4.style.display = 'block';
  heading.style.display = 'none';
});

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.displayedBooks = document.getElementById('displayedBooks');
    this.addBtn = document.getElementById('addBtn');
    this.currentIndex = 0;

    this.addBtn.addEventListener('click', () => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      this.addBook(title, author);
      section2.style.display = 'block';
      section3.style.display = 'none';
      section4.style.display = 'none';
      title.value = '';
      author.value = '';
    });

    this.displayBooks();
  }

  displayBooks() {
    this.displayedBooks.innerHTML = '';
    let i = 0;

    this.books.forEach((book, index) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <p>"${book.title}"&nbsp;by&nbsp;${book.author}&nbsp;<button class="removeBtn">Remove</button><p>
        <hr>
      `;

      const removeBtn = div.querySelector('.removeBtn');
      removeBtn.addEventListener('click', () => {
        this.removeBook(book);
        div.remove();
      });

      div.classList.add('div1');
      if (i % 2 === 0) {
        div.style.backgroundColor = '#e4e2e2';
      } else {
        div.style.backgroundColor = 'white';
      }

      div.dataset.index = index;

      i += 1;
      this.displayedBooks.appendChild(div);
    });
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  removeBook(book) {
    this.books = this.books.filter((b) => b !== book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }
}

// eslint-disable-next-line no-unused-vars
const bookCollection = new BookCollection();

function updateDateTime() {
  const currentDateTime = new Date();
  const datetimeElement = document.getElementById('datetime');
  datetimeElement.textContent = currentDateTime.toLocaleString();
}

setInterval(updateDateTime, 1000);

updateDateTime();

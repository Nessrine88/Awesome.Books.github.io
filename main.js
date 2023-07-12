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

    this.addBtn.addEventListener('click', () => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      this.addBook(title, author);
    });

    this.displayBooks();
  }

  displayBooks() {
    this.displayedBooks.innerHTML = '';

    this.books.forEach((book) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${book.title}</h3>
        <h3>${book.author}</h3>
        <button class="removeBtn">Remove</button>
        <hr>
      `;

      const removeBtn = div.querySelector('.removeBtn');
      removeBtn.addEventListener('click', () => {
        this.removeBook(book);
        div.remove();
      });

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
  }
}

// Create an instance of the BookCollection class
const bookCollection = new BookCollection();

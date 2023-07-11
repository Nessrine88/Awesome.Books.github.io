// Check if there are any existing books in local storage
let books = JSON.parse(localStorage.getItem('books')) || [];
// Function to remove a book from the collection
function removeBook(book) {
  books = books.filter((b) => b !== book);
  localStorage.setItem('books', JSON.stringify(books));
}

// Function to display all books in the collection
function displayBooks() {
  const displayedBooks = document.getElementById('displayedBooks');
  displayedBooks.innerHTML = '';

  books.forEach((book) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button class="removeBtn">Remove</button>
      <hr>
    `;

    const removeBtn = div.querySelector('.removeBtn');
    removeBtn.addEventListener('click', () => {
      removeBook(book);
      div.remove();
    });

    displayedBooks.appendChild(div);
  });
}

// Function to add a new book to the collection
function addBook(title, author) {
  const newBook = { title, author };
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
}

// Event listener for the add button
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  addBook(title, author);
});

// Display initial books on page load
displayBooks();

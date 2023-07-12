// // Check if there are any existing books in local storage
// let books = JSON.parse(localStorage.getItem('books')) || [];
// // Function to remove a book from the collection
// function removeBook(book) {
//   books = books.filter((b) => b !== book);
//   localStorage.setItem('books', JSON.stringify(books));
// }

// // Function to display all books in the collection
// function displayBooks() {
//   const displayedBooks = document.getElementById('displayedBooks');
//   displayedBooks.innerHTML = '';

//   books.forEach((book) => {
//     const div = document.createElement('div');
//     div.innerHTML = `
//       <p>${book.title}</p>
//       <p>${book.author}</p>
//       <button class="removeBtn">Remove</button>
//       <hr>
//     `;

//     const removeBtn = div.querySelector('.removeBtn');
//     removeBtn.addEventListener('click', () => {
//       removeBook(book);
//       div.remove();
//     });

//     displayedBooks.appendChild(div);
//   });
// }





// // Display initial books on page load
// displayBooks();

//****************** */
// Event listener for the add button
class Books {
  constructor(){
    this.data = [];
    this.Books=JSON.parse(localStorage.getItem('books2'))|| [];
  }

  addBook(book) {
    this.data.push(book);
    localStorage.setItem('books', JSON.stringify(this.data));
    // addToUI(book);
  }
}
  // Book(title,author){
  //   let b = new Book(title,author)
  //   this.Books.push(b)
  //   return b
  // }

// get allBooks(){
//   return this.Books
// }

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = `{title: ${title}, author: ${author}}`;
  Books2.addBook(book);
  displayBooks();
  // myBook(title, author)
});

function displayBooks(Books) {
  // const Books = [];
  const displayedBooks = document.getElementById('displayedBooks');
  displayedBooks.innerHTML = '';

  Books.forEach((book) => {
    const div = document.createElement('div');
    const title = Books.title;
    const author = Books.author;
    div.innerHTML = `
      <p>${title}</p>
      <p>${author}</p>
      <button class="removeBtn">Remove</button>
      <hr>
    `;
    displayedBooks.appendChild(div);
  });
}

function myBook(title, author) {
  const newBook = new Book(title, author);
  // const aBook = '{${title}, ${author}}';
  const bookList = new Books();
  bookList.books.push(newBook);
  // let b = new Book(title, author)
  // this..push(aBook);
  // return b
}

function remove(Book) {
  this.destroy();
}

window.onload = () => {
  Books2 = new Books;
  
  Books2 = JSON.parse(localStorage.getItem('books')) || [];
  console.log(Books2);
  // if (Books2.data === null) {
  //   Books2 = new Books;  //.data = [];
  //   return;
  // }
  displayBooks(Books2);
}

// Class that holds a collection of players and properties and functions for the group


  const see=document.getElementById('see');
  see.addEventListener('click', () => {
    const Booklist= new Books;

    console.log(Booklist)
    console.log('click')
  });

  // this could include summary stats like average score, etc. For simplicy, 
// just the count for now get numberOfPlayers(){
//       return this.players.length
//   }
// }

// let league = new Players()
// league.newPlayer("Mark")
// league.newPlayer("Roger")




// // make them do something
// league.allPlayers.forEach(player => player.play())}

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
    this.Books=JSON.parse(localStorage.getItem('books2'))|| [];
  }
  Book(title,author){
    let b = new Book(title,author)
    this.Books.push(b)
    return b
  }
  get allBooks(){
    return this.Books
  }}

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  new Book (title,author)
  Books.push(Book)
});

class Book {
  constructor(title,author) {
      this.title = title;
      this.author = author;
      
  }
 
  remove() {
   this.destroy();
  }
}


// Class that holds a collection of players and properties and functions for the group


const see=document.getElementById('see');
  see.addEventListener('click', () => {
    const Booklist= new Books;
   
    console.log(Booklist)
    console.log('click')
  });

  // this could include summary stats like average score, etc. For simplicy, just the count for now
//   get numberOfPlayers(){
//       return this.players.length
//   }
// }

// let league = new Players()
// league.newPlayer("Mark")
// league.newPlayer("Roger")




// // make them do something
// league.allPlayers.forEach(player => player.play())}
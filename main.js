books = [{bookTitle: 'The Lord of the Rings', authorName: 'XXX'},
{bookTitle: 'The Little Prince', authorName: 'YYY'}];


function display(){
  const displayedBooks = document.getElementById('displayedBooks');
  const div= document.querySelectorAll('.book');
  books.forEach((book) => {
    div.innerHtml=`
    <h3>${bookTitle}</h3>
    <h3>${authorName}</h3>
    <button class='removeBtn'>Remove</button>
    `;
    displayedBooks.appendChild(div);
  });
}

function addBook(title, author) {
  const newBook = {title, author};
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
  
};

const addBtn=document.getElementById('addBtn');
  addBtn.addEventListener('click', () =>{
    const bookTitle = document.getElementById('title').value;
    const authorName = document.getElementById('author').value;
    addBook(bookTitle, authorName);
    console.log('click');
  });


  display();
  addBtn.addEventListener('click', () =>{
    const bookTitle = document.getElementById('title').value;
    const authorName = document.getElementById('author').value;
    addBook(bookTitle, authorName);
    console.log('click');
  });

addEventListener('onload', () => {
  
  display();
///  console.log('onload');
 });

books =[];


function display(){
const displayedBooks =document.getElementById('displayedBooks');
const div= document.getElementById('bookSection');


div.innerHtml=`
<h3>${bookTitle}</h3>
<h3>${authorName}</h3>
<button class='removeBtn'>Remove</button>
`;
displayedBooks.appendChild(div);}

const addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',()=>{
  const bookTitle=document.getElementById('title').value;
const authorName=document.getElementById('author').value;
display(bookTitle,authorName);
})

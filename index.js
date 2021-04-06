let library = [
	{
		title: "Everything Good Will Come",
		author: "Sefi Atta",
		pages: "306 pages",
		genre:"Fiction",
		cover_image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1172880170l/227730._SX318_.jpg",
		read: true
	},
	{
		title: "The Concubine",
		author: "Elechi Amadi",
		pages: "312 pages",
		genre:"Romance",
		cover_image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356444421l/1199161.jpg",
		read: true
	},
	{
		title: "Spider King",
		author: "Josh Vann",
		pages: "450 pages",
		genre:"Sci-Fi",
		cover_image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1462620484l/30127221._SY475_.jpg",
		read: false
	}
]

function addBook(title, author, pages, genre, cover_image, read) {
	var card = document.createElement('div');
	var bookCover = document.createElement('div');
	var coverImage = document.createElement('img');
	var bookDescription = document.createElement('div');
	var bookList = document.getElementById('book__list');
	var br = document.createElement('br');
	var br2 = document.createElement('br');
	var br3 = document.createElement('br');
	var br4 = document.createElement('br');

	var bookTitle = document.createElement('p');
	bookTitle.className = "title"
	var bookTitleNode = document.createTextNode(title);
	bookTitle.appendChild(bookTitleNode)

	var authorSpan = document.createElement('span');
	var authorNode = document.createTextNode(author);
	authorSpan.className = "author"
	authorSpan.appendChild(authorNode)

	var pageSpan = document.createElement('span');
	var pageNode = document.createTextNode(pages);
	pageSpan.className = "pages"
	pageSpan.appendChild(pageNode)

	var genreSpan = document.createElement('span');
	var genreNode = document.createTextNode(genre);
	genreSpan.className = "genre"
	genreSpan.appendChild(genreNode)

	var readStatus = document.createElement('span');
	readStatus.className = "read"
	var readNode;
	if (read) {
		readNode = document.createTextNode('Has been read')
	} else {
		readNode = document.createTextNode('Wish to read')
	}
	readStatus.appendChild(readNode)

	bookDescription.className = "description"
	bookDescription.appendChild(bookTitle)
	bookTitle.appendChild(br)
	bookTitle.appendChild(authorSpan)
	bookTitle.appendChild(br2)
	bookTitle.appendChild(pageSpan)
	bookTitle.appendChild(br3)
	bookTitle.appendChild(genreSpan)
	bookTitle.appendChild(br4)
	bookTitle.appendChild(readStatus)

	
	coverImage.src = cover_image
	bookCover.appendChild(coverImage)
	bookCover.className = "cover"

	card.className = "card"
	card.appendChild(bookCover)
	card.appendChild(bookDescription)
	bookList.appendChild(card)
}

let newBook = document.querySelector('.new__book').querySelector('button');
newBook.addEventListener("click", () => {
	let title = prompt("Please Enter Book Title:")
	let author = prompt("Please Enter Book Author Name:")
	let pages = prompt("Please enter the number of pages e.g. 5 pages")
	let genre = prompt("Please Enter Book Genre e.g. fiction, romance, etc")
	let read = Boolean(prompt("Have you read this book?, Enter true or false"))
	let image = prompt("Please enter a url for the book cover image")
	if (title !== null && author !== null && pages !== null && genre !== null && read !== null && image !== null) {
		addBook(title, author, pages, genre, image, read)
	} else {
		alert("You did not enter any data for one of the questions. Please start over")
	}
})


library.forEach(obj => {
	const { title, author, pages, genre, cover_image, read } = obj;
	addBook(title, author, pages, genre, cover_image, read)
})


let newBook = document.querySelector('.new__book').querySelector('button');
newBook.addEventListener("click", () => console.log('need to add a new book to the library'))

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


library.forEach(obj => {
	const { title, author, pages, genre, cover_image, read } = obj;

	var card = document.createElement('div');
	var bookCover = document.createElement('div');
	var coverImage = document.createElement('img');
	var bookDescription = document.createElement('div');
	var bookList = document.getElementById('book__list');

	coverImage.src = cover_image
	bookCover.appendChild(coverImage)
	bookCover.className = "cover"

	card.className = "card"
	card.appendChild(bookCover)
	bookList.appendChild(card)
})

// script.js

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
	const searchTerm = searchInput.value.trim();
	if (searchTerm) {
		// Add search functionality here
		console.log(`Searching for ${searchTerm}`);
	}
});
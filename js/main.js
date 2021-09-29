window.addEventListener('DOMContentLoaded', function () {
	let elements = document.getElementsByClassName("block__link");

	let blockLink = function (event) {
		event.preventDefault();
		return false;
	};
	for (let i = 0; i < elements.length; i++) {
		elements[i].addEventListener('click', blockLink, false);
	}
})

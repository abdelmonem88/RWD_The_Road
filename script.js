// navbar
const container = document.querySelector('.container');

document.querySelector('.open-navbar-icon').addEventListener('click', () => {
	container.classList.add('change');
});

document.querySelector('.close-navbar-icon').addEventListener('click', () => {
	container.classList.remove('change');
});

const colors = [ '#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee' ];

let i = 0;

Array.from(document.querySelectorAll('.nav-link')).forEach((item) => {
	item.style.cssText = `background-color: ${colors[i++]}`;
});

//priceing btns
let navigationBtns = document.querySelectorAll('.navigation-button');
navigationBtns.forEach((item) => {
	item.addEventListener('click', () => {
		item.parentElement.parentElement.classList.toggle('change');
	});
});
/* Move to selected section function*/
let navItems = document.querySelectorAll('.nav-list a');
let footerItems = document.querySelectorAll('.footer-list a');
function scrollToSection(elements) {
	elements.forEach((element) => {
		//add click event
		element.addEventListener('click', (e) => {
			e.preventDefault();
			//use scroll to view web API
			document.querySelector(e.target.dataset.section).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
}
scrollToSection(navItems);
scrollToSection(footerItems);


// Mobile navigation
// The menu consists of two parts
// One function to open the menu when a user taps the hamburger icon
// The other one to close the menu when the user has clicked a link
// This is ususally not necessary, because a new site would be loaded
// Because this is a single page however, we cannot rely on the hack.
const nav = document.querySelector('body > nav');
document.querySelector('#menu-icon').addEventListener('click', async (event) => {
	nav.classList.toggle('visible');
});


for (const a of document.querySelectorAll('body > nav a')) {
	a.addEventListener('click', event => {
		nav.classList.toggle('visible');
	});
}


// Height adjustment of navigation bar after page scrolled down
document.addEventListener('scroll', async (event) => {
	const header = document.querySelector('body > nav');
	if (window.scrollY > 75)
		header.classList.add('scrolled');
	else
		header.classList.remove('scrolled');
});


function visiblityCallback(entries, observer) {
	for(const entry of entries) {
		const selector = `li[target~="#${entry.target.id}"]`;
		const navElement = document.querySelector(selector);
	
		if(navElement)
			navElement.classList.toggle('visible');
	}
};

// Visibility indicator in top navigation
//
// TODO:
// This requires a hack for now.
// The observer is intended to fire whenever the user scrolls the section of the page into the viewport.
// However, this event gets also fired on page load (why I don't know).
// This messes up the state kept via a css-class.
// To patch this the concerning elements have the css-class pre-applied.
const observer = new IntersectionObserver(visiblityCallback, {
	root: null,
	rootMargin: '0px',
	threshold: 0.9
});

const sections = document.querySelectorAll('main > section');
for(const section of sections) {
	observer.observe(section); 
}

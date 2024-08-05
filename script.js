//----------------------slider----------------------
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");


slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moverDerecha(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function moverIzquierda(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}


btnRight.addEventListener('click', function (){
    moverDerecha();
})

btnLeft.addEventListener('click', function (){
    moverIzquierda();
})

setInterval(function(){
    moverDerecha();
}, 9000);


//////////// scroll menu


window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})


///--------buscador----------

const searchContainer = document.querySelector('.search-input-box');
const inputSearch = searchContainer.querySelector('input');
const boxSuggestions = document.querySelector(
	'.container-suggestions'
);

const searchLink = document.querySelector('a');

inputSearch.onkeyup = e => {
	let userData = e.target.value;
	let emptyArray = [];

	if (userData) {
		emptyArray = suggestions.filter(data => {
			return data
				.toLocaleLowerCase()
				.startsWith(userData.toLocaleLowerCase());
		});

		emptyArray = emptyArray.map(data => {
			return (data = `<li>${data}</li>`);
		});
		searchContainer.classList.add('active');
		showSuggestions(emptyArray);

		let allList = boxSuggestions.querySelectorAll('li');

		allList.forEach(li => {
			li.setAttribute('onclick', 'select(this)');
		});
	} else {
		searchContainer.classList.remove('active');
	}
};

function select(element) {
	let selectUserData = element.textContent;
	inputSearch.value = selectUserData;

	searchLink.href = `https://www.google.com/search?q=${inputSearch.value}`;
	searchContainer.classList.remove('active');
}

const showSuggestions = list => {
	let listData;

	if (!list.length) {
		userValue = inputSearch.value;
		listData = `<li>${userValue}</li>`;
	} else {
		listData = list.join(' ');
	}
	boxSuggestions.innerHTML = listData;
};
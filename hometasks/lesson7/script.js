(function() {
	const slider = document.querySelector('.slider');
	const wrapper = document.querySelector('.slider__wrapper');
	const innerWrapper = document.querySelector('.slider__inner-wrapper');

	const slides = [...document.querySelectorAll('.slider__slide')];
	const slidesCount = slides.length; //количество элементов массива 

	//кнопки управления слайдером
	const buttonBack = document.querySelector('.slider__button-back-js');
	const buttonNext = document.querySelector('.slider__button-nex-js');
	const pagination = document.querySelector('.slider-pagination-js');

	const ANIMATION_TIME = 500;


	let activeSlideIndex = 0;
	let siledWidth = wrapper.offsetWidth; //получить ширину 
	let timer = null;

	initWidth();
	setActiveSlide(1, false);

	buttonNext.addEventListener('click', () => {
		setActiveSlide(activeSlideIndex + 1);
	})
	buttonBack.addEventListener('click', () => {
		setActiveSlide(activeSlideIndex - 1);
	})


	//адаптив
	window.addEventListener('resize', () => {
		initWidth();
		setActiveSlide(activeSlideIndex, false);
	})
	//

	function setActiveSlide(index, withAnimation = true) {
		if (index < 0 || index >= slidesCount) return;

		buttonBack.removeAttribute('disabled');
		buttonNext.removeAttribute('disabled');

		innerWrapper.style.transform = `translateX(${index * siledWidth * (-1)}px)`;

		if(withAnimation) {
			innerWrapper.style.transition = `transform ${ANIMATION_TIME}ms`;
			timer = setTimeout(() => {
				innerWrapper.style.transition = '';
			}, ANIMATION_TIME);
		}

		if (index === 0) {
			buttonBack.setAttribute('disabled', '');
		}

		if (index === slidesCount - 1) {
			buttonNext.setAttribute('disabled', '');
		}

		activeSlideIndex = index;
	}

	function initWidth() {
		siledWidth = wrapper.offsetWidth;

		slides.forEach(slide => {
			slide.style.width = `${siledWidth}px`;
		});
	}
})();



//SWIPER JS
(function() {
	const slider = document.querySelector('.slider');
	const wrapper = document.querySelector('.slider-wrapper');
	const innerWrapper = document.querySelector('.slider-inner-wrapper');

	const slides = [...document.querySelectorAll('.slide')];
	const slidesCount = slides.length; //количество элементов массива 

	//кнопки управления слайдером
	const buttonBack = document.querySelector('.slider-nav__previous');
	const buttonNext = document.querySelector('.slider-nav__next');
	//
	const pagination = document.querySelector('.slider-pagination-js');
	// console.log(pagination);
	//


	const ANIMATION_TIME = 500;


	let activeSlideIndex = 0;
	let siledWidth = wrapper.offsetWidth; //получить ширину 
	let timer = null;
	let dots = []; //pagination
	//for mouse control
	let checkerMouseDown = false;
	let clientX = 0;
	let percentDiff = 0.2;
	// for touch
	let lastClientX = 0;
	let isTouched = false;

	initWidth();
	createDots();
	setActiveSlide(0, false);

	//for touch
	wrapper.addEventListener('touchstart', (e) => {
		isTouched = true;
		const touch = e.touches[0];
		clientX = touch.clientX;
		lastClientX = touch.clientX;
	})

	wrapper.addEventListener('touchmove', (e) => {
		if(!isTouched) return;
		const touch = e.touches[0];
		lastClientX = touch.clientX;
		setActiveSlide(activeSlideIndex, false,  clientX - lastClientX);
	})

	wrapper.addEventListener('touchend', (e) => {
		if(!isTouched) return;
		isTouched = false;
		if ( clientX = lastClientX > percentDiff * siledWidth ) {
			setActiveSlide(activeSlideIndex + 1);
		} else if (lastClientX - clientX > percentDiff * siledWidth) {
			setActiveSlide(activeSlideIndex -1 );
		} else {
			setActiveSlide(activeSlideIndex);
		}
	})
	//

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

	//mouse control
	wrapper.addEventListener('mousedown', (e) => {
		checkerMouseDown = true;
		clientX = e.clientX;
	});

	wrapper.addEventListener('mouseup', endMouseEvent);
	wrapper.addEventListener('mouseout', endMouseEvent);
	//

	function setActiveSlide(index, withAnimation = true, diff = 0) {
		if (index < 0 || index >= slidesCount) return;

		buttonBack.removeAttribute('disabled');
		buttonNext.removeAttribute('disabled');

		innerWrapper.style.transform = `translateX(${index * siledWidth * (-1) + diff}px)`;

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

		//смена классов для пагинации
		dots[activeSlideIndex].classList.remove('slider-pagination__button-active');
		dots[index].classList.add('slider-pagination__button-active');
		//
		activeSlideIndex = index;
	}

	function initWidth() {
		siledWidth = wrapper.offsetWidth;

		slides.forEach(slide => {
			slide.style.width = `${siledWidth}px`;
		});
	}


	//функции пагинации
	function createDots() {
		for (let i = 0; i < slidesCount; i++) {
			const dot = createDot(i);
			dots.push(dot);
			pagination.insertAdjacentElement('beforeend', dot);
		}
	}
	function createDot(index) {
		const dot = document.createElement('button');
		dot.classList.add('slider-pagination__button');

		//не хочет меняться класс
		if (index === activeSlideIndex) {
			dot.classList.add('slider-pagination__button-active');
		}
		//

		dot.addEventListener('click', () => {
			setActiveSlide(index); 
		})
		return dot;
	}
	//
	//mouse control
	function endMouseEvent(e) {
		if(!checkerMouseDown) {
			return;
		}
		checkerMouseDown = false;
		if(clientX - e.clientX > percentDiff * siledWidth) {
			setActiveSlide(activeSlideIndex + 1);
		} else if ( e.clientX - clientX > percentDiff * siledWidth ) {
			setActiveSlide(activeSlideIndex - 1);
		}
	} 
})();



//SWIPER JS
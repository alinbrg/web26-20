const startIntervalBtn = document.querySelector("#start-interval");
const stopIntervalBtn = document.querySelector("#stop-interval");
const startTimeoutBtn = document.querySelector("#start-timeout");
const stopTimeoutBtn = document.querySelector("#stop-timeout");

const slides = document.querySelectorAll(".slide");
const prevSlideBtn = document.querySelector("#prev-slide");
const nextSlideBtn = document.querySelector("#next-slide");
const syncJsFns = () => {
	const logInfo = () => {
		console.log("logInfo");
	};

	function logInfoFn() {
		console.log("logInfoFn");
	}

	const syncFn = () => {
		console.log("function start");
		for (let i = 0; i < 1000; i++) {
			console.log(i);
		}
		console.log("function end");
	};

	const asyncFn = () => {
		console.log("async function start");

		setTimeout(() => {
			console.log("setTimeout");

			// modal.classList.remove("active");
		}, 2000);

		console.log("async function after setTimeout");
	};

	// syncFn();
	// asyncFn();

	// setInterval(logInfo, 2000)
	let intervalId = null,
		timeoutId = null;

	startIntervalBtn.addEventListener("click", () => {
		intervalId = setInterval(logInfo, 2000);
	});

	stopIntervalBtn.addEventListener("click", () => {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}

		console.log("clear interval");
	});

	startTimeoutBtn.addEventListener("click", () => {
		timeoutId = setTimeout(logInfo, 5000);
		console.log("timeoutId", timeoutId);
	});

	stopTimeoutBtn.addEventListener("click", () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
		console.log("clear timeout");
	});
};

const slideFn = () => {
	let currentSlide = 2;
	// slides[currentSlide].classList.add("active");

	const showSlides = () => {
		slides.forEach((slide, index) => {
			if (index === currentSlide) {
				slide.classList.add("active");
			} else {
				slide.classList.remove("active");
			}
		});
	};

	const goToPrevSlide = () => {
		if (currentSlide === 0) {
			// prevSlideBtn.style.pointerEvents = "none";
			// prevSlideBtn.disabled = true;
			currentSlide = slides.length - 1;
		} else {
			// prevSlideBtn.style.pointerEvents = "initial";
			// prevSlideBtn.disabled = false;
			currentSlide--;
		}

		// console.log(currentSlide);
		showSlides();
	};

	const goToNextSlide = () => {
		if (currentSlide === slides.length - 1) {
			// nextSlideBtn.style.pointerEvents = "none";
			// nextSlideBtn.disabled = true;
			currentSlide = 0;
		} else {
			currentSlide++;
		}

		// console.log(currentSlide);
		showSlides();
	};

	prevSlideBtn.addEventListener("click", goToPrevSlide);
	nextSlideBtn.addEventListener("click", goToNextSlide);

	// const slideInterval = setInterval(goToNextSlide, 3000);
	// clearInterval(slideInterval);

	// document.addEventListener("keyup", (event) => {
	// 	console.log(event);

	// 	if (event.code === "ArrowLeft") {
	// 		goToPrevSlide();
	// 	}
	// 	if (event.code === "ArrowRight") {
	// 		goToNextSlide();
	// 	}
	// });

	showSlides();
};

slideFn();

// document.addEventListener('keypress', (event) => {
//   console.log(event);
// })
// document.addEventListener('keydown', (event) => {
//   console.log(event);
// })

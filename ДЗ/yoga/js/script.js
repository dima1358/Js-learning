window.addEventListener("DOMContentLoaded", function() {

	"use strict";

	// Tabs

	let tabsChanging = (tabsWrapClass, tabsCollClass, contentCollClass) => {

		let tabsWrap = document.querySelector(`.${tabsWrapClass}`),
			tabsColl = document.querySelectorAll(`.${tabsCollClass}`),
			contentColl = document.querySelectorAll(`.${contentCollClass}`);

		let hideContent = (a = 1) => {
			for(let i = a; i < contentColl.length; i++) {
				contentColl[i].classList.remove("show");
				contentColl[i].classList.add("hide");
			}
		}
		hideContent();

		let showContent = (b) => {
			if (contentColl[b].classList.contains('hide')) {
				contentColl[b].classList.remove('hide');
				contentColl[b].classList.add('show');
			}
		}

		tabsWrap.addEventListener("click", function(event) {
			let target = event.target;
			if (target && target.classList.contains('info-header-tab')) {
				for(let i = 0; i < tabsColl.length; i++) {
					if (tabsColl[i] == target) {
						hideContent(0);
						showContent(i);
						break;
					}
				}
			}
		})
	};
	tabsChanging("info-header", "info-header-tab", "info-tabcontent");

	// Timer

	class Timer {
		constructor(id, endtime) {
			this.endtime = endtime;
			this.id = id;
		}
		getPeriod() {
			let t = Date.parse(this.endtime) - Date.parse(new Date()),
				hours = Math.floor((t/1000/60/60)),
				minutes = Math.floor((t/1000/60) % 60),
				seconds = Math.floor((t/1000) % 60);

			return {
				periodMS: t,
				periodH: hours,
				periodM: minutes,
				periodS: seconds,
			}
		}
		setTimer() {
			let timer = document.getElementById(this.id),
				timerHours = timer.querySelector(".hours"),
				timerMinutes = timer.querySelector(".minutes"),
				timerSeconds = timer.querySelector(".seconds");

				let updateTimer = () => {
					let t = this.getPeriod();
					if (t.periodMS > 0) {
						for(let key in t) {
							if (t[key] < 10) {
								t[key] = `0${t[key]}`;
							}
						}
						timerHours.textContent = t.periodH;			
						timerMinutes.textContent = t.periodM;			
						timerSeconds.textContent = t.periodS;
					} else {
						timerHours.textContent = "00";
						timerMinutes.textContent = "00";			
						timerSeconds.textContent = "00";
						clearInterval(timerInterval);
					}
				};

				let timerInterval = setInterval(updateTimer, 1000);
		}
	}
	const newTimer = new Timer("timer", "2019-09-26");
	newTimer.setTimer();

	// Modal popups
	// btn-more

	let btnMore = document.querySelector(".more"),
		overlay = document.querySelector(".overlay"),
		popupClose = overlay.querySelector(".popup-close"),
		infoBlock = document.querySelector(".info"),
		descriptionBtns = infoBlock.querySelectorAll(".description-btn");

	let showPopup = () => {
		overlay.style.display = "block";
	}

	let closePopup = () => {
		overlay.style.display = "none";
	}

	btnMore.addEventListener("click", function() {
		showPopup();
		btnMore.classList.add("more-splash");
	});

	popupClose.addEventListener("click", function() {
		closePopup();
		btnMore.classList.remove("more-splash");
		descriptionBtns.forEach(function(item) {
			item.classList.remove("more-splash");
		});
	});

	// btn-description

	infoBlock.addEventListener("click", function(event) {
		if (event.target.matches("div.description-btn")) {
			showPopup();
			event.target.classList.add("more-splash");
		}
	});

	// click-outside

	let outsideClicking = () => {
		document.addEventListener("click", function(event) {
			let target = event.target;
			if (!(target.closest(".popup")) && !(target.matches("div.description-btn")) && !(target == btnMore)) {
				closePopup();
			}
		})
	}
	outsideClicking();

	// send-form
	// modal-form

	function initSending(selectorForm) {

		let form = document.querySelector(selectorForm),
			input = form.getElementsByTagName("input"),
			statusMessage = document.createElement('div'),
			message = {
				loading: "Идет отправка данных...",
				succes: "Отправка данных завершена!",
				error: "Возникла ошибка при отправке данных!"
			};

		form.appendChild(statusMessage);
		statusMessage.classList.add("status-message");

		form.addEventListener("submit", function(event) {
			event.preventDefault();

			let request = new XMLHttpRequest();
			
			request.open("POST", "server.php");
			request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

			let formData = new FormData(form),
				obj = {};
			formData.forEach(function(value, key) {
				obj[key] = value;
			});
			let jsonData = JSON.stringify(obj);

			request.send(jsonData);

			request.addEventListener("readystatechange", function(){
				function sendForm() {
					return new Promise(function(resolve, reject){
						if (request.readyState === 4 && request.status == 200) {
							resolve();
						} else if (request.readyState < 4) {
							resolve();
						} else {
							reject();
						}
					});
				};
				sendForm()
					.then(function() {
						statusMessage.textContent = message.loading;
					})
					.then(function() {
						statusMessage.textContent = message.succes;
						for (let i = 0; i < input.length; i++) {
							input[i].value = "";
						}
					})
					.catch(function() {
						statusMessage.textContent = message.error;
					})
			});
		});
	};

	initSending(".main-form");
	initSending("#form");

});
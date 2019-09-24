window.addEventListener("DOMContentLoaded", function() {

	"use strict";

	// Tabs

	tabsChanging("info-header", "info-header-tab", "info-tabcontent");

	function tabsChanging(tabsWrapClass, tabsCollClass, contentCollClass) {

		let tabsWrap = document.querySelector("." + tabsWrapClass),
			tabsColl = document.querySelectorAll("." + tabsCollClass),
			contentColl = document.querySelectorAll("." + contentCollClass);

		function hideContent(a) {
			for(let i = a; i < contentColl.length; i++) {
				contentColl[i].classList.remove("show");
				contentColl[i].classList.add("hide");
			}
		}
		hideContent(1);

		function showContent(b) {
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


	// Timer

	let deadline = "2019-09-25";

	function getPeriod(endtime) { 
		let t = Date.parse(endtime) - Date.parse(new Date()),
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

	function setTimer(id, endtime) {
		let timer = document.getElementById(id),
			timerHours = timer.querySelector(".hours"),
			timerMinutes = timer.querySelector(".minutes"),
			timerSeconds = timer.querySelector(".seconds"),
			timerInterval = setInterval(updateTimer, 1000);

			function updateTimer() {
				let t = getPeriod(endtime);
				if (t.periodMS > 0) {
					for(let key in t) {
						if (t[key] < 10) {
							t[key] = "0" + t[key];
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
	};
	setTimer("timer", deadline);

	// Modal popups
	// btn-more

	let btnMore = document.querySelector(".more"),
		overlay = document.querySelector(".overlay"),
		popupClose = overlay.querySelector(".popup-close"),
		infoBlock = document.querySelector(".info"),
		descriptionBtns = infoBlock.querySelectorAll(".description-btn");

	function showPopup() {
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	}

	function closePopup() {
		overlay.style.display = "none";
		document.body.style.overflow = "";
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

	function outsideClicking() {
		document.addEventListener("click", function(event) {
			let target = event.target;
			if (!(target.closest(".popup")) && !(target.matches("div.description-btn")) && !(target == btnMore)) {
				closePopup();
			}
		})
	}
	outsideClicking();

});
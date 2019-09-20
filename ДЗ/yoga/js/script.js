window.addEventListener("DOMContentLoaded", function() {

	"use strict";

	let tabsWrap = document.querySelector(".info-header"),
		tabsColl = document.querySelectorAll(".info-header-tab"),
		contentItems = document.querySelectorAll(".info-tabcontent");

	function hideContent(b) {
		for(let i = 0; i < contentItems.length; i++) {
			contentItems[i].classList.add("hide");
			contentItems[b].classList.remove("hide");
		}
	}
	hideContent(0);

	function showContent(a) {
		for(let i = 0; i < contentItems.length; i++) {
			contentItems[i].classList.remove("show");
			contentItems[a].classList.add("show");
		}
	}

	tabsWrap.addEventListener("click", function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for(let i = 0; i < tabsColl.length; i++) {
				if (tabsColl[i] == target) {
					hideContent(i);
					showContent(i);
					break;
				}
			}
		}
	})

});
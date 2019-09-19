let menuList = document.querySelector(".menu"),
		menuItems = document.querySelectorAll(".menu-item"),
		newItem = document.createElement("li"),
		title = document.getElementById("title"),
		adv_wrap = document.getElementsByClassName("column")[1],
		adv = document.getElementsByClassName("adv")[0],
		answer = prompt("Ваше отношение к технике apple?", "");

menuList.insertBefore(menuItems[1], menuItems[3]);
newItem.classList.add("menu-item");
newItem.textContent = "Пятый пункт";
menuList.appendChild(newItem);

document.body.style.background = "url(img/apple_true.jpg) center no-repeat";

title.textContent = "Мы продаем только подлинную технику Apple";

adv_wrap.removeChild(adv);

document.getElementById("prompt").textContent = answer;
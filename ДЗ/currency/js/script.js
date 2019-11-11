
// let inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {
//     let request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();
    
//     request.addEventListener('readystatechange', function() {
//         function fillData() {
//             return new Promise(function(resolve, reject) {
//                 if (request.readyState === 4 && request.status == 200) {
//                     resolve();
//                 } else {
//                     reject();
//                 }
//             });
//         };
//         fillData()
//             .then(function() {
//                 let data = JSON.parse(request.response);
//                 inputUsd.value = inputRub.value / data.usd;
//             })
//             .catch(() => inputUsd.value = "Что-то пошло не так!");
//     });

// });

// function delay(ms) {
//     let promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             return this;
//         }, ms);
//     })
// };

// delay(3000).then(() => alert('выполнилось через 3 секунды'));

let btn = document.createElement("button"),
    circle = document.querySelector(".circle");
    document.body.appendChild(btn);
    btn.innerHTML = `Показать круг`;

function showCircle(cx, cy, radius) {
    
    circle.style.cssText = `width: ${radius*2}px; height: ${radius*2}px; top: ${cy}%; left: ${cx}%;`;

    return new Promise((resolve) => resolve());
};

btn.addEventListener("click", function() {
    showCircle(50, 50, 100)
        .then(() => circle.addEventListener("transitionend", () => circle.textContent = "Hello, world!"));
});

// function showResult() {
//     return new Promise((resolve, reject) => {
//         (Math.random() > .5) ? resolve() : reject()
//     });
// }

// showResult()
//     .then(() => console.log("Успех"))
//     .catch(() => console.log("Ошибка"));

(function() {
  f(1)
}())

let f = function(x) {
  alert(x)
}


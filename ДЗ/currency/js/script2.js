
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.addEventListener('readystatechange', function() {
        function fillData() {
            return new Promise(function(resolve, reject) {
                if (request.readyState === 4 && request.status == 200) {
                    resolve();
                } else {
                    reject();
                }
            });
        };
        fillData()
            .then(function() {
                let data = JSON.parse(request.response);
                inputUsd.value = inputRub.value / data.usd;
            })
            .catch(() => inputUsd.value = "Что-то пошло не так!");
    });

});

function loadScript (src, callback) {
    let script = document.createElement("script");
    script.src = src;

    document.body.appendChild(script);
}

function test () {
    console.log("ok");
}

loadScript("../js/lib", test);
var asciiEnabled = document.getElementById("asciiBtn");
var asciiDisabled = document.getElementById("noAsciiBtn");

asciiEnabled.addEventListener('click', function () {
    setAsciiStyles()
});

asciiDisabled.addEventListener('click', function () {
    setNormalStyles()
});

if (localStorage.getItem('ascii') === 'true') {
    setAsciiStyles()
} else {
    setNormalStyles()
}

function setAsciiStyles() {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
}

function setNormalStyles() {
    document.body.style.background = '#eeeeee';
    document.body.style.color = 'black';
}
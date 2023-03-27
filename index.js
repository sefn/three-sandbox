var asciiEnabled = document.getElementById("asciiBtn");
var asciiDisabled = document.getElementById("noAsciiBtn");

asciiEnabled.addEventListener('click', function () {
    localStorage.setItem('ascii', true);
    window.location.reload();
});

asciiDisabled.addEventListener('click', function () {
    localStorage.setItem('ascii', false);
    window.location.reload();
});
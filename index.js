var asciiSwitch = document.getElementById("asciiSwitch"); 

asciiSwitch.addEventListener('click', function () {
    if (asciiSwitch.checked) {
        localStorage.setItem('ascii', true);
        setAsciiStyles()
    }
    else {
        localStorage.setItem('ascii', false);
        setNormalStyles()
    }
});

if (localStorage.getItem('ascii') === 'true') {
    asciiSwitch.checked = true;
    setAsciiStyles()
} else {
    setNormalStyles()
}

function setAsciiStyles() {
    const h2 = document.querySelectorAll('h2');
    const dividers = document.querySelectorAll('.divider-custom-line');
    const lightDividers = document.querySelectorAll('.divider-light.divider-custom-line');
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    h2.forEach(h2 => {
        h2.style.color = 'white';
    })
    dividers.forEach(divider => {
        divider.style.backgroundColor = 'white';
    })
    lightDividers.forEach(divider => {
        divider.style.backgroundColor = 'white';
    })
}

function setNormalStyles() {
    const h2 = document.querySelectorAll('h2');
    const dividers = document.querySelectorAll('.divider-custom-line');
    const lightDividers = document.querySelectorAll('.divider-light.divider-custom-line');

    document.body.style.background = '#dddddd';
    document.body.style.color = 'black';
    h2.forEach(h2 => {
        h2.style.color = 'black';
    });
    dividers.forEach(divider => {
        divider.style.backgroundColor = 'black';
    })
    lightDividers.forEach(divider => {
        divider.style.backgroundColor = 'white';
    })
}
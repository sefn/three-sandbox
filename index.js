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
    const bgPrimary = document.querySelectorAll('#about');
    const h1 = document.querySelectorAll('h1');
    const h2 = document.querySelectorAll('h2');
    const h3 = document.querySelectorAll('h3');
    const a = document.querySelectorAll('a');
    const dividers = document.querySelectorAll('.divider-custom-line');
    const lightDividers = document.querySelectorAll('.divider-light.divider-custom-line');
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    bgPrimary.forEach(bgPrimary => {
        bgPrimary.style.backgroundColor = 'white';
    })
    h1.forEach(h1 => {
        h1.style.color = 'white';
    })
    h2.forEach(h2 => {
        h2.style.color = 'white';
    })
    h3.forEach(h3 => {
        h3.style.color = 'white';
    })
    a.forEach(a => {
        a.style.color = 'white';
    })
    dividers.forEach(divider => {
        divider.style.backgroundColor = 'white';
    })
    lightDividers.forEach(divider => {
        divider.style.backgroundColor = 'white';
    })
}

function setNormalStyles() {
    const h1 = document.querySelectorAll('h1');
    const h2 = document.querySelectorAll('h2');
    const h3 = document.querySelectorAll('h3');
    const a = document.querySelectorAll('a');
    const dividers = document.querySelectorAll('.divider-custom-line');
    const lightDividers = document.querySelectorAll('.divider-light.divider-custom-line');
    document.body.style.background = '#eeeeee';
    document.body.style.color = 'black';
    h1.forEach(h1 => {
        h1.style.color = '#c41953';
    })
    h2.forEach(h2 => {
        h2.style.color = 'black';
    });
    h3.forEach(h3 => {
        h3.style.color = '#c41953';
    })
    a.forEach(a => {
        a.style.color = '#c41953';
    })
    dividers.forEach(divider => {
        divider.style.backgroundColor = 'black';
    })
    lightDividers.forEach(divider => {
        divider.style.backgroundColor = 'white';
    })
}
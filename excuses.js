const categoryButtons = document.querySelectorAll('.category-button');
let excuseCategory = '';

document.querySelector('#getRandomExcuseBtn').addEventListener('click', function () {
    fetch(`https://excuser.herokuapp.com/v1/excuse/${excuseCategory}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            myExcuse.innerHTML = data[0].excuse;
        });
}, false);

categoryButtons.forEach(button => button.addEventListener('click', () => {
    if (button.innerHTML !== 'Get Random Excuse') {
        excuseCategory = button.innerHTML.toLowerCase();
        categoryButtons.forEach((everyButton) => {
            everyButton.style.background = 'none';
            everyButton.style.color = 'white';
        });
        button.style.background = 'white';
        button.style.color = '#1a1a1a';
    }
})
);

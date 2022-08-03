const myForm = document.getElementById('myForm');
const email = document.getElementById('email');
const name = document.getElementById('name');

const infoCollection = document.getElementById('content');

const emailInfo = [
    {email: 'test@google.com', name: 'Eddie'},
    {email: 'email@email.com', name: 'Tobi'}
];

const buildInfoList = () => {
    infoCollection.innerHTML= '';
    emailInfo.forEach(person => {
        const infoBox = document.createElement('div');
        infoBox.classList.add('info-box');
    
        infoBox.innerText = `${person.email} ${person.name}`;
        infoCollection.append(infoBox);
    });
};

buildInfoList();

myForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = {
        email: email.value,
        name: name.value
    };
    emailInfo.push(data)
    buildInfoList();
    myForm.reset();
});
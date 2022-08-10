$(document).ready(()=> {
    const emailInfo = [
        {email: 'test@email.com', name: 'Eddie'},
        {email: 'name@gmail.com', name: 'Tobi'}
    ];

    const buildInfoList = () => {
        $('#content').empty();
        emailInfo.forEach(person => {
            $('#content').append(
                `<div class="info-box"> ${person.email} ${person.name} </div>`
            )
        });
    };

    buildInfoList();

    $('#myForm').submit(event => {
        event.preventDefault();
        const data = {
            email: $('#email').val(),
            name: $('#name').val()
        };
        emailInfo.push(data);
        buildInfoList();
        $('#myForm').trigger('reset');
    });
    
    // Build a form that has a title and a body input 
    // when pressing submit the form should make a post request to 
    // https://jsonplaceholder.typicode.com/posts
    // console.log the response
    // the API should respond with you title and body and an id: 101


    $('#get-button').click(() => {
        $.get('https://jsonplaceholder.typicode.com/posts/1', (data) => {
            console.log(data)
        })
    })

    $('#post-button').click(() => {
        $.post('https://jsonplaceholder.typicode.com/posts', 
        {title: 'Testing', body: 'Testing text here'},
        (data) => {
            console.log(data)
        });
    });


});
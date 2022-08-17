$(document).ready(() => {
    let bookList;
    
    $.get('http://localhost:3000/posts', data => {
        bookList = data
    }).done(() => buildInfoList())

    const buildInfoList = () => {
        $('#content').empty();
        bookList.forEach( book => {
            $('#content').append(
                `<div id="book${book.id}" class="info-box"> 
                id:${book.id} ${book.title} ${book.author} </div>`
            )
            $(`#book${book.id}`).click(() => removeItem(book.id))
        })
    };

    $('#myForm').submit((event) =>{
        event.preventDefault();
        const formData = {
            title: $('#title').val(),
            author: $('#author').val()
        };
        $.post('http://localhost:3000/posts', 
                formData,
                (data) => { console.log(data)
        });

        $('#myForm').trigger('reset');
        buildInfoList();
    });

    const removeItem = (id) => {
        $.ajax({
            url: `http://localhost:3000/posts/${id}`,
            type: 'DELETE',
            success: function() {
                buildInfoList()
            }
        })
    }

    $('#myUpdateForm').submit((event) => {
        event.preventDefault();
        const formData = {
            id: $('#updateId').val(),
            title: $('#updateTitle').val(),
            author: $('#updateAuthor').val()
        }

        $.ajax({
            url: `http://localhost:3000/posts/${formData.id}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(formData)
        }).done(() => buildInfoList());

        $('#myUpdateForm').trigger('reset');
    })



});
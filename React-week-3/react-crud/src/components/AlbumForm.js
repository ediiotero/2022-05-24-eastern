import React, {useState} from 'react'

const initialState = {
    title: '',
}

function AlbumForm() {
    const [formData, setFormData] = useState(initialState)

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const postData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/albums`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        console.log(data)
    }

    const onSubmit = event => {
        event.preventDefault()
        postData()
    }


  return (
    <div>
        <h2>Album Form</h2>
        <form onSubmit={onSubmit}>
            <div>
                <input 
                    type="text" 
                    placeholder='Enter Title'
                    name='title'
                    value={formData.title}
                    onChange={onChange}
                />
            </div>
            <input type="submit" />
        </form>
    </div>
  )
}

export default AlbumForm
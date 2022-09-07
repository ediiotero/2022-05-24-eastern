import {useState, useEffect} from 'react'
import Form from './components/Form';
import UpdateForm from './components/UpdateForm';
import AlbumForm from './components/AlbumForm';
import './App.css';

function App() {
  const [albums, setAlbums] = useState([])

  const fetchAlbums = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?_limit=10`)
    const data = await res.json()
    setAlbums(data)
    console.log('rendering')
  }

  const deleteAlbum = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'DELETE'
    })
    console.log(res)
  }

  useEffect(() => {
    fetchAlbums();
  },[])

  return (
    <div className='App'>
      <AlbumForm />
      <Form />
      <UpdateForm />
      {albums.map(album => <p key={album.id} onClick={()=> deleteAlbum(album.id)}>{album.title}</p>)}
    </div>
  );
}

export default App;

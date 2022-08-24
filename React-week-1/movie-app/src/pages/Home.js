import React, { Component } from 'react'

import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import moviePosters from '../image/movies.jpg'

const data = [
    {
        id: 1,
        title: "The Batman",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit labore nisi accusantium aliquid officia saepe perspiciatis molestias. Ex, optio et."
    },
    {
        id: 2,
        title: "Top Gun",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit labore nisi accusantium aliquid officia saepe perspiciatis molestias. Ex, optio et."
    },
    {
        id: 3,
        title: "Lightyear",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit labore nisi accusantium aliquid officia saepe perspiciatis molestias. Ex, optio et."
    },
    {
        id: 4,
        title: "Grease",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit labore nisi accusantium aliquid officia saepe perspiciatis molestias. Ex, optio et."
    }
]

const styles = {minWidth: '100%', height: '20rem'}

export default class Home extends Component {
  render() {
    return (
       <>
        <Navbar />
        <main className='container'>
            <img src={moviePosters} alt="movie posters" style={styles}/>
            <p className='site-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsum, asperiores possimus 
                deserunt cupiditate optio sed eos deleniti labore iste! Error magni consectetur, eos ullam 
                recusandae, dicta non eaque quos aperiam provident similique iure distinctio accusantium 
                veritatis aspernatur in tempora!</p>
            {data.map((movie) => <Card key={movie.id} title={movie.title} text={movie.post} />)}
        </main>
        <Footer copy="React Demo"/>
       </>
    )
  }
}

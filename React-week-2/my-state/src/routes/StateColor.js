import React, { Component } from 'react'

export class StateColor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'black',
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({posts: data}))
    }

    handleClick = (newColor) => {
       this.setState({color: newColor})
    }

   

   render() {
    return(
        <>
           {console.log('rendering...')}
           <div style={{
            width: '10rem',
            height: '10rem',
            backgroundColor: this.state.color
           }}></div>

            <button onClick={() => this.handleClick('red')}>RED</button>
            <button onClick={() => this.handleClick('green')}>GREEN</button>
            <button onClick={() => this.handleClick('blue')}>BLUE</button>
            {this.state.posts.map(post => <p key={post.id}>{post.title}</p>)}
        </>
    )
   }
}

export default StateColor
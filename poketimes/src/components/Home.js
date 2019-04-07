import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png'
import { connect } from "react-redux";

class Home extends Component {

    /*

    NOT NEEDED. Main concept of redux is to have a central store of data that each component can reach
    and grab

    // state = {
    //   posts: []
    // }
    // componentDidMount(){
    //   axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //       this.setState({
    //         posts: res.data.slice(0,10)
    //       });
    //     })
    // }*/
    render() {
        console.log(this.props);

        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div>
                <p className="center">No posts yet.</p>
            </div>
        );
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

// getting state of the redux store
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

// connect returns a high order component
// setting the props of the store state on the high order component
export default connect(mapStateToProps)(Home);
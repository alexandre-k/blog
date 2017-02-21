import React from 'react';
import{ Badge, Row, Column } from 'react-foundation';
import { GridList, GridTitle } from 'material-ui/GridList';
import { getPosts } from '../utils/services';

require('./Posts.css');

// const posts = [];

class Posts extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            posts: []
        };
    }
    loadPosts() {
        console.log(getPosts())
        const tempPosts = getPosts();
        const posts = [];
        console.log(tempPosts);
        for (let i=0; i < tempPosts.length; i++) {
            console.log(tempPosts[i]);
            posts.push(tempPosts[i].value);
        }    
        this.setState({posts: posts});
    }
    render() {
        return (
            <div>
                <button onClick = {this.loadPosts}>Load posts</button>
                <button>Test</button>
                <Row className='display'>
                    <Column small={3}>{this.state.posts}</Column>
                </Row>
            </div>
        )
    }
}

export default Posts;

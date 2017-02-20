import React from 'react';
import{ Badge, Row, Column } from 'react-foundation';
import { GridList, GridTitle } from 'material-ui/GridList';
import { getPosts } from '../utils/services';

require('./App.css');

// const posts = [];

class Posts extends React.Component {
    constructor(props) {
        super(props);
        /*
         * this.state = {
         *     posts
         * };
         */
    }
    loadPosts() {
        const tempPosts = getPosts()
        console.log(tempPosts)
        for (let i=0; i < tempPosts.length; i++) {
            console.log(tempPosts[i])
            this.state.posts.push(tempPosts[i].value)
        }    
    }
    render() {
        return (
            <div className='posts'>
                <Row className='display'>
                    <Column small={3}>{this.state.posts}</Column>
                    <Column small={9}>9</Column>
                </Row>
                <Badge>1</Badge>
            </div>
        )
    }
}

export default Posts;

import React from 'react'
import{ Badge, Row, Column } from 'react-foundation'
import { GridList, GridTitle } from 'material-ui/GridList'
import { getPosts } from '../utils/services'
import { Link } from 'react-router'
import { Post } from  './Post'


class Posts extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            posts: []
        };
        this.loadPosts = this.loadPosts.bind(this);
    }
    loadPosts() {
        console.log('IN LOADPOSTS')
        getPosts().then(response => {
            const posts = [];
            for (let i=0; i < response.length; i++) {
                console.log(response[i].value);
                posts.push(response[i].value);
                console.log(posts);
            }    
            this.setState({posts: posts});

        })
        console.log('BEGIN', this.props)
    }
    render() {
        return (
            <div>
                <button onClick = {this.loadPosts}>Load posts</button>
                <Row className='display'>
                    <Column small={9}>
                        <Post {...this.props.posts}/>
                    </Column>
                </Row>
            </div>
        )
    }
}

export default Posts;

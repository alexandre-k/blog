import React from 'react';
import{ Badge, Row, Column } from 'react-foundation';
import { GridList, GridTitle } from 'material-ui/GridList';
import { getPosts } from '../utils/services';
import { Link } from 'react-router'

// require('./Posts.css');

// const posts = [];

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
        console.log('PROPS')
        console.log(this.props)
        console.log('END')
    }
    render() {
        return (
            <div>
                <button onClick = {this.loadPosts}>Load posts</button>
                <button>Test</button>
                <Row className='display'>
                    <Column small={9}>
                        {this.props.children}
                        {
                            this.state.posts.map(object => {
                                return (
                                    <section>
                                        {/*           <h2><Link to='/post/:'{this.object._id}>{ object.title }</Link></h2>*/}
                                    <h3>{ object.author }</h3>
                                    <p dangerouslySetInnerHTML={{ __html: object.body }}></p>
                                    </section>
                                )
                            })
                        }
                    </Column>
                </Row>
            </div>
        )
    }
}

export default Posts;

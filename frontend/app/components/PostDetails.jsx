import React from 'react';
import { getPostDetails }  from '../utils/services';


class PostDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postDetails: {}
        };
        this.loadPostDetails = this.loadPostDetails.bind(this);
    }
    loadPostDetails() {
        console.log('IN LOADPOSTDETAILS')
        getPostDetails().then(response => {
            const postDetails = response.value;
            console.log(postDetail);
            this.setState({postDetails: postDetails});
        })
    }

    render() {
        return (
            <div>
                <Column small={9}>
                </Column>
            </div>
        )
    }
}

import React from 'react';
import { Callout, Colors} from 'react-foundation';


export default class Header extends React.Component {
    constructor(props) {
        
        super(props);

        this.state = {
            header: "Header of the website"
        }
    }
    render() {
        return (
            <div class='panel'>
                <Callout color={Colors.SECONDARY}>
                    <h1>{this.props.title}</h1>
                </Callout>
            </div>
        )
    }
}

Header.propTypes = {
    title: React.PropTypes.string
}

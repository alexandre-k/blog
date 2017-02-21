import React from 'react';
import { Callout } from 'react-foundation';


export default class Footer extends React.Component {
    render() {
        return (
            <div class='panel callout radius'>
                <Callout>
                    <h2>{this.props.title}</h2>
                </Callout>
            </div>
        )
    }
}

Footer.propTypes = {
    title: React.PropTypes.string
}

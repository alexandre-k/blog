import React from 'react'
import { Callout, Colors} from 'react-foundation'
import reactCSS from 'reactcss'
import { Link } from 'react-router'


export default class Header extends React.Component {
    constructor(props) {
        
        super(props);

        this.state = {
            header: "Header of the website"
        }
    }

    render() {
        const styles = reactCSS({
            'default': {
                title: {
                    boxShadow: '0 2px 4px rgba(0,0,0,.15)',
                    fontSize: '2.8rem',
                },
            },
        })

        return (

            <div class='panel'>
                <Callout color={Colors.SECONDARY} style={ styles.title }>
                    <h1 style={ styles.title }>
                        <Link to='/'>{this.props.title}</Link>
                    </h1>
                </Callout>
            </div>
        )
    }
}

Header.propTypes = {
    title: React.PropTypes.string
}

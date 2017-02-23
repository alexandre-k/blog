import React from 'react'
import Posts from './Posts'
import Header from './Header'
import Footer from './Footer'
import D3 from './D3'




export default class App extends React.Component {
    constructor(props) {
        
        super(props);

        this.state = {
            header: "Header with title",
            footer: "Footer of the website"
        }

    }
    render() {
        return (
            <div>
                <Header title={this.state.header}/>
                <Posts />
                <Footer title={this.state.footer}/>
            </div>
        )
    }

}

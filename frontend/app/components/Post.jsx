import React from 'react'


class Post extends React.Component {
    render() {
        return (
            <div>
                <section>
                    {/*<h2><Link to='/post/:'{this.object._id}>{ object.title }</Link></h2>*/}
                <h3>{ this.props.author }</h3>
                <p dangerouslySetInnerHTML={{ __html: object.body }}></p>
                </section>

            </div>
        )
    }
}

export default Post;

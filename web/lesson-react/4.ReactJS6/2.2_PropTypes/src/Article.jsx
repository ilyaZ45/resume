import React, { Component } from 'react';

export default class Article extends Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        pictureURL: React.PropTypes.string,
        author: React.PropTypes.shape({   /// создаём образ из других-shape
            name: React.PropTypes.string,
            avatarURL: React.PropTypes.string,
            numberOfArticles: React.PropTypes.number
        }),
        type: React.PropTypes.oneOf(['education', 'entertainment']),
        tags: React.PropTypes.arrayOf(React.PropTypes.string),
        numberOfLikes: React.PropTypes.number
    }

    static defaultProps = {
        author: {
            name: 'Unnamed Author'
        },
        pictureURL: 'https://i.ytimg.com/vi/O-58MDm1eWI/maxresdefault.jpg',
        type: 'entertainment',
        tags: [],
        numberOfLikes: 0
    }

    render() {
        const {
            title,
            text,
            pictureURL,
            author,
            type,
            tags,
            numberOfLikes,
        } = this.props;

        return (
            <div className='Article'>
                <h1 style={{ textAlign: 'center' }}>
                    {title}
                </h1>
                <h4 style={{ textAlign: 'center' }}>
                    by {author.name}
                </h4>
                <h4 style={{ textAlign: 'center' }}>
                    {type.toUpperCase()}
                </h4>
                <img src={pictureURL} width='100%' />
                <p style={{ whiteSpace: 'pre-wrap' }}>
                    {text}
                </p>
                <div className='tags'>
                    <b>Tags:</b> {tags.join(', ')}
                </div>
                <div className='tags'>
                    <b>Likes:</b> {numberOfLikes}
                </div>
            </div>
        );
    }
}

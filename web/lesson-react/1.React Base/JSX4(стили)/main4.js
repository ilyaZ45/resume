const Tweet = React.createClass({

    render (){
        const {
            avatar,
            author,
            text,
            image,
            likes,
            retweets
        } = this.props;


        // console.log(this.props.object);
        return (
            <div className="tweet">
                <img
                    className="tweet-avatar"
                    src={avatar} height={200} width={200}
                    alt={author}
                />

                <div className="tweet-body">
                    <a
                        className="tweet-author"
                        href={`https://twitter.com/${author}`}
                        target="_blank"  // чтобы открывалось в новой вкладке
                    >
                        @{author}
                    </a>

                    <p className="tweet-text">{text}</p>

                    <img
                        src={image}
                        alt={text} height={400} width={400}
                    />
                    <br />

                    <div className="tweet-stats">
                        <div className="tweet-retweets">
                            <i className="fa fa-retweet" />
                            {retweets}
                        </div>

                        <div className="tweet-likes">
                            <i className="fa fa-heart" />
                            {likes}
                        </div>    
                    </div>
                </div>
            </div>


        );

    }
});

ReactDOM.render(
    // React.createElement(HelloComponent, { name: 'Ilya', avatar:'C:/Users/ilyuha/Desktop/Screenshot_5.jpg' }),
    <div>
        <Tweet
            // object{{ name:'foo' x: 5 }}   // сюда можно передавать и объект и массив
            author="Ilya17917052"
            text="Hello my blacky world"
            image="http://pngimg.com/uploads/shark/shark_PNG18836.png"
            avatar="http://pngimg.com/uploads/shark/shark_PNG18825.png"
            likes={233}
            retweets={50}
        />

    </div>,
    document.getElementById('root')
)

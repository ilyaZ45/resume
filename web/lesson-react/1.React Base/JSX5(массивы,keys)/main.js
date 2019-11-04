const TWEETS = [
    {
        id:1,
        author:"Ilya17917052",
        text:"Hello my blacky world..В тот день, когда наука начнет изучать нефизические явления, она сделает больше успехов через одно десятилетие, чем во всех предыдущих веках ее существования.",
        image:"http://pngimg.com/uploads/shark/shark_PNG18836.png",
        avatar:"http://pngimg.com/uploads/shark/shark_PNG18825.png",
        likes:233,
        retweets:50
    },

    {
        id:2,
        author:'Ilya17917052',
        text:'Hello my blacky world..В тот день, когда наука начнет изучать нефизические явления, она сделает больше успехов через одно десятилетие, чем во всех предыдущих веках ее существования.',
        image:'http://pngimg.com/uploads/shark/shark_PNG18836.png',
        avatar:'http://pngimg.com/uploads/shark/shark_PNG18825.png',
        likes:23,
        retweets:5
    },

    {
        id:3,
        author:"Ilya17917052",
        text:"Hello my blacky world..В тот день, когда наука начнет изучать нефизические явления, она сделает больше успехов через одно десятилетие, чем во всех предыдущих веках ее существования.",
        image:"http://pngimg.com/uploads/shark/shark_PNG18836.png",
        avatar:"http://pngimg.com/uploads/shark/shark_PNG18825.png",
        likes:233,
        retweets:56
    },

    {
        id:4,
        author:"Ilya17917052",
        text:"Hello my blacky world..В тот день, когда наука начнет изучать нефизические явления, она сделает больше успехов через одно десятилетие, чем во всех предыдущих веках ее существования.",
        image:"http://pngimg.com/uploads/shark/shark_PNG18836.png",
        avatar:"http://pngimg.com/uploads/shark/shark_PNG18825.png",
        likes:3,
        retweets:5
    },
];
function shuffle(arr) {
    const result = [...arr];
    result.sort(()  => 0.5 - Math.random());
    return result;
}


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

        return (
            <div className="tweet">
                {
                    image &&
                    <img className="tweet-avatar" src={avatar} height={200} width={200} alt={author}/>
                }

                <div className="tweet-body">
                    <a
                        className="tweet-author"
                        href={`https://twitter.com/${author}`}
                        target="_blank"
                    >
                        @{author}
                    </a>

                    <p className="tweet-text">{text}</p>

                    {
                        image      // проверка на приход изображения
                        ?<img src={image} alt={text} height={400} width={400}/>
                        : null
                    }
                    <br />


                    <div className="tweet-stats">
                        <div className="tweet-retweets">
                            <i className="tweet-stat-icon fa fa-retweet" />
                            {retweets || null}
                        </div>

                        <div className="tweet-likes">
                            <i className="tweet-stat-icon fa fa-heart" />
                            {likes || null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});



////////////////моё
class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // начальное состояние
            tweets: []
        }
        this.handleShuffle = this.handleShuffle.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }


    handleShuffle  () {
        this.setState({
            tweets: shuffle(this.state.tweets)
        });
    };


////////////////моё
    handleRemove() {
        const {tweets} = this.state;

        if(tweets.length != []){
            this.setState({
                tweets: []
            })
        }
    }

    handleAdd () {
        const { tweets } = this.state;

        if (tweets.length < TWEETS.length){
            this.setState({
                tweets: [
                    ...tweets,
                    TWEETS[tweets.length],
                ]
            });
        }
    };

    render (){
        return (
            <div>
                <button onClick={this.handleShuffle}>
                    Shuffle
                </button>

                <button onClick={this.handleAdd}>
                    Add
                </button>

                <button onClick={this.handleRemove}>
                    Remove
                </button>
                {
                    this.state.tweets.map(tweet =>
                        <Tweet
                            key={tweet.id}
                            author={tweet.author}
                            text={tweet.text}
                            image={tweet.image}
                            avatar={tweet.avatar}
                            likes={tweet.likes}
                            retweets={tweet.retweets}
                        />
                    )
                }
            </div>
        );
    }
}
ReactDOM.render(
    // React.createElement(HelloComponent, { name: 'Ilya', avatar:'C:/Users/ilyuha/Desktop/Screenshot_5.jpg' }),

        // <Tweet
        //     // object{{ name:'foo' x: 5 }}
        //     author="ilya33"
        //     text="Hello my blacky wirld"
        //     image="http://pngimg.com/uploads/shark/shark_PNG18836.png"
        //     avatar="http://pngimg.com/uploads/shark/shark_PNG18825.png"
        //     likes={233}
        //     retweets={50}
        // />
        <Feed />,
    document.getElementById('root')
);

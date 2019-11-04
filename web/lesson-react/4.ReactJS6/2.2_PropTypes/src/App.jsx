import React, { Component } from 'react';

import Article from './Article.jsx';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <Article
                    title='Cras ultricies mi eu turpis'
                    text='Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Nullam accumsan lorem in dui. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Curabitur blandit mollis lacus. Nullam cursus lacinia erat.&#010;Etiam feugiat lorem non metus. Ut a nisl id ante tempus hendrerit. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Nulla facilisi.&#010;Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Praesent turpis. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Donec vitae sapien ut libero venenatis faucibus. Nam adipiscing.&#010;Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Pellentesque posuere. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Donec posuere vulputate arcu. Fusce ac felis sit amet ligula pharetra condimentum.&#010;Ut id nisl quis enim dignissim sagittis. Phasellus tempus. Nam at tortor in tellus interdum sagittis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Nunc interdum lacus sit amet orci.'
                    pictureURL='http://zateevo.ru/userfiles/image/Cosmos/Leonov_kartini/nad_terminatorom.jpg'
                    author={{
                        name: 'John Smithey',
                        avatarURL: '',
                        numberOfArticles: 25
                    }}
                    type='education'
                    tags={['tag1', 'tag2', 'tag3']}
                    numberOfLikes={190}
                />
            </div>
        );
    }
}

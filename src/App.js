import './App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import { Component } from 'react';

class App extends Component {
  state = {
    hotels: [
      {
        id: 1,
        name: 'Pod akacjami',
        city: 'Warszawa',
        rating: '8,3',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi esse sunt voluptas dignissimos ullam natus a adipisci. Tempore reiciendis modi eum illo laudantium dolorem officia, neque perspiciatis, voluptatibus veritatis atque.',
        image: '',
      },
      {
        id: 2,
        name: 'Dębowy',
        city: 'Lublin',
        rating: '8,8',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi esse sunt voluptas dignissimos ullam natus a adipisci. Tempore reiciendis modi eum illo laudantium dolorem officia, neque perspiciatis, voluptatibus veritatis atque.',
        image: '',
      },
    ],
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <Menu />
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;

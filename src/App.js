import './App.scss';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';

import { Component } from 'react';

class App extends Component {
  hotels = [
    {
      id: 1,
      name: 'Pod akacjami',
      city: 'Warszawa',
      rating: 8.3,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi esse sunt voluptas dignissimos ullam natus a adipisci. Tempore reiciendis modi eum illo laudantium dolorem officia, neque perspiciatis, voluptatibus veritatis atque.',
      image: '',
    },
    {
      id: 2,
      name: 'Dębowy',
      city: 'Lublin',
      rating: 8.8,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi esse sunt voluptas dignissimos ullam natus a adipisci. Tempore reiciendis modi eum illo laudantium dolorem officia, neque perspiciatis, voluptatibus veritatis atque.',
      image: '',
    },
  ];

  state = {
    hotels: [],
    loading: true,
  };

  searchHandler(term) {
    console.log('szukaj z app', term);
    const hotels = [...this.hotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    this.setState({ hotels });
  }

  // Symulacja pobierania danych z backendu

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hotels: this.hotels,
        loading: false,
      });
    }, 1000);
  }

  render() {
    return (
      <div className='App'>
        <Header onSearch={(term) => this.searchHandler(term)} />
        <Menu />
        {this.state.loading ? (
          <LoadingIcon />
        ) : (
          <Hotels hotels={this.state.hotels} />
        )}
      </div>
    );
  }
}

export default App;

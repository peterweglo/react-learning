import './App.scss';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import Searchbar from './components/UI/Searchbar/Serachbar';
import { Component } from 'react';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';

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
    theme: 'primary',
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

  changeTheme = () => {
    const newTheme = this.state.theme === 'primary' ? 'danger' : 'primary';
    this.setState({ theme: newTheme });
  };

  render() {
    return (
      <Layout
        header={
          <Header>
            <Searchbar
              onSearch={(term) => this.searchHandler(term)}
              theme={this.state.theme}
            />
            <ThemeButton onClick={this.changeTheme} />
          </Header>
        }
        menu={<Menu theme={this.state.theme} />}
        content={
          this.state.loading ? (
            <LoadingIcon theme={this.state.theme} />
          ) : (
            <Hotels hotels={this.state.hotels} theme={this.state.theme} />
          )
        }
        footer={<Footer theme={this.state.theme} />}
      />
    );
  }
}

export default App;

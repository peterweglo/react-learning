import { Component } from 'react';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

class Hotels extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Oferty</h2>
        Hotels
        <Hotel />
        <Hotel />
      </div>
    );
  }
}

// const Hotels = () => {
//   return <div>Hotels</div>;
// };

export default Hotels;

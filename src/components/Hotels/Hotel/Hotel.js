import styles from './Hotel.module.scss';
import hotelImg from '../../../assets/inages/building-66789_1280.jpg';

const Hotel = () => {
  return (
    <div className={`card ${styles.hotel} `}>
      <div className='card-body'>
        <div className='row'>
          <div className='col-4'>
            <img src={hotelImg} alt='' className='img-fluid img-thumbnail' />
          </div>
          <div className='col-8'>
            <div className='row'>
              <div className='col'>
                <p className={styles.title}>Pensjonat</p>
                <span className='badge bg-light text-dark'>Warszawa</span>
              </div>
              <div className='col text-end'>
                <h5>Ocena 8.3</h5>
                <a href='#' className='btn btn-primary mt-2 px-5 float-end'>
                  Pokaż
                </a>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              esse sunt voluptas dignissimos ullam natus a adipisci. Tempore
              reiciendis modi eum illo laudantium dolorem officia, neque
              perspiciatis, voluptatibus veritatis atque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;

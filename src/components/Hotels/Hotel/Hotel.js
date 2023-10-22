import styles from './Hotel.module.scss';
import hotelImg from '../../../assets/inages/building-66789_1280.jpg';

const Hotel = (props) => {
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
                <p className={styles.title}>{props.name}</p>
                <span className='badge bg-light text-dark'>{props.city}</span>
              </div>
              <div className='col text-end'>
                <h5>Ocena: {props.rating}</h5>
                <a href='#' className='btn btn-primary mt-2 px-5 float-end'>
                  Pokaż
                </a>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <p className={styles.description}>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;

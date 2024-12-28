import { useNavigate, useParams } from 'react-router-dom';
import styles from './Destination.module.scss';
import data from '../../utils/data.json';

export default function Destination () {
    const { id } = useParams();
    const navigate = useNavigate();

    const destinations = data.destinations;
    const destination = destinations.find(i => i.name.toLowerCase() == (id as string)) ?? destinations[0];
    
    const handleClickDestination = (destination: any) => {
        if (destination.name !== id) {
            navigate(`/destination/${destination.name.toLowerCase()}`);     
        }
    }

    return (
        <div className={styles.container}>
            <div className='step__title'>
                <span className='step__number'>01</span>
                <span className='text-6'>PICK YOUR DESTINATION</span>
            </div>
            <div className={styles.destination__details}>
                <img className={styles.destination__img} src={destination?.images.webp} alt={`image of ${destination}`} />
                <div className={styles.destination__info}>
                    <div className={styles.destination__tabs}>
                        {destinations.map((item) => {
                            const isActive = item.name === destination.name;

                            return <div className={`${styles.destination__tab_item} ${isActive ? styles.active : ''}`} onClick={() => handleClickDestination(item)}>
                                <div className={`text-8 ${isActive ? 'active' : 'text-blue-300'}`}>{item.name.toUpperCase()}</div>
                                <div className={`${styles.destination__tab_line} ${isActive ? styles.active : ''}`}></div>
                            </div>
                        })}
                    </div>
                    <div className="text-2">{destination?.name?.toUpperCase()}</div>
                    <div className="text-9 text-center text-blue-300">
                        {destination?.description}
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.destination__stats}>
                        <div className={styles.destination__stat_item}>
                            <div className="text-7 text-center text-blue-300">AVG. DISTANCE</div>
                            <div className="text-6-desktop text-center">{destination.distance.toUpperCase()}</div>
                        </div>
                        <div className={styles.destination__stat_item}>
                            <div className="text-7 text-center text-blue-300">EST. TRAVEL TIME</div>
                            <div className="text-6-desktop text-center">{destination.travel.toUpperCase()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
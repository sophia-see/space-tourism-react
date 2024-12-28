import styles from './Crew.module.scss';
import data from '../../utils/data.json';
import { useNavigate, useParams } from 'react-router-dom';

export default function Crew () {
    const { id } = useParams();
    const navigate = useNavigate();

    const crews = data.crew;
    const crew = crews.find(i => i.name.toLowerCase().replace(" ", "-") == (id as string)) ?? crews[0];

    const handleSelectCrew = (crew: any) => {
        if (crew.name !== id) {
            navigate(`/crew/${crew.name.toLowerCase().replace(" ", "-")}`);     
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.crew__texts}>
                <div className='step__title'>
                    <span className='step__number'>02</span>
                    <span className='text-6'>MEET YOUR CREW</span>
                </div>
                <div className={styles.crew__details}>
                    <div className={styles.crew__info}>
                        <div className={styles.crew__title}>
                            <div className="text-4 text-center text-half-white">{crew.role.toUpperCase()}</div>
                            <div className="text-3 text-center">{crew.name.toUpperCase()}</div>                            
                        </div>
                        <div className={`${styles.crew__bio} text-9 text-center text-blue-300`}>{crew.bio}</div>
                    </div>
                </div>
                <div className={styles.crew__pages}>
                    {crews.map((item) => {
                        const isActive = item.name === crew.name;

                        return (
                            <div className={`${styles.crew__page_item} ${isActive ? styles.active : ''}`} onClick={() => handleSelectCrew(item)}>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.img_container}>
                <img className={styles.crew__image} src={crew.images.webp} alt={`image of ${crew.name}`} />
            </div>
        </div>
    )
}
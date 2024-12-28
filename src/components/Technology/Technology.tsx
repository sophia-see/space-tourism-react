import { useNavigate, useParams } from 'react-router-dom';
import styles from './Technology.module.scss';
import data from '../../utils/data.json';
import useDeviceSize from '../../hooks/useDeviceSize';
export default function Technology () {
    const { id } = useParams();
    const navigate = useNavigate();
    const {isDesktop} = useDeviceSize();

    const techonologies = data.technology;
    const technology = techonologies.find(i => i.name.toLowerCase().replace(" ", "-") == (id as string)) ?? techonologies[0];

    const handleSelectTechnology = (technology: any) => {
        if (technology.name !== id) {
            navigate(`/technology/${technology.name.toLowerCase().replace(" ", "-")}`);     
        }
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.step_cotainer} step__title`}>
                <span className='step__number'>03</span>
                <span className='text-6'>SPACE LAUNCH 101</span>
            </div>
            <img className={styles.technology__img} src={isDesktop ? technology.images.portrait : technology.images.landscape} alt={`image of ${technology.name}`} />
            <div className={styles.technology__details}>
                <div className={styles.technology__tabs}>
                    {techonologies.map((item, index) => {
                        const isActive = item.name === technology.name;

                        return (
                            <div className={`text-4 text-center ${styles.technology__tab_item} ${isActive ? styles.active : ''}`} onClick={() => handleSelectTechnology(item)}>
                                {index + 1}
                            </div>
                        )
                    })}
                </div>
                <div className={styles.technology__info}>
                    <div className={styles.technology__title}>
                        <div className="text-4 text-center text-half-white">THE TERMINOLOGY</div>
                        <div className="text-3 text-center">{technology.name.toUpperCase()}</div>
                    </div>
                    <div className="text-9 text-center text-blue-300">
                        {technology.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
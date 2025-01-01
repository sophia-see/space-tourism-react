import { useNavigate, useParams } from 'react-router-dom';
import styles from './Technology.module.scss';
import data from '../../utils/data.json';
import useDeviceSize from '../../hooks/useDeviceSize';
import React from 'react';
export default function Technology () {
    const { id } = useParams();
    const navigate = useNavigate();
    const {isDesktop} = useDeviceSize();
    const [transitionClass, setTransitionClass] = React.useState('');

    const techonologies = data.technology;
    const technology = techonologies.find(i => i.name.toLowerCase().replace(" ", "-") == (id as string)) ?? techonologies[0];

    const handleSelectTechnology = (technology: any) => {
        if (technology.name.toLowerCase() !== id) {
            setTransitionClass(styles['fade-out']); // Add fade-out class
            setTimeout(() => {
                navigate(`/technology/${technology.name.toLowerCase().replace(" ", "-")}`);     
                setTransitionClass(styles['fade-in']); 
            }, 150); 
        }
    }

    React.useEffect(() => {
        const timeout = setTimeout(() => setTransitionClass(''), 150);
        return () => clearTimeout(timeout);
    }, [technology]);

    return (
        <div className={styles.container}>
            <div className={`${styles.step_cotainer} step__title`}>
                <span className='step__number'>03</span>
                <span className='text-6'>SPACE LAUNCH 101</span>
            </div>
            <div className={styles.technology__container}>
                <img className={`${styles.technology__img} ${transitionClass}`} src={isDesktop ? technology.images.portrait : technology.images.landscape} alt={`image of ${technology.name}`} />
                <div className={styles.technology__details}>
                    <div className={styles.technology__tabs}>
                        {techonologies.map((item, index) => {
                            const isActive = item.name === technology.name;

                            return (
                                <div className={`text-4 ${isDesktop ? "" : "text-center"} ${styles.technology__tab_item} ${isActive ? styles.active : ''}`} onClick={() => handleSelectTechnology(item)}>
                                    {index + 1}
                                </div>
                            )
                        })}
                    </div>
                    <div className={`${styles.technology__info} ${transitionClass}`}>
                        <div className={styles.technology__title}>
                            <div className={`text-4 ${isDesktop ? "" : "text-center"} text-half-white`}>THE TERMINOLOGY</div>
                            <div className={`text-3 ${isDesktop ? "" : "text-center"}`}>{technology.name.toUpperCase()}</div>
                        </div>
                        <div className={`text-9 ${isDesktop ? "" : "text-center"} text-blue-300`}>
                            {technology.description}
                        </div>
                    </div>
                </div>                
            </div>

        </div>
    )
}
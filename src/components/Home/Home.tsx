import styles from './Home.module.scss'
export default function Home () {
    return (
        <div className={styles.container}>
            <div className={styles.hero__texts}>
                <div className="text-6 text-center text-blue-300">SO, YOU WANT TO TRAVEL TO</div>
                <div className="text-1 text-center">SPACE</div>
                <div className="text-9 text-center text-blue-300">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</div>
            </div>
            <div className={styles.hero__btn}>
                <div className={`${styles.btn} text-4`}>EXPLORE</div>
            </div>
        </div>
    )
}
// import { useParams } from "react-router-dom";

// export default function Destination () {
//     const { id } = useParams();

//     const destination = id || 'moon';

//     return (
//         <h1>destination: {destination}</h1>
//     )
// }

import styles from './Destination.module.scss';
export default function Destination () {
    return (
        <div className={styles.container}>
            hello
        </div>
    )
}
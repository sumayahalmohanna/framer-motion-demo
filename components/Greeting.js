import styles from "../styles/Home.module.css";
import {motion} from 'framer-motion'

const Greeting = () => {
    return ( 
        <motion.div className={styles.card}
              initial={{y: 100, opacity: 0}}
              animate={{y:0, opacity: 1}}
              exit={{y: 100, opacity: 0}}>
                Hello, world!
              </motion.div>
     );
}
 
export default Greeting;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Home.module.css";
import Greeting from "../components/Greeting";

const buttonVariants = {
    hover: {
      scale: 1.1,
    }
  }

const ButtonsAndComponents = () => {
    const [greetingLabel, setGreetingLabel] = useState('Click me')
    const [showGreeting, setShowGreeting] = useState(false)
    
    const handleGreeting = () => {
        setShowGreeting(!showGreeting)
        if(!showGreeting){
            setGreetingLabel('Close')
        }
        else {
            setGreetingLabel('Click me')
        }
    }
    return (
      <>
        <main className={styles.main}>
          <div className={styles.grid}>
          <motion.button
            className="button"
            variants={buttonVariants}
            whileHover="hover"
            onClick={handleGreeting}
          >
            {greetingLabel}
          </motion.button>
            {showGreeting && (
                <AnimatePresence>
              <motion.div className={styles.card}
              initial={{x: 1000}}
              animate={{x:0}}
              transition={{duration: .2,}}
              exit={{x: -1000}}>
                <Greeting />
              </motion.div>
              </AnimatePresence>
            )}
          </div>
        </main>
      </>
    );
}
 
export default ButtonsAndComponents;
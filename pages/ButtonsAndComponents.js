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
                  <Greeting key='hello'/>
              </AnimatePresence>
            )}
          </div>
        </main>
      </>
    );
}
 
export default ButtonsAndComponents;
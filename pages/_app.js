import '../styles/globals.css'
import Navbar from './components/Navbar'
import { motion, AnimatePresence } from  'framer-motion'

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {delay: .3, duration: .5}
  },
  exit: {
    backgroundColor: 'grey',
    opacity: 0,
  }

}

function MyApp({ Component, pageProps, router }) {
  return (
    <>
    <Navbar/>
    <AnimatePresence>
    <motion.div 
      key={router.route}
      variants={containerVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
        <Component {...pageProps} />
    </motion.div>
    </AnimatePresence>
    </>
  )
}

export default MyApp

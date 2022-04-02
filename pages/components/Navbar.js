import Link from "next/link"
import { motion } from "framer-motion"

const Navbar = () => {
    return ( 
        <motion.div className="navbar"
            initial={{y: -300}}
            animate={{y: 0}}
        >
            <Link href='/' passHref><button className="navBtn">Home</button></Link>
            <Link href='/ProgressBar' passHref><button className="navBtn">Progress Bar</button></Link>
        </motion.div>
     );
}
 
export default Navbar;
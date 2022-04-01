import Link from "next/link"
import { motion } from "framer-motion"

const Navbar = () => {
    return ( 
        <motion.div className="navbar"
            initial={{y: -300}}
            animate={{y: 0}}
        >
            <Link href='/'><button className="navBtn">Home</button></Link>
            <Link href='/progress-bar'><button className="navBtn">Progress Bar</button></Link>
        </motion.div>
     );
}
 
export default Navbar;
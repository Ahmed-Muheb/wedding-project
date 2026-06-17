import { FaHeart } from "react-icons/fa";
import styles from "./Splash.module.css"


function SplashScreen() {

    return (
    <>
    <div className={styles.splashParent}>
        <p className={styles.p}>D E A R</p>
        <h1 className={styles.headLine}>Guest</h1>
        <FaHeart className={styles.icon} />
        <h3 className={styles.bar}>You're Invited</h3>
        <p className={styles.foot}>Tap anywhere to continue</p>
    </div>
    
    </>)
}
export default SplashScreen

import styles from "./Header.module.css"

function Header({head , title , size = "large"}) {

    return(
        <>
         <div className={`${styles.parent} ${styles[size]}`}>
            <h1 className={styles.head}>{head}</h1>
            <p className={styles.title}>{title}</p>
         </div>
        </>
    )
}
export default Header 
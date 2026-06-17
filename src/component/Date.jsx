import Header from "./Header"
import styles from "./Date.module.css"


function Data() {
    const date = [23, "June" , 2026]
    return (
        <>
            <Header head="Save the Date"  title="The Big Reveal"/>
            <div className={styles.parent}>
               { date.map((e,k) => (
                <>
                <div className={styles.child} key={k}>{e}</div>
                </>
               )
                
               )}
            </div>
        </>
    )
}

export default Data 
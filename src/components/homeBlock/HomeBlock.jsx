
import styles from "./HomeBlock.module.scss";

export function HomeBlock () {
    return ( 

        <>
            <div className={styles.container}>
                <div className={styles.lineBlock}></div>
                <h1 className={styles.portfolioName}>Andrii <span>LEONTOVYCH</span></h1>
                <div className={styles.lineBlockTwo}></div>
            </div>
        
            <div className={styles.secContainer}>
                
                <div className={styles.lineBlockTwo}></div>
                    <p className={styles.titleSkills}>DEVELOPER</p>
                    <p className={styles.titleSkills}>DESIGNER</p>
                    <p className={styles.titleSkills}>ARCHITECT</p>
                <div className={styles.lineBlock}></div>
            </div>
        
        </>
    )
}
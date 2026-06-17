import { useEffect, useState } from "react"
import Header from "./Header"
import styles from "./CountDown.module.css"

function CountDown() {

    // 👇 حدد التاريخ اللي عايز توصل له
    const targetDate = new Date("2026-06-23T00:00:00").getTime()

    const [timeLeft, setTimeLeft] = useState(getTime())

    function getTime() {
        const now = new Date().getTime()
        const diff = targetDate - now

        if (diff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        }
    }

    useEffect(() => {

        const interval = setInterval(() => {
            setTimeLeft(getTime())
        }, 1000)

        return () => clearInterval(interval)

    }, [])

    return (
        <>
            <Header head="Countdown" title="To the big day" />

            <div className={styles.parent}>

                <div className={styles.countDiv}>
                    <Header head={timeLeft.days} title="DAYS" size="small" />
                </div>

                <div className={styles.countDiv}>
                    <Header head={timeLeft.hours} title="HOURS" size="small" />
                </div>

                <div className={styles.countDiv}>
                    <Header head={timeLeft.minutes} title="MINUTES" size="small" />
                </div>

                <div className={styles.countDiv}>
                    <Header head={timeLeft.seconds} title="SECONDS" size="small" />
                </div>

            </div>
        </>
    )
}

export default CountDown
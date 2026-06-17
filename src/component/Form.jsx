import Header from "./Header"
import styles from "./Form.module.css"
import SignatureCanvas from "react-signature-canvas"
import { useRef, useState } from "react"

function Form() {

    const [attendance, setAttendance] = useState(null)

    const sigRef = useRef()

    return (
        <>

            <form>

                <Header
                    head="Confirm your attendance"
                    title="We hope to count on you"
                />


                <label htmlFor="name">
                    Full name *
                </label>

                <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                />


                <label>
                    Will you attend?
                </label>

                <div className={styles.radio}>

                    <label htmlFor="yes">

                        <input
                            id="yes"
                            type="radio"
                            name="attendance"

                            checked={attendance === "yes"}

                            onChange={() => {
                                setAttendance(
                                    attendance === "yes"
                                        ? null
                                        : "yes"
                                )
                            }}
                        />

                        Yes, I'll be there! 🥰

                    </label>

                    <label htmlFor="no">

                        <input
                            id="no"
                            type="radio"
                            name="attendance"

                            checked={attendance === "no"}

                            onChange={() => {
                                setAttendance(
                                    attendance === "no"
                                        ? null
                                        : "no"
                                )
                            }}
                        />

                        Sorry, I can't make it 😥

                    </label>

                </div>


                <label htmlFor="message">
                    Message for the couple
                </label>

                <textarea
                    id="message"
                    className={styles.specInput}
                    placeholder="Write a message..."
                />


                <label htmlFor="signature">
                    Signature
                </label>

                <SignatureCanvas
                    ref={sigRef}
                    penColor="black"

                    canvasProps={{
                        className: styles.signatureCanvas
                    }}
                />

                <button
                    type="button"
                    className={styles.clearBtn}
                    onClick={() => sigRef.current.clear()}
                >
                    Clear Signature
                </button>


                <button type="submit">
                    Submit
                </button>

            </form>

        </>
    )
}

export default Form
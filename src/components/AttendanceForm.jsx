import { useRef, useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import SectionHeader from './ui/SectionHeader'
import Card from './ui/Card'
import Input from './ui/Input'
import Textarea from './ui/Textarea'
import Button from './ui/Button'

function AttendanceForm({ submitWish, error, onSubmitted }) {
  const sigRef = useRef(null)

  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState(null)
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState('')
  const [hasSig, setHasSig] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setFormError('')

    if (!attendance) {
      setFormError('Please let us know if you will attend.')
      return
    }

    const signature = sigRef.current?.isEmpty()
      ? null
      : sigRef.current?.toDataURL('image/png')

    setSubmitting(true)

    const result = await submitWish({ name, attendance, message, signature })

    if (result.success) {
      setName('')
      setAttendance(null)
      setMessage('')
      sigRef.current?.clear()
      onSubmitted?.()
    }

    setSubmitting(false)
  }

  return (
    <section id="form" className="px-4 py-10 sm:px-6">
      <SectionHeader
        heading="Confirm your attendance"
        subtitle="We hope to count on you"
      />

      <Card className="mx-auto mt-8 max-w-xl p-5 sm:mt-10 sm:p-8 !bg-white">
        <form onSubmit={handleSubmit}>
          <Input
            id="guest-name"
            label="Full name"
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
          />

          <fieldset className="mt-5 border-none p-0">
            <legend className="text-lg text-forest sm:text-xl">
              Will you attend?
            </legend>
            <div className="mt-3 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-12">
              <label className="flex cursor-pointer items-center gap-2 text-base sm:text-lg">
                <input
                  type="radio"
                  name="attendance"
                  checked={attendance === 'yes'}
                  onChange={() => setAttendance(attendance === 'yes' ? null : 'yes')}
                  className="accent-forest"
                />
                Yes, I&apos;ll be there! 🥰
              </label>
              <label className="flex cursor-pointer items-center gap-2 text-base sm:text-lg">
                <input
                  type="radio"
                  name="attendance"
                  checked={attendance === 'no'}
                  onChange={() => setAttendance(attendance === 'no' ? null : 'no')}
                  className="accent-forest"
                />
                Sorry, I can&apos;t make it 😥
              </label>
            </div>
          </fieldset>

          <Textarea
            id="guest-message"
            label="Message for the couple"
            placeholder="Write a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={500}
          />

          <div className="mt-5">
            <label htmlFor="signature" className="text-lg text-forest sm:text-xl">
              Signature
            </label>
            <SignatureCanvas
            onBegin={() => setHasSig(true)}
              ref={sigRef}
              penColor="black"
              canvasProps={{
                id: 'signature',
                className: 'mt-2.5 w-full rounded-xl bg-cream',
                style: { width: '100%', height: 200 },
              }}
            />
            <Button
  type="button"
  variant="ghost"
className="mt-2 !w-auto !min-w-0 px-4 py-2 text-sm !bg-[#25523E] text-white disabled:opacity-40 disabled:cursor-not-allowed"    disabled={!hasSig}
  onClick={() => {
    sigRef.current?.clear()
    setHasSig(false)
  }}
>
  Clear Signature
</Button>
          </div>

          {(formError || error) && (
            <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              {formError || error}
            </p>
          )}

          <Button type="submit" className="mt-6" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Card>
    </section>
  )
}

export default AttendanceForm
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/vimeo'

const Popup = ({ setButtonClicked, video, setMenuOpen }) => {
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)

  const handleFormSubmit = async event => {
    event.preventDefault()
    try {
      setStatus('pending')
      setError(null)
      const myForm = event.target
      const formData = new FormData(myForm)
      const res = await fetch('/__apptForm.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
      if (res.status === 200) {
        setTimeout(() => {
          /* If no setTimeout is set, it closes before navigating to the thank you page. That is wonky. */
          setButtonClicked(false)
          setMenuOpen(false)
        }, 500)
        window.location.href = '/thank-you'
      } else {
        setStatus('error')
        setError(`${res.status} ${res.statusText}`)
      }
    } catch (e) {
      setStatus('error')
      setError(`${e}`)
    }
  }
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      // Re-enable scrolling when the popup is closed
      document.body.style.overflow = 'unset'
    }
  }, [])
  return (
    <div
      className={`bg-white fixed inset-x-0 top-0 z-10 overflow-auto min-h-screen  ${video ? '' : ' lg:flex items-center justify-center'} max-h-screen`}
    >
      <button
        type="button"
        onClick={() => {
          setButtonClicked(false)
        }}
        className="absolute z-10 top-2 right-2 border py-1 px-2 hover:bg-tan"
      >
        x
      </button>
      <div className={`${video && 'min-h-screen flex items-center'}`}>
        <div className={`container mx-auto relative ${video ? 'aspect-video' : 'py-20 lg:p-0'}`}>
          {video ? (
            <>
              <ReactPlayer
                url={video}
                width="100%"
                height="100%"
                playing
                playsinline
                className="react-player"
                controls
                onReady={() => setLoading(false)}
                onStart={() => setLoading(false)}
                onBuffer={() => setLoading(true)}
              />
              {loading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="spinner border-8 border-gray border-t-green rounded-full w-32 h-32 animate-spin" />
                </div>
              )}
            </>
          ) : (
            <div>
              <p className="title mb-4">Request Appointment</p>
              <form
                name="schedule-appointment"
                onSubmit={handleFormSubmit}
                className="grid gap-4 w-full max-w-xl mx-auto"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="schedule-appointment" />
                <input type="hidden" name="subject" value="Appointment Request Form Submission" />
                <div className="grid gap-4 lg:grid-cols-2 [&>input]:w-full [&>fieldset]:w-full [&>input]:border-[1px] [&>fieldset]:border-[1px] [&>input]:px-8 [&>fieldset]:px-8 [&>input]:py-5 [&>fieldset]:py-5 [&>input]:rounded-[4px] [&>fieldset]:rounded-[4px] [&>input]:bg-transparent [&>fieldset]:bg-transparent [&>input]:placeholder-black">
                  <input type="text" name="firstName" placeholder="First Name*" required />
                  <input type="text" name="lastName" placeholder="Last Name*" required />
                  <input type="email" name="emailAddress" placeholder="Email Address*" required />
                  <input type="tel" name="phoneNumber" placeholder="Phone*" required />
                </div>
                <textarea
                  name="reasonForAppointment"
                  placeholder="Reason For Appointment*"
                  required
                  className="w-full border-[1px] px-8 py-5 rounded-[4px] bg-transparent placeholder-black"
                />
                <div className="max-w-[28rem] mx-auto mt-5 lg:mt-12">
                  <button
                    type="submit"
                    className="hover:bg-green hover:text-white uppercase text-[1.125rem] lg:rfs:text-[1.44169rem] border-2 rfs:px-[1.83rem] rfs:py-[1.75rem] text-center"
                  >
                    Submit
                  </button>
                  {status === 'error' && (
                    <div className="pt-4">
                      <p>There has been an error.</p>
                      {error}
                    </div>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export { Popup }

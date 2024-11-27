import { Button } from './Button'

const ContactForm = () => {
  return (
    <div className="container mx-auto">
      <p className="subtitle mb-4">Contact Us!</p>
      <form
        name="contact-us"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="grid gap-4 lg:max-w-[60rem]"
        action="/thank-you"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact-us" />
        <input type="hidden" name="subject" value="General Contact Form Submission" />
        <div className="grid gap-4 lg:grid-cols-2 [&>input]:w-full [&>input]:border-[1px] [&>input]:px-8 [&>input]:py-5 [&>input]:rounded-[4px]  [&>input]:bg-transparent [&>input]:placeholder-black">
          <input type="text" name="firstName" placeholder="First Name*" required />
          <input type="text" name="lastName" placeholder="Last Name*" required />
          <input type="email" name="emailAddress" placeholder="Email Address*" required />
          <input type="tel" name="phoneNumber" placeholder="Phone*" required />
        </div>
        <textarea
          name="message"
          placeholder="Message*"
          required
          className="w-full border-[1px] px-8 py-5 rounded-[4px] bg-transparent placeholder-black"
        />
        <div className=" max-w-[28rem] mx-auto mt-5 lg:mt-12">
          <Button type="submit" text="Submit" className="hover:bg-green hover:text-white" />
        </div>
      </form>
    </div>
  )
}
export { ContactForm }

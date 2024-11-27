import { Button } from './Button'

const OnlinePayments = ({ onlinePaymentsData }) => {
  return (
    <div className="bg-tan text-green rfs:py-[20rem] lg:rfs:py-[6.5625rem] lg:flex items-center">
      <div className="container mx-auto text-center lg:max-w-[40vw]">
        <p className="title !leading-snug mb-6">{onlinePaymentsData.title}</p>

        <Button
          text={onlinePaymentsData.link.title}
          href={onlinePaymentsData.link.url}
          target={onlinePaymentsData.link.target}
          className="block border-green hover:bg-green hover:text-white"
        />
      </div>
    </div>
  )
}
export { OnlinePayments }

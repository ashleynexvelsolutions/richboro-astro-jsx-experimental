import { Button } from './Button'
import { transformURLs } from '../utils/transformURLs'

const Sleep = ({ sleepData }) => {
  return (
    <div className="rfs:py-[24rem] lg:rfs:pt-[12.8125rem] lg:rfs:pb-[7.9375rem] text-green bg-tan">
      <div className="container mx-auto lg:max-w-[39.75rem]">
        <p className="rfs:mb-[4.4375rem] uppercase rfs:text-[6.5rem] lg:rfs:text-[2.48331rem] leading-tight">
          {sleepData.title}
        </p>
        <div
          className="font-secondary font-light text-xl lg:rfs:text-[1.6rem] rfs:mb-[4.4375rem]"
          dangerouslySetInnerHTML={{ __html: transformURLs(sleepData.text) }}
        />
        <Button
          text={sleepData.link.title}
          href={transformURLs(sleepData.link.url)}
          className="block tracking-wider hover:bg-green hover:text-white"
        />
      </div>
    </div>
  )
}
export { Sleep }

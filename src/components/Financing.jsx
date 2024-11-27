import { Image } from '@unpic/react'
import { Button } from './Button'

const Financing = ({ financingData }) => {
  return (
    <div className="bg-green text-tan rfs:py-[20rem] lg:rfs:py-[6.5625rem]">
      <div className="container mx-auto text-center lg:max-w-[40vw]">
        <p className="title !leading-snug">{financingData.title}</p>
        <Image
          src={`/.netlify/images?url=${financingData.image.sourceUrl}`}
          width={financingData.image.mediaDetails.width}
          height={financingData.image.mediaDetails.height}
          alt={financingData.altText}
          className="mt-2 mb-6 mx-auto"
        />
        <Button
          text={financingData.link.title}
          href={financingData.link.url}
          target={financingData.link.target}
          className="block border-white hover:bg-white hover:text-green"
        />
      </div>
    </div>
  )
}
export { Financing }

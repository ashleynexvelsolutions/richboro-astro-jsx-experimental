import { Image } from '@unpic/react'
import { Button } from './Button'
import { transformURLs } from '../utils/transformURLs'

const YoullLoveItHere = ({ data }) => {
  return (
    <div className="relative text-tan">
      <div
        style={{
          backgroundImage: `url(/.netlify/images?url=${data.backgroundImage.sourceUrl})`,
        }}
        className="absolute w-full h-full bg-center bg-cover"
      />
      {/* Image is placed here so it's above the content by default (on mobile) */}
      <Image
        src={`/.netlify/images?url=${data.image.sourceUrl}`}
        width={data.image.mediaDetails.width}
        height={data.image.mediaDetails.height}
        alt={data.altText}
        objectFit="contain"
        className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:!w-[60%] lg:max-w-[96rem]"
      />
      {/* lg:grid-cols-2 only applies to large screens, so by default (on mobile) the content is below the image */}
      <div className="relative lg:grid lg:grid-cols-[33%_53%] lg:gap-x-[12%] lg:items-center lg:container lg:pt-0 lg:mx-auto">
        <div className="container mx-auto lg:col-start-1 lg:row-start-1 rfs:pt-[11rem] rfs:pb-[15rem]">
          <p className="title !leading-snug rfs:mb-[1.62rem]">{data.title}</p>
          <div
            className="font-secondary font-light !text-[1.25rem] lg:rfs:!text-[1.6rem] rfs:mb-[4.06rem]"
            dangerouslySetInnerHTML={{ __html: transformURLs(data.text) }}
          />
          <Button
            text={data.link.title}
            href={transformURLs(data.link.url)}
            className="text-white border-white hover:bg-white hover:text-green block"
          />
        </div>
        {/* This empty div is necessary to maintain the grid layout */}
        <div className="hidden lg:block lg:col-start-2 lg:row-start-1" />
      </div>
    </div>
  )
}

export { YoullLoveItHere }

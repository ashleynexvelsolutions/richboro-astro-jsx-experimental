import React from 'react'
import { Image } from '@unpic/react'
import { Button } from './Button'
import { transformURLs } from '../utils/transformURLs'

const ConnectWithUs = ({ connectWithUsData }) => {
  return (
    <div className="bg-tan text-green lg:grid lg:grid-cols-2">
      <Image
        src={`/.netlify/images?url=${connectWithUsData.mapImage.sourceUrl}`}
        width={connectWithUsData.mapImage.mediaDetails.width}
        height={connectWithUsData.mapImage.mediaDetails.height}
        alt={connectWithUsData.altText}
        className="lg:hidden"
      />
      <div
        className="lg:col-start-2 cover bg-center"
        style={{
          backgroundImage: `url(/.netlify/images?url=${connectWithUsData.mapImage.sourceUrl})`,
        }}
      />
      <div className="container mx-auto rfs:pt-[11.47rem] rfs:pb-[12.11rem] lg:col-start-1 lg:row-start-1">
        <div className="lg:rfs:max-w-[18vw] lg:mx-auto">
          <p className="title !capitalize w-[33vw] lg:max-w-[15vw] !leading-snug lg:!leading-tight rfs:mb-[3.3125rem] lg:rfs:mb-[2rem]">
            {connectWithUsData.title}
          </p>
          <div
            className="font-secondary font-light text-[1.25rem] lg:rfs:text-[1.6rem] rfs:mb-[3.51rem] [&_a]:text-gold [&_a]:font-bold"
            dangerouslySetInnerHTML={{ __html: transformURLs(connectWithUsData.text) }}
          />
          <div className="lg:text-center">
            <Button
              text={connectWithUsData.buttonText}
              className="text-green border-green block lg:inline-block w-full lg:w-auto hover:bg-green hover:text-white mb-2"
            />
            <br className="hidden lg:block" />
            {connectWithUsData?.links?.length > 0 &&
              connectWithUsData.links.map((link, i) => {
                const { url = '', title = '' } = link.link || {}
                return (
                  <React.Fragment key={`connect-${i}-${title}`}>
                    <Button
                      href={transformURLs(url)}
                      text={title}
                      className="text-green border-green block lg:inline-block hover:bg-green hover:text-white mb-2"
                    />
                    <br className="hidden lg:block" />
                  </React.Fragment>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
export { ConnectWithUs }

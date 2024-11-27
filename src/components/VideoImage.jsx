import React, { useState } from 'react'
import { Image } from '@unpic/react'
import { ReactSVG } from 'react-svg'
import { Popup } from './Popup'

const VideoImage = ({ video, image, alt, playButton }) => {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setClicked(true)
        }}
        className="relative block w-full min-h-[15rem] rfs:py-[28rem] lg:rfs:py-[14.875rem] [&_path]:hover:stroke-white overflow-hidden"
      >
        <Image
          alt={alt}
          src={`/.netlify/images?url=${image.sourceUrl}`}
          width={image.mediaDetails.width}
          height={image.mediaDetails.height}
          className="absolute inset-0 min-w-full min-h-full w-auto h-auto object-cover"
        />
        <ReactSVG
          preserveAspectRatio="none"
          src={`/.netlify/images?url=${playButton.sourceUrl}`}
          width={playButton.mediaDetails.width}
          height={playButton.mediaDetails.height}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [&_svg]:!max-w-[7rem] lg:[&_svg]:!max-w-[18vw] [&_svg]:h-auto lg:top-1/4 lg:left-1/4 lg:-translate-x-1/4 lg:-translate-y-1/4"
        />
      </button>
      {clicked && <Popup setButtonClicked={setClicked} video={video} />}
    </>
  )
}
export { VideoImage }

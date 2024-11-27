import React, { useState } from 'react'
import { Popup } from './Popup'

const Button = ({ text, href, className, target, video, type }) => {
  // eslint-disable-next-line no-unused-vars
  const [buttonClicked, setButtonClicked] = useState(false)

  return (
    <>
      {href ? (
        <a
          aria-label={text}
          className={`${className} uppercase text-[1.125rem] lg:rfs:text-[1.44169rem] border-2 rfs:px-[1.83rem] rfs:py-[1.75rem] text-center`}
          href={href}
          target={target}
        >
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </a>
      ) : (
        <>
          {type === 'submit' ? (
            <button
              type="submit"
              className={`${className} uppercase text-[1.125rem] lg:rfs:text-[1.44169rem] border-2 rfs:px-[1.83rem] rfs:py-[1.75rem] text-center`}
            >
              {text}
            </button>
          ) : (
            <button
              type="button"
              className={`${className} uppercase text-[1.125rem] lg:rfs:text-[1.44169rem] border-2 rfs:px-[1.83rem] rfs:py-[1.75rem] text-center`}
              onClick={() => setButtonClicked(true)}
            >
              {text}
            </button>
          )}
        </>
      )}
      {buttonClicked && <Popup video={video} setButtonClicked={setButtonClicked} />}
    </>
  )
}
export { Button }

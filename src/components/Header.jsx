import React, { useState } from 'react'
import { Image } from '@unpic/react'
import { ReactSVG } from 'react-svg'
import { Popup } from './Popup.jsx'

const Header = ({ headerData }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [apptButtonClicked, setApptButtonClicked] = useState(false)
  const [topLevelClicked, setTopLevelClicked] = useState(false)

  function handleMenuOpen() {
    if (menuOpen === false) {
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
      setTopLevelClicked(false)
    }
  }
  return (
    <>
      <header className="absolute w-full z-10 left-1/2 -translate-x-1/2 rfs:pt-[5.1875rem] rfs:pb-[5.1875rem] lg:pb-0 bg-black lg:bg-transparent">
        <div className="container mx-auto">
          {/* Header Mobile */}
          <div className="grid grid-cols-[auto_auto_auto] items-center lg:hidden">
            <button
              aria-label="open mobile menu"
              type="button"
              onClick={() => handleMenuOpen()}
              className="w-[4rem] px-[1.125rem]"
            >
              <hr className="bg-white h-1 mb-[0.375rem]" />
              <hr className="bg-white h-1 mb-[0.375rem]" />
              <hr className="bg-white h-1" />
            </button>
            <a aria-label="go home" href="/" className="lg:hidden ">
              <Image
                className="min-w-[13.3125rem]"
                src={`/.netlify/images?url=${headerData.acfOptionsCommonItems.commonItems.logoMobile.sourceUrl}`}
                width={headerData.acfOptionsCommonItems.commonItems.logoMobile.mediaDetails.width}
                height={headerData.acfOptionsCommonItems.commonItems.logoMobile.mediaDetails.height}
                alt=""
              />
            </a>

            <div className="flex justify-end">
              <a
                href={`tel:${headerData.acfOptionsCommonItems.commonItems.phoneNumber}`}
                className="inline-block"
                aria-label="call now"
              >
                <ReactSVG
                  src={`/.netlify/images?url=${headerData.acfOptionsCommonItems.commonItems.phoneIcon.sourceUrl}`}
                  width={headerData.acfOptionsCommonItems.commonItems.phoneIcon.mediaDetails.width}
                  height={
                    headerData.acfOptionsCommonItems.commonItems.phoneIcon.mediaDetails.height
                  }
                  alt=""
                  className="[&_svg]:!max-w-[1.75rem] h-auto"
                />
              </a>
            </div>
          </div>
          {/* End Header Mobile */}
          {/* Header Desktop */}
          <div className="hidden lg:grid text-white grid-cols-[auto_auto]">
            <a aria-label="go home" href="/" className="hidden lg:block">
              <Image
                src={`/.netlify/images?url=${headerData.acfOptionsCommonItems.commonItems.logoDesktop.sourceUrl}`}
                width={headerData.acfOptionsCommonItems.commonItems.logoDesktop.mediaDetails.width}
                height={
                  headerData.acfOptionsCommonItems.commonItems.logoDesktop.mediaDetails.height
                }
                alt=""
                className="!max-w-[22vw]"
              />
            </a>
            <div className="flex justify-end">
              <div className="grid grid-cols-[min-content_min-content] gap-x-9">
                <div className="flex justify-end">
                  <a
                    href={`tel:${headerData.acfOptionsCommonItems.commonItems.phoneNumber}`}
                    className="flex min-w-[11.25rem] items-center gap-x-2 hover:text-gold [&_path]:hover:stroke-gold"
                  >
                    <ReactSVG
                      src={`/.netlify/images?url=${headerData.acfOptionsCommonItems.commonItems.phoneIcon.sourceUrl}`}
                      width={
                        headerData.acfOptionsCommonItems.commonItems.phoneIcon.mediaDetails.width
                      }
                      height={
                        headerData.acfOptionsCommonItems.commonItems.phoneIcon.mediaDetails.height
                      }
                      className="[&_svg]:w-[2rem]"
                    />

                    <p className="text-nowrap rfs:text-[2.55075rem] tracking-widest">
                      {headerData.acfOptionsCommonItems.commonItems.phoneNumber}
                    </p>
                  </a>
                </div>

                <div className="border border-white flex">
                  <button
                    type="button"
                    onClick={() => setApptButtonClicked(true)}
                    className="text-[1.11669rem] text-nowrap border-r border-white rfs:px-[1.33rem] py-[1rem] xl:rfs:py-[2.05rem] uppercase hover:bg-gold"
                  >
                    {headerData.acfOptionsCommonItems.commonItems.headerButtonText}
                  </button>
                  <button
                    aria-label="open mobile menu"
                    type="button"
                    onClick={() => handleMenuOpen()}
                    className="w-[4rem] px-[1.125rem] hover:bg-gold"
                  >
                    <hr className="bg-white h-1 mb-[0.375rem]" />
                    <hr className="bg-white h-1 mb-[0.375rem]" />
                    <hr className="bg-white h-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`${menuOpen ? `translate-x-0` : `-translate-x-full`} bg-green text-white fixed inset-x-0 top-0 z-10 overflow-auto min-h-screen grid items-center justify-center max-h-screen uppercase rfs:text-[3.125rem] text-center transition-transform duration-300`}
      >
        <button
          type="button"
          onClick={() => {
            handleMenuOpen()
          }}
          className="absolute z-10 top-2 right-2 text-2xl lg:rfs:text-[3.125rem] hover:text-gold"
        >
          x
        </button>
        <div className="grid gap-y-2 py-12">
          {headerData.menuItems.nodes?.map((topLevel, i) => {
            return (
              <div key={`header-${i}`}>
                {topLevel.childItems.nodes.length === 0 ? (
                  <a
                    href={topLevel.path}
                    className="inline-flex items-center gap-x-2 pb-1 border-b-2 border-b-transparent hover:text-gold hover:border-b-gold"
                  >
                    <span>{topLevel.label}</span>
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      setTopLevelClicked(topLevel.label)
                    }}
                    aria-label="go to the next level"
                    type="button"
                    className="inline-flex items-center gap-x-2 pb-1 border-b-2 border-b-transparent hover:text-gold hover:border-b-gold uppercase"
                  >
                    <span>{topLevel.label}</span>

                    <div className="border-t-transparent border-r-2 border-b-2 border-l-transparent border-r-inherit h-2 w-2 transform -rotate-45" />
                  </button>
                )}

                {topLevel.childItems.nodes.length !== 0 && (
                  <div
                    className={`${topLevelClicked === topLevel.label ? `translate-x-0` : `-translate-x-full`} bg-green text-white fixed inset-x-0 top-0 z-10 overflow-auto min-h-screen grid items-center justify-center max-h-screen uppercase rfs:text-[3.125rem] text-center transition-transform duration-300`}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setTopLevelClicked(false)
                      }}
                      className="absolute z-10 top-2 left-2 text-2xl lg:rfs:text-[3.125rem] hover:text-gold flex gap-x-2 items-center"
                    >
                      <div className="border-b-transparent border-l-2 border-t-2 border-r-transparent border-l-inherit h-2 w-2 transform -rotate-45" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        handleMenuOpen()
                      }}
                      className="absolute z-10 top-2 right-2 text-2xl lg:rfs:text-[3.125rem] hover:text-gold"
                    >
                      x
                    </button>
                    <div className="grid gap-y-2 py-12">
                      <div className="text-sm pb-2 border-b-2 border-b-gold">
                        <a href="/">Home</a> / <a href={topLevel.path}>{topLevel.label}</a>
                      </div>
                      {topLevel.childItems.nodes?.map((secondLevel, i2) => {
                        return (
                          <a key={`header2-${i2}`} href={secondLevel.path}>
                            {secondLevel.label}
                          </a>
                        )
                      })}
                      <div className="grid gap-y-4 justify-center">
                        <div className="flex justify-center">
                          <a
                            href={`tel:${headerData.acfOptionsCommonItems.commonItems.phoneNumber}`}
                            className="flex min-w-[11.25rem] items-center  gap-x-2 hover:text-gold [&_path]:hover:stroke-gold"
                          >
                            <ReactSVG
                              src={`/.netlify/images?url=${headerData.acfOptionsCommonItems.commonItems.phoneIcon.sourceUrl}`}
                              width={
                                headerData.acfOptionsCommonItems.commonItems.phoneIcon.mediaDetails
                                  .width
                              }
                              height={
                                headerData.acfOptionsCommonItems.commonItems.phoneIcon.mediaDetails
                                  .height
                              }
                              className="[&_svg]:w-[2rem]"
                            />

                            <p className="text-nowrap rfs:text-[4rem] lg:rfs:text-[2.55075rem] tracking-widest">
                              {headerData.acfOptionsCommonItems.commonItems.phoneNumber}
                            </p>
                          </a>
                        </div>

                        <button
                          type="button"
                          onClick={() => setApptButtonClicked(true)}
                          className="border border-white rfs:text-[1.11669rem] text-nowrap rfs:px-[3rem] lg:rfs:px-[1.33rem] py-[1rem] xl:rfs:py-[2.05rem] uppercase hover:bg-gold tracking-widest"
                        >
                          {headerData.acfOptionsCommonItems.commonItems.headerButtonText}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
          <div className="grid gap-y-4 justify-center">
            <div className="flex justify-center">
              <a
                href={`tel:${headerData.acfOptionsCommonItems.commonItems.phoneNumber}`}
                className="flex min-w-[11.25rem] items-center  gap-x-2 hover:text-gold [&_path]:hover:stroke-gold"
              >
                <ReactSVG
                  src={`/.netlify/images?url=${headerData.acfOptionsCommonItems.commonItems.phoneIcon.sourceUrl}`}
                  width={headerData.acfOptionsCommonItems.commonItems.phoneIcon.mediaDetails.width}
                  height={
                    headerData.acfOptionsCommonItems.commonItems.phoneIcon.mediaDetails.height
                  }
                  className="[&_svg]:w-[2rem]"
                />

                <p className="text-nowrap rfs:text-[4rem] lg:rfs:text-[2.55075rem] tracking-widest">
                  {headerData.acfOptionsCommonItems.commonItems.phoneNumber}
                </p>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setApptButtonClicked(true)}
              className="border border-white rfs:text-[1.11669rem] text-nowrap rfs:px-[3rem] lg:rfs:px-[1.33rem] py-[1rem] xl:rfs:py-[2.05rem] uppercase hover:bg-gold tracking-widest"
            >
              {headerData.acfOptionsCommonItems.commonItems.headerButtonText}{' '}
            </button>
          </div>
        </div>
      </div>
      {apptButtonClicked && (
        <Popup setButtonClicked={setApptButtonClicked} setMenuOpen={setMenuOpen} />
      )}
    </>
  )
}
export { Header }

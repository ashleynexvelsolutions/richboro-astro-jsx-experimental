import { Image } from '@unpic/react'

const Footer = ({ footerData }) => {
  return (
    <footer className="text-tan bg-black-dark">
      <div className="container mx-auto rfs:py-[7.375rem] !text-base lg:!text-xl lg:grid lg:grid-cols-[auto_auto_auto] lg:justify-between lg:items-center">
        <div className="lg:col-start-2 lg:row-start-1">
          <a aria-label="Home link" href="/">
            <Image
              className="lg:hidden"
              src={`/.netlify/images?url=${footerData.logoMobile.sourceUrl}`}
              width={footerData.logoMobile.mediaDetails.width}
              height={footerData.logoMobile.mediaDetails.height}
              alt=""
            />

            <Image
              className="hidden lg:block"
              src={`/.netlify/images?url=${footerData.logoDesktop.sourceUrl}`}
              width={footerData.logoDesktop.mediaDetails.width}
              height={footerData.logoDesktop.mediaDetails.height}
              alt=""
            />
          </a>
          <div
            className="rfs:mt-[3.75rem] mb-[1.9375rem] lg:mb-0"
            dangerouslySetInnerHTML={{ __html: footerData.footer.location }}
          />
        </div>
        <div className="flex justify-center gap-x-3 mx-auto mb-[2.125rem] lg:mb-0 lg:col-start-1 lg:row-start-1">
          {footerData.footer.socialMedia?.map((social, i) => {
            return (
              <a
                aria-label={social.socialMediaIcon.sourceUrl}
                key={`footer-${i}`}
                href={social.socialMediaLink.url}
                target={social.socialMediaLink.target}
              >
                <Image
                  src={`/.netlify/images?url=${social.socialMediaIcon.sourceUrl}`}
                  width={social.socialMediaIcon.mediaDetails.width}
                  height={social.socialMediaIcon.mediaDetails.height}
                  alt=""
                />
              </a>
            )
          })}
        </div>
        <hr className="text-white lg:hidden" />
        <div className="flex justify-center mt-[2.625rem] lg:mt-0 lg:col-start-3 lg:row-start-1">
          <a
            aria-label={footerData.footer.nexvelLink.url}
            href={footerData.footer.nexvelLink.url}
            target={footerData.footer.nexvelLink.target}
            className="min-w-[11.0625rem]"
          >
            <Image
              src={`/.netlify/images?url=${footerData.footer.nexvelLogo.sourceUrl}`}
              width={footerData.footer.nexvelLogo.mediaDetails.width}
              height={footerData.footer.nexvelLogo.mediaDetails.height}
              alt="Website designed by Nexvel Solutions"
              className="w-full"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
export { Footer }

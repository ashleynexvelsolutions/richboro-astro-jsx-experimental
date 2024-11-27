import { transformURLs } from '../utils/transformURLs'

const OurServices = ({ ourServicesData }) => {
  return (
    <div className="bg-green text-tan rfs:py-[24rem] lg:rfs:pt-[12.8125rem] lg:rfs:pb-[7.9375rem]">
      <div className="container mx-auto lg:max-w-[41rem]">
        <p className="rfs:mb-[4.4375rem] uppercase rfs:text-[6.5rem] lg:rfs:text-[2.48331rem] leading-tight">
          {ourServicesData.title}
        </p>
        <div className="lg:mx-[7%]">
          {ourServicesData.services?.map((service, i) => {
            return (
              <div key={`our-services-${i}`}>
                <a
                  className="uppercase font-tertiary text-lg lg:rfs:text-[1.91669rem] tracking-widest text-white ml-2 my-4 lg:rfs:ml-7 block leading-none hover:text-tan"
                  href={transformURLs(service.link.url)}
                >
                  {service.link.title}
                </a>
                <hr />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export { OurServices }

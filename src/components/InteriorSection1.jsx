import { Image } from "@unpic/react";
import { transformURLs } from "../utils/transformURLs";

const InteriorSection1 = ({ pageData }) => {
  return (
    <div
      className={`container mx-auto rfs:pt-[7.5625rem] rfs:pb-[13rem] grid ${
        pageData.contentSection1.image !== null &&
        `lg:grid-cols-[41%_53%] lg:gap-x-[6%]`
      } `}
    >
      <div
        className={`lg:row-start-1 ${
          pageData.contentSection1.image !== null
            ? `lg:col-start-2`
            : `lg:col-start-1`
        } `}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: transformURLs(pageData.contentSection1.breadcrumbs),
          }}
          className="font-secondary [&_.fbc-items]:flex [&_.fbc-items]:gap-x-1 font-semibold rfs:text-[1.75rem] rfs:mb-[5rem] lg:rfs:mb-[3.5rem]"
        />
        <div
          dangerouslySetInnerHTML={{
            __html: pageData.contentSection1.headings,
          }}
        />
        <div className="w-1/2 lg:w-1/3 h-[0.3125rem] bg-green mb-4" />
        <div
          dangerouslySetInnerHTML={{
            __html: transformURLs(pageData.contentSection1.content),
          }}
          className="[&_p]:mb-3"
        />
      </div>
      {pageData.contentSection1.image !== null && (
        <div className="lg:col-start-1 lg:row-start-1">
          <div className="relative pl-1 lg:pl-4 mt-[2.125rem] lg:mt-0 ">
            <div
              style={{
                width: `${pageData.contentSection1.image.mediaDetails.width}px`,
              }}
              className="absolute top-1 lg:top-4 left-0  max-w-full h-full pr-1 lg:pr-4"
            >
              <div className="bg-green w-full h-full" />
            </div>

            <Image
              src={`/.netlify/images?url=${pageData.contentSection1.image.sourceUrl}`}
              alt={pageData.contentSection1.altText}
              width={pageData.contentSection1.image.mediaDetails.width}
              height={pageData.contentSection1.image.mediaDetails.height}
              className="relative shadow"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export { InteriorSection1 };

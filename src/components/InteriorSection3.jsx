import { Image } from "@unpic/react";
import { transformURLs } from "../utils/transformURLs";

const InteriorSection3 = ({ pageData }) => {
  return (
    <div
      className={`container mx-auto rfs:pb-[13rem] grid ${
        pageData.contentSection3.image !== null &&
        `lg:grid-cols-[41%_53%] lg:gap-x-[6%]`
      } `}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: transformURLs(pageData.contentSection3.content),
        }}
      />
      {pageData.contentSection3.image !== null && (
        <div>
          <div className="relative pr-1 lg:pr-4 mt-[2.125rem] lg:mt-0 ">
            <div
              style={{
                width: `${pageData.contentSection3.image.mediaDetails.width}px`,
              }}
              className="absolute top-1 lg:top-4 left-0  max-w-full h-full pl-1 lg:pl-4"
            >
              <div className="bg-green w-full h-full" />
            </div>

            <Image
              src={`/.netlify/images?url=${pageData.contentSection3.image.sourceUrl}`}
              width={pageData.contentSection3.image.mediaDetails.width}
              height={pageData.contentSection3.image.mediaDetails.height}
              alt={pageData.contentSection3.altText}
              className="relative shadow"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export { InteriorSection3 };

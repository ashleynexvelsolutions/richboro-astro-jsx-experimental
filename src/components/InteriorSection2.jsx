import { transformURLs } from "../utils/transformURLs";
import SvgCheckmark from "../images/Checkmark";

const InteriorSection2 = ({ pageData }) => {
  return (
    <div className="bg-tan">
      <div className="container mx-auto rfs:pt-[6.875rem] rfs:pb-[12.8125rem]">
        <p className="title text-center text-green">
          {pageData.contentSection2.title}
        </p>

        <div className="mx-auto w-3/4 lg:w-1/3 h-[0.3125rem] bg-green mt-4 mb-16 " />
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-[4%]">
          {pageData.contentSection2.items?.map((item, i) => {
            return (
              <div key={`interior-section-2-${i}`}>
                <div className="grid grid-cols-[2.8125rem_auto] gap-x-4 items-center mb-4">
                  <SvgCheckmark />
                  <p className="rfs:!text-[6.5rem] lg:rfs:!text-[3.125rem]">
                    {item.title}
                  </p>
                </div>

                <div
                  className="mb-8"
                  dangerouslySetInnerHTML={{
                    __html: transformURLs(item.content),
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export { InteriorSection2 };

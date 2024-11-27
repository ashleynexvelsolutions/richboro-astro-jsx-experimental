import { Button } from "./Button";
import { VideoImage } from "./VideoImage";

const VideoSection = ({ videoSectionData }) => {
  return (
    <section className="lg:grid lg:grid-cols-[55%_45%]">
      <VideoImage
        video={videoSectionData.buttons[0].videoUrl}
        image={videoSectionData.image}
        alt={videoSectionData.altText}
        playButton={videoSectionData.playButton}
      />

      <div className="bg-tan text-green rfs:py-[11.125rem]">
        <div className="container mx-auto lg:max-w-[31vw]">
          <p className="title !leading-snug">{videoSectionData.title}</p>
          <div
            className="font-light font-secondary rfs:py-[3.125rem] text-lg lg:rfs:text-[1.6rem]"
            dangerouslySetInnerHTML={{ __html: videoSectionData.text }}
          />
          <div className="grid gap-y-3">
            {videoSectionData.buttons.map((button, i) => {
              return (
                <Button
                  key={i}
                  className="block w-full lg:px-10 hover:bg-green hover:text-white"
                  text={button.buttonText}
                  video={button.videoUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export { VideoSection };

import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchVideoSectionData = async () => {
  const query = gql`
    query GetVideoSectionData {
      page(id: 24, idType: DATABASE_ID) {
        video {
          video {
            image {
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
            altText
            playButton {
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
            title
            text
            buttons {
              buttonText
              videoUrl
            }
          }
        }
      }
    }
  `;

  try {
    const data = await request(endpoint, query);
    if (data && data.page && data.page.video) {
      return {
        id: "videoSection", // Static ID for this collection entry
        ...data.page.video.video,
      };
    } else {
      throw new Error("No video section data found");
    }
  } catch (error) {
    console.error("Failed to fetch video section data:", error);
    throw error;
  }
};

const videoSectionCollection = defineCollection({
  loader: async () => {
    try {
      const videoSectionData = await fetchVideoSectionData();
      return [videoSectionData]; // Wrap the single entry in an array
    } catch (error) {
      console.error("Error loading video section data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default videoSectionCollection;

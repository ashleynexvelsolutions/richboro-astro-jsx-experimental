import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchYoullLoveItHereData = async () => {
  const query = gql`
    query YoullLoveItHereData {
      page(id: "24", idType: DATABASE_ID) {
        youllLoveItHere {
          youllLoveItHere {
            image {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
            altText
            backgroundImage {
              sourceUrl
            }
            title
            text
            link {
              title
              url
            }
          }
        }
      }
    }
  `;

  try {
    const data = await request(endpoint, query);
    if (data && data.page && data.page.youllLoveItHere) {
      return {
        id: "youllLoveItHere", // Static ID for this single entry
        ...data.page.youllLoveItHere.youllLoveItHere,
      };
    } else {
      throw new Error("No you'll love it here data found");
    }
  } catch (error) {
    console.error("Failed to fetch you'll love it here data:", error);
    throw error;
  }
};

const youllLoveItHereCollection = defineCollection({
  loader: async () => {
    try {
      const youllLoveItHereData = await fetchYoullLoveItHereData();
      return [youllLoveItHereData]; // Wrap the single entry in an array
    } catch (error) {
      console.error("Error loading you'll love it here data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default youllLoveItHereCollection;

import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchWeLoveFamiliesData = async () => {
  const query = gql`
    query WeLoveFamiliesData {
      page(id: "24", idType: DATABASE_ID) {
        weLoveFamilies {
          weLoveFamilies {
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
    if (data && data.page && data.page.weLoveFamilies) {
      return {
        id: "weLoveFamilies", // Static ID for this collection entry
        ...data.page.weLoveFamilies.weLoveFamilies,
      };
    } else {
      throw new Error("No we love families data found");
    }
  } catch (error) {
    console.error("Failed to fetch we love families data:", error);
    throw error;
  }
};

const weLoveFamiliesCollection = defineCollection({
  loader: async () => {
    try {
      const weLoveFamiliesData = await fetchWeLoveFamiliesData();
      return [weLoveFamiliesData]; // Wrap the single entry in an array
    } catch (error) {
      console.error("Error loading we love families data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default weLoveFamiliesCollection;

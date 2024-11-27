import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchFinancingData = async () => {
  const query = gql`
    query FinancingData {
      page(id: "24", idType: DATABASE_ID) {
        financing {
          financing {
            title
            image {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
            altText
            link {
              title
              url
              target
            }
          }
        }
      }
    }
  `;

  try {
    const data = await request(endpoint, query);
    if (data && data.page && data.page.financing) {
      return {
        id: "financing", // Static ID for single entry
        ...data.page.financing.financing,
      };
    } else {
      throw new Error("No financing data found");
    }
  } catch (error) {
    console.error("Failed to fetch financing data:", error);
    throw error;
  }
};

const financingCollection = defineCollection({
  loader: async () => {
    try {
      const financingData = await fetchFinancingData();
      return [financingData]; // Wrap the data in an array for compatibility
    } catch (error) {
      console.error("Error loading financing data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default financingCollection;

import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchInspiringHealthySmilesData = async () => {
  const query = gql`
    query InspiringHealthySmilesData {
      page(id: "24", idType: DATABASE_ID) {
        inspiringHealthySmiles {
          inspiringHealthySmiles {
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
    if (data && data.page && data.page.inspiringHealthySmiles) {
      return {
        id: "inspiringHealthySmiles", // Static ID for this single entry
        ...data.page.inspiringHealthySmiles.inspiringHealthySmiles,
      };
    } else {
      throw new Error("No inspiring healthy smiles data found");
    }
  } catch (error) {
    console.error("Failed to fetch inspiring healthy smiles data:", error);
    throw error;
  }
};

const inspiringHealthySmilesCollection = defineCollection({
  loader: async () => {
    try {
      const inspiringHealthySmilesData =
        await fetchInspiringHealthySmilesData();
      return [inspiringHealthySmilesData]; // Wrap the single entry in an array
    } catch (error) {
      console.error("Error loading inspiring healthy smiles data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default inspiringHealthySmilesCollection;

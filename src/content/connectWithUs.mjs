import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchConnectWithUsData = async () => {
  const query = gql`
    query ConnectWithUsData {
      page(id: "24", idType: DATABASE_ID) {
        connectWithUs {
          connectWithUs {
            mapImage {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
            altText
            title
            text
            buttonText
            links {
              link {
                title
                url
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await request(endpoint, query);
    if (data && data.page && data.page.connectWithUs) {
      return {
        id: "connectWithUs", // Static ID for this single entry
        ...data.page.connectWithUs.connectWithUs,
      };
    } else {
      throw new Error("No connect with us data found");
    }
  } catch (error) {
    console.error("Failed to fetch connect with us data:", error);
    throw error;
  }
};

const connectWithUsCollection = defineCollection({
  loader: async () => {
    try {
      const connectWithUsData = await fetchConnectWithUsData();
      return [connectWithUsData]; // Wrap the single entry in an array
    } catch (error) {
      console.error("Error loading connect with us data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default connectWithUsCollection;

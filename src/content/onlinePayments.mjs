import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchOnlinePaymentsData = async () => {
  const query = gql`
    query OnlinePaymentsData {
      page(id: "24", idType: DATABASE_ID) {
        onlinePayments {
          onlinePayments {
            title
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
    if (data && data.page && data.page.onlinePayments) {
      return {
        id: "onlinePayments", // Static ID for single entry
        ...data.page.onlinePayments.onlinePayments,
      };
    } else {
      throw new Error("No online payments data found");
    }
  } catch (error) {
    console.error("Failed to fetch online payments data:", error);
    throw error;
  }
};

const onlinePaymentsCollection = defineCollection({
  loader: async () => {
    try {
      const onlinePaymentsData = await fetchOnlinePaymentsData();
      return [onlinePaymentsData]; // Wrap the data in an array for compatibility
    } catch (error) {
      console.error("Error loading online payments data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default onlinePaymentsCollection;

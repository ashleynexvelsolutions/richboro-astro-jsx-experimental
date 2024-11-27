import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchSleepData = async () => {
  const query = gql`
    query SleepData {
      page(id: "24", idType: DATABASE_ID) {
        sleepAirwaySolutions {
          sleepAirwaySolutions {
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
    if (data && data.page && data.page.sleepAirwaySolutions) {
      return {
        id: "sleep", // Static ID since it's a single entry
        ...data.page.sleepAirwaySolutions.sleepAirwaySolutions,
      };
    } else {
      throw new Error("No sleep data found");
    }
  } catch (error) {
    console.error("Failed to fetch sleep data:", error);
    throw error;
  }
};

const sleepCollection = defineCollection({
  loader: async () => {
    try {
      const sleepData = await fetchSleepData();
      return [sleepData]; // Wrap the single entry in an array
    } catch (error) {
      console.error("Error loading sleep data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default sleepCollection;

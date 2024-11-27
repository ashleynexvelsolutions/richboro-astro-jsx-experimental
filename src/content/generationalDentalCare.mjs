import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchGenerationalDentalCareData = async () => {
  const query = gql`
    query GetGenerationalDentalCareData {
      page(id: 24, idType: DATABASE_ID) {
        generationalDentalCare {
          generationalDentalCare {
            image {
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
            altText
            backgroundImage {
              sourceUrl
            }
            title
            text
            subtitle
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
    if (data && data.page && data.page.generationalDentalCare) {
      return {
        id: "generationalDentalCare", // Static ID for this collection entry
        ...data.page.generationalDentalCare.generationalDentalCare,
      };
    } else {
      throw new Error("No generational dental care data found");
    }
  } catch (error) {
    console.error("Failed to fetch generational dental care data:", error);
    throw error;
  }
};

const generationalDentalCareCollection = defineCollection({
  loader: async () => {
    try {
      const generationalDentalCareData =
        await fetchGenerationalDentalCareData();
      return [generationalDentalCareData]; // Wrap the single entry in an array
    } catch (error) {
      console.error("Error loading generational dental care data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default generationalDentalCareCollection;

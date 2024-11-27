import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchOurServicesData = async () => {
  const query = gql`
    query OurServicesData {
      page(id: "24", idType: DATABASE_ID) {
        ourServices {
          ourServices {
            title
            services {
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
    if (
      data &&
      data.page &&
      data.page.ourServices &&
      data.page.ourServices.ourServices
    ) {
      return {
        id: "ourServices", // Static ID since it's a single entry
        ...data.page.ourServices.ourServices,
      };
    } else {
      throw new Error("No our services data found");
    }
  } catch (error) {
    console.error("Failed to fetch our services data:", error);
    throw error;
  }
};

const ourServicesCollection = defineCollection({
  loader: async () => {
    try {
      const ourServicesData = await fetchOurServicesData();
      return [ourServicesData]; // Wrap the single entry in an array
    } catch (error) {
      console.error("Error loading our services data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default ourServicesCollection;

import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchOrganizationsData = async () => {
  const query = gql`
    query OrganizationsData {
      page(id: "24", idType: DATABASE_ID) {
        organizations {
          organizations {
            organizations {
              image {
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
              altText
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
      data.page.organizations &&
      data.page.organizations.organizations
    ) {
      return {
        id: "organizations", // Static ID for this single entry
        ...data.page.organizations.organizations,
      };
    } else {
      throw new Error("No organizations data found");
    }
  } catch (error) {
    console.error("Failed to fetch organizations data:", error);
    throw error;
  }
};

const organizationsCollection = defineCollection({
  loader: async () => {
    try {
      const organizationsData = await fetchOrganizationsData();
      return [organizationsData]; // Wrap the single entry in an array
    } catch (error) {
      console.error("Error loading organizations data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default organizationsCollection;

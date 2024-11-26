import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL; // Ensure this environment variable is set

const fetchHeaderData = async () => {
  const query = gql`
    query HeaderData {
      acfOptionsCommonItems {
        commonItems {
          logoMobile {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
          logoDesktop {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
          phoneIcon {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
          phoneNumber
          headerButtonText
        }
      }
      menuItems(where: { location: PRIMARY_MENU, parentDatabaseId: 0 }) {
        nodes {
          label
          path
          childItems {
            nodes {
              label
              path
            }
          }
        }
      }
    }
  `;

  try {
    const data = await request(endpoint, query);

    // Ensure the query returns data
    if (data) {
      return {
        id: "header", // Add a unique ID for the header
        ...data,
      };
    } else {
      throw new Error("Failed to fetch header data");
    }
  } catch (error) {
    console.error("Error fetching header data:", error);
    throw error;
  }
};

const headerCollection = defineCollection({
  loader: async () => {
    const headerData = await fetchHeaderData();

    // Return the header data in an array format
    return [headerData];
  },
});

export default headerCollection;

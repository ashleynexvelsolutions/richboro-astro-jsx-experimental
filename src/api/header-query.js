import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL; // Ensure this points to your GraphQL endpoint

export async function getHeaderData() {
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

    if (data) {
      return data; // Adjust based on the structure you need to return
    } else {
      throw new Error("Failed to fetch header data");
    }
  } catch (error) {
    console.error("Error fetching header data:", error);
    throw error; // Rethrow the error for better handling by the caller
  }
}

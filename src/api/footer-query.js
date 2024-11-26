import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL; // Replace with your GraphQL endpoint

export async function getFooterData() {
  const query = gql`
    query FooterData {
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
          footer {
            location
            socialMedia {
              socialMediaIcon {
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
              socialMediaLink {
                url
                target
              }
            }
            nexvelLogo {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
            nexvelLink {
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
    if (data && data.acfOptionsCommonItems) {
      return data.acfOptionsCommonItems.commonItems;
    } else {
      throw new Error("No footer data found");
    }
  } catch (error) {
    console.error("Failed to fetch footer data:", error);
    throw error; // Rethrowing the error allows for better error handling by the caller
  }
}

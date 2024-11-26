import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchFooterData = async () => {
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
      return {
        id: "footer", // Static ID since there's likely only one footer
        ...data.acfOptionsCommonItems.commonItems,
      };
    } else {
      throw new Error("No footer data found");
    }
  } catch (error) {
    console.error("Failed to fetch footer data:", error);
    throw error;
  }
};

const footerCollection = defineCollection({
  loader: async () => {
    try {
      const footerData = await fetchFooterData();
      return Array.isArray(footerData) ? footerData : [footerData]; // Wrap in an array if necessary
    } catch (error) {
      console.error("Error loading footer data:", error);
      return {}; // Return an empty object if fetching fails
    }
  },
});

export default footerCollection;

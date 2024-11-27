import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchHeroDefaultData = async () => {
  const query = gql`
    query HeroDefaultData {
      acfOptionsCommonItems {
        commonItems {
          interiorPage {
            heroImageDefault {
              sourceUrl
              mediaDetails {
                height
                width
              }
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
        id: "heroDefault", // Static ID since there's likely only one hero default
        ...data.acfOptionsCommonItems.commonItems.interiorPage.heroImageDefault,
      };
    } else {
      throw new Error("No hero default data found");
    }
  } catch (error) {
    console.error("Failed to fetch hero default data:", error);
    throw error;
  }
};

const heroDefaultCollection = defineCollection({
  loader: async () => {
    try {
      const heroDefaultData = await fetchHeroDefaultData();
      return [heroDefaultData]; // Return as an array since the Content Layer expects entries in an array
    } catch (error) {
      console.error("Error loading hero default data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default heroDefaultCollection;

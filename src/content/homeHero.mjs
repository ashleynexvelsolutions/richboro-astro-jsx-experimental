import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchHomeHeroData = async () => {
  const query = gql`
    query GetHomeHeroData {
      page(id: 24, idType: DATABASE_ID) {
        homeHero {
          homeHero {
            backgroundImageMobile {
              sourceUrl
            }
            backgroundImageDesktop {
              sourceUrl
            }
            title
            subtitle
          }
        }
      }
    }
  `;

  try {
    const data = await request(endpoint, query);
    if (data && data.page && data.page.homeHero) {
      return {
        id: "homeHero", // Static ID for this single entry
        ...data.page.homeHero.homeHero,
      };
    } else {
      throw new Error("No home hero data found");
    }
  } catch (error) {
    console.error("Failed to fetch home hero data:", error);
    throw error;
  }
};

const homeHeroCollection = defineCollection({
  loader: async () => {
    try {
      const homeHeroData = await fetchHomeHeroData();
      return [homeHeroData]; // Wrap the single entry in an array
    } catch (error) {
      console.error("Error loading home hero data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default homeHeroCollection;

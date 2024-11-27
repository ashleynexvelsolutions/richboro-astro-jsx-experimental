import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchTeamPhotoData = async () => {
  const query = gql`
    query GetTeamPhotoData {
      page(id: 24, idType: DATABASE_ID) {
        teamPhoto {
          teamPhoto {
            image {
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
            altText
          }
        }
      }
    }
  `;

  try {
    const data = await request(endpoint, query);
    if (data && data.page && data.page.teamPhoto) {
      return {
        id: "teamPhoto", // Static ID for the single entry
        ...data.page.teamPhoto.teamPhoto,
      };
    } else {
      throw new Error("No team photo data found");
    }
  } catch (error) {
    console.error("Failed to fetch team photo data:", error);
    throw error;
  }
};

const teamPhotoCollection = defineCollection({
  loader: async () => {
    try {
      const teamPhotoData = await fetchTeamPhotoData();
      return [teamPhotoData]; // Wrap the single entry in an array
    } catch (error) {
      console.error("Error loading team photo data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default teamPhotoCollection;

import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchHomeSeoData = async () => {
  const query = gql`
    query GetHomeSeoQuery {
      page(id: 24, idType: DATABASE_ID) {
        seo {
          title
          metaDesc
          opengraphTitle
          opengraphDescription
          opengraphUrl
          opengraphSiteName
          opengraphType
          opengraphImage {
            sourceUrl
          }
          canonical
          twitterTitle
          twitterDescription
          twitterImage {
            sourceUrl
          }
        }
      }
    }
  `;

  try {
    const data = await request(endpoint, query);
    if (data && data.page && data.page.seo) {
      return {
        id: "homeSeo", // Static ID for single-entry collection
        ...data.page.seo,
      };
    } else {
      throw new Error("No home page SEO data found");
    }
  } catch (error) {
    console.error("Failed to fetch home page SEO data:", error);
    throw error;
  }
};

const homeSeoCollection = defineCollection({
  loader: async () => {
    try {
      const homeSeoData = await fetchHomeSeoData();
      return [homeSeoData]; // Wrap the data in an array for compatibility
    } catch (error) {
      console.error("Error loading home SEO data:", error);
      return []; // Return an empty array if fetching fails
    }
  },
});

export default homeSeoCollection;

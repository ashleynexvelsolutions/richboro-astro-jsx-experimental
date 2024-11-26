import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

// Fetch full page data
const fetchPageData = async () => {
  const query = gql`
    query GetPages($after: String) {
      pages(first: 10, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          title
          seo {
            title
            metaDesc
            canonical
          }
          featuredImage {
            node {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          contentSection1 {
            contentSection1 {
              content
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
          faqs {
            faqs {
              title
              text
            }
          }
        }
      }
    }
  `;

  let allPages = [];
  let hasNextPage = true;
  let after = null;

  while (hasNextPage) {
    const variables = { after };
    const data = await request(endpoint, query, variables);
    const { nodes, pageInfo } = data.pages;

    allPages.push(...nodes);
    hasNextPage = pageInfo.hasNextPage;
    after = pageInfo.endCursor;
  }

  return allPages;
};

// Define pages collection
const pagesCollection = defineCollection({
  loader: async () => {
    const pages = await fetchPageData();
    return pages.map((page) => ({
      id: page.id,
      title: page.title,
      seo: page.seo,
      featuredImage: page.featuredImage,
      contentSection1: page.contentSection1,
      faqs: page.faqs,
    }));
  },
});

export default pagesCollection;

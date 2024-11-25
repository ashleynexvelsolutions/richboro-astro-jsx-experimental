import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

const fetchPages = async () => {
  const allPages = [];
  let hasNextPage = true;
  let after = null;

  while (hasNextPage) {
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
            slug
            children {
              nodes {
                id
                slug
                ... on Page {
                  id
                  title
                }
              }
            }
          }
        }
      }
    `;

    const variables = { after };
    const data = await request(endpoint, query, variables);
    const { nodes, pageInfo } = data.pages;

    allPages.push(...nodes);
    hasNextPage = pageInfo.hasNextPage;
    after = pageInfo.endCursor;
  }

  return allPages;
};

const pagesCollection = defineCollection({
  loader: async () => {
    try {
      const pages = await fetchPages();
      return pages.map((page) => ({
        id: page.id,
        title: page.title,
        slug: page.slug,
        children: page.children.nodes.map((child) => ({
          id: child.id,
          title: child.title,
          slug: child.slug,
        })),
      }));
    } catch (error) {
      console.error("Error fetching pages:", error);
      return [];
    }
  },
});

export const collections = {
  pages: pagesCollection,
};

import { defineCollection } from "astro:content";
import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

// Fetch metadata for routes
const fetchPageRoutes = async () => {
  const query = gql`
    query GetPageRoutes($after: String) {
      pages(first: 10, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          uri
          title
          parent {
            node {
              id
            }
          }
          children {
            nodes {
              id
              uri
              ... on Page {
                id
                title
                parent {
                  node {
                    id
                  }
                }
              }
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

// Define routes collection
const routesCollection = defineCollection({
  loader: async () => {
    const routes = await fetchPageRoutes();
    return routes.map((route) => ({
      id: route.id,
      uri: route.uri,
      title: route.title,
      parent: route.parent,
      children: route.children.nodes.map((child) => ({
        id: child.id,
        title: child.title,
        uri: child.uri,
        parent: child.parent,
      })),
    }));
  },
});

export default routesCollection;

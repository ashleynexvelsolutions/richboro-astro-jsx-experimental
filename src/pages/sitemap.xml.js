import { request, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_API_URL;

export async function GET() {
  const query = gql`
    query GetSitemapPages($first: Int, $after: String) {
      pages(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          uri
          modified
        }
      }
    }
  `;

  let hasNextPage = true;
  let after = null;
  let pages = [];

  while (hasNextPage) {
    try {
      const data = await request(endpoint, query, {
        first: 10, // Adjust this value based on your needs
        after,
      });

      pages = [...pages, ...data.pages.nodes];
      hasNextPage = data.pages.pageInfo.hasNextPage;
      after = data.pages.pageInfo.endCursor;
    } catch (error) {
      console.error("Error fetching pages:", error);
      throw error;
    }
  }

  const siteUrl = import.meta.env.METADATA_BASE;

  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  xml += `<url><loc>${siteUrl}</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>`; // Homepage

  /* HEY!!! Only use this function if the current website does not have a trailing slash on its sub pages!!!! So far I have only seen this on Richboro. */
  function removeTrailingSlash(url) {
    return url.endsWith("/") ? url.slice(0, -1) : url;
  }

  pages.forEach((page) => {
    const pageUrl = `${siteUrl}${page.uri}`; // Use the full URI provided by WPGraphQL
    const pageUrlWithoutSlash = removeTrailingSlash(pageUrl);
    const lastMod = new Date(page.modified).toISOString();
    xml += `<url><loc>${pageUrlWithoutSlash}</loc><lastmod>${lastMod}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`;
  });

  xml += "</urlset>";

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

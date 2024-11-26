import { transformURLs } from "./utils/transformURLs";
import { getCollection } from "astro:content";

export async function HeaderFunction() {
  let headerData;
  try {
    const fetchedHeaderData = await getCollection("header");
    headerData = transformURLs(fetchedHeaderData.at(0)); // Adjust for single entry
  } catch (error) {
    console.error("Failed to fetch header data:", error);
    return {
      error: `Failed to fetch header data: ${error.message}`,
    };
  }
  return headerData;
}

export async function FooterFunction() {
  let footerData;
  try {
    const fetchedFooterData = await getCollection("footer");
    footerData = transformURLs(fetchedFooterData.at(0)); // Adjust for single entry
  } catch (error) {
    console.error("Failed to fetch footer data:", error);
    return {
      error: `Failed to fetch footer data: ${error.message}`,
    };
  }
  return footerData;
}

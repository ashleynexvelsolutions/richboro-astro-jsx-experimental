import { getFooterData } from "./api/footer-query";
import { getHeaderData } from "./api/header-query";
import { transformURLs } from "./utils/transformURLs";

export async function FooterFunction() {
  let footerData;
  try {
    const fetchedFooterData = await getFooterData();
    footerData = transformURLs(fetchedFooterData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return footerData;
}

export async function HeaderFunction() {
  let headerData;
  try {
    const fetchedHeaderData = await getHeaderData();
    headerData = transformURLs(fetchedHeaderData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return headerData;
}

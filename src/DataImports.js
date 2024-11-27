import { transformURLs } from "./utils/transformURLs";
import { getCollection } from "astro:content";
import favicon from "./favicon.ico";

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
export function SeoFunction(data) {
  return {
    page: null,
    favicon,
    title: data.title,
    metaDescription: data.metaDesc,
    ogTitle: data.opengraphTitle,
    ogDescription: data.opengraphDescription,
    ogUrl: transformURLs(data.opengraphUrl),
    ogSiteName: data.opengraphSiteName,
    ogType: data.opengraphType,
    ogImage: data.opengraphImage?.sourceUrl,
    canonicalUrl: transformURLs(data.canonical),
    twitterTitle: data.twitterTitle,
    twitterDescription: data.twitterDescription,
    twitterImage: data.twitterImage?.sourceUrl,
  };
}
export async function HeroDefaultFunction() {
  let heroDefault;
  try {
    const fetchedHeroDefaultData = await getCollection("heroDefault");
    heroDefault = transformURLs(fetchedHeroDefaultData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return heroDefault;
}
export async function OurServicesFunction() {
  let ourServicesData;
  try {
    const fetchedOurServicesData = await getCollection("ourServices");
    ourServicesData = transformURLs(fetchedOurServicesData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return ourServicesData;
}
export async function SleepFunction() {
  let sleepData;
  try {
    const fetchedSleepData = await getCollection("sleep");
    sleepData = transformURLs(fetchedSleepData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return sleepData;
}
export async function YoullLoveItHereFunction() {
  let youllLoveItHereData;
  try {
    const fetchedYoullLoveItHereData = await getCollection("youllLoveItHere");
    youllLoveItHereData = transformURLs(fetchedYoullLoveItHereData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return youllLoveItHereData;
}
export async function ConnectWithUsFunction() {
  let connectWithUsData;
  try {
    const fetchedConnectWithUsData = await getCollection("connectWithUs");
    connectWithUsData = transformURLs(fetchedConnectWithUsData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return connectWithUsData;
}
export async function OrganizationsFunction() {
  let organizationsData;
  try {
    const fetchedOrganizationsData = await getCollection("organizations");
    organizationsData = transformURLs(fetchedOrganizationsData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return organizationsData;
}
export async function HomeHeroFunction() {
  let homeHeroData;
  try {
    const fetchedHomeHeroData = await getCollection("homeHero");
    homeHeroData = transformURLs(fetchedHomeHeroData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return homeHeroData;
}
export async function InspiringHealthySmilesFunction() {
  let inspiringHealthySmilesData;
  try {
    const fetchedInspiringHealthySmilesData = await getCollection(
      "inspiringHealthySmiles"
    );
    inspiringHealthySmilesData = transformURLs(
      fetchedInspiringHealthySmilesData
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return inspiringHealthySmilesData;
}
export async function VideoSectionFunction() {
  let videoSectionData;
  try {
    const fetchedVideoSectionData = await getCollection("videoSection");
    videoSectionData = transformURLs(fetchedVideoSectionData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return videoSectionData;
}
export async function WeLoveFamiliesFunction() {
  let weLoveFamiliesData;
  try {
    const fetchedWeLoveFamiliesData = await getCollection("weLoveFamilies");
    weLoveFamiliesData = transformURLs(fetchedWeLoveFamiliesData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return weLoveFamiliesData;
}
export async function GenerationalDentalCareFunction() {
  let generationalDentalCareData;
  try {
    const fetchedGenerationalDentalCareData = await getCollection(
      "generationalDentalCare"
    );
    generationalDentalCareData = transformURLs(
      fetchedGenerationalDentalCareData
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return generationalDentalCareData;
}
export async function TeamPhotoFunction() {
  let teamPhotoData;
  try {
    const fetchedTeamPhotoData = await getCollection("teamPhoto");
    teamPhotoData = transformURLs(fetchedTeamPhotoData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return teamPhotoData;
}
export async function FinancingFunction() {
  let financingData;
  try {
    const fetchedFinancingData = await getCollection("financing");
    financingData = transformURLs(fetchedFinancingData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return financingData;
}
export async function OnlinePaymentsFunction() {
  let onlinePaymentsData;
  try {
    const fetchedOnlinePaymentsData = await getCollection("onlinePayments");
    onlinePaymentsData = transformURLs(fetchedOnlinePaymentsData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return onlinePaymentsData;
}
export async function HomeSeoFunction() {
  let homeSeoData;
  try {
    const fetchedHomeSeoData = await getCollection("homeSeo");
    homeSeoData = transformURLs(fetchedHomeSeoData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      error: `Failed to fetch data: ${error.message}`,
    };
  }
  return homeSeoData;
}

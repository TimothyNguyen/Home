import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      title,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      secondaryProfileImage {alt, "image": asset->url},
      shortBio,
      location,
      "locationLink": locationLink,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`,
    {},
    { cache: "no-store" }
  );
}

export async function getGridItems() {
  return client.fetch(
    groq`*[_type == "gridItem"]{
      layout,
      type,
      title,
      icon,
      username,
      description,
      color,
      buttonTitle,
      buttonLink,
      buttonSecondaryText,
      promotion,
      price,
      oldPrice,
      stars,
      "imageUrl": image.asset->url
    }`,
    {},
    { cache: "no-store" }
  );
}

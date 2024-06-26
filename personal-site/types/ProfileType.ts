// types/index.ts

import { PortableTextBlock } from "sanity";
import { TimelineItemType } from "./TimelineItemType";

export type ProfileType = {
  _id: string,
  title : string,
  fullName: string,
  headline: string,
  profileImage: {
    alt: string,
    image: string
  },
  secondaryProfileImage: {
    alt: string,
    image: string
  },
  shortBio: string,
  email: string,
  fullBio: PortableTextBlock[],
  location: string,
  locationLink: string,
  resumeURL: string,
  socialLinks: string[],
  skills: string[],
  codingLanguagesFrameworks: string[],
  codingInfrastructureTools: string[],
  timeline: any
};
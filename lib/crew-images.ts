// File: lib/crew-images.ts
import { StaticImageData } from "next/image";

// ---------------------------------------------------------------------------
// 1. IMPORT PRIVATE CREW PHOTOS
// ---------------------------------------------------------------------------
// Leadership
import presidentPic from "@/asset/crew/president.png";
import vpPic from "@/asset/crew/vp.jpeg";
import secretaryPic from "@/asset/crew/secretary.png";
import viceSecretaryPic from "@/asset/crew/vice-secretary.png";

// Tech Leads
import tech1Pic from "@/asset/crew/tech-1.jpg";
import tech2Pic from "@/asset/crew/tech-2.png";

// Design Leads
import design1Pic from "@/asset/crew/design-1.png";
import design2Pic from "@/asset/crew/design-2.jpeg";

// Photography Leads
import photo1Pic from "@/asset/crew/photo-1.png";
import photo2Pic from "@/asset/crew/photo-2.png";

// Marketing Leads
import marketing1Pic from "@/asset/crew/marketing-1.png";
import marketing2Pic from "@/asset/crew/marketing-2.png";

// Social Media Leads
import social1Pic from "@/asset/crew/social-1.png";
import social2Pic from "@/asset/crew/social-2.jpeg";

// ---------------------------------------------------------------------------
// 2. MAP MEMBER IDs TO THEIR IMPORTED PHOTOS
// ---------------------------------------------------------------------------
export const crewPhotos: Record<string, StaticImageData> = {
  "president": presidentPic,
  "vice-president": vpPic,
  "secretary": secretaryPic,
  "vice-secretary": viceSecretaryPic,

  "tech-lead-1": tech1Pic,
  "tech-lead-2": tech2Pic,

  "design-lead-1": design1Pic,
  "design-lead-2": design2Pic,

  "photo-lead-1": photo1Pic,
  "photo-lead-2": photo2Pic,

  "marketing-lead-1": marketing1Pic,
  "marketing-lead-2": marketing2Pic,

  "social-lead-1": social1Pic,
  "social-lead-2": social2Pic,
};

/**
 * Returns the private bundled image for a member, or undefined (fallback to silhouette)
 */
export function getCrewPhoto(memberId: string): StaticImageData | undefined {
  return crewPhotos[memberId];
}
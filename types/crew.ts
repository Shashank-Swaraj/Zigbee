/**
 * ZIGBEE CREW DATA CONTRACT
 * Look, if we don't type-check this stuff properly, someone is going to put a typo
 * in the Faculty's name or pass null for an image and the entire site will crash 
 * right when that HoD opens it.
 * 
 * Here is the strict blueprint for everyone stuck to the lab corkboard.
 */

/**
 * 1. Standard Polaroid Member
 * Literally just a polaroid photo stuck to the board with scotch tape.
 * Used for all Leads.
 */
export interface PolaroidMember {
  id: string;           
  name: string;         // Name (e.g. "Aarav Sharma")
  role: string;         // Their title
  photoUrl?: string;    // Picture path. If missing, we show the blank grey avatar
  linkedinUrl?: string; // So recruiters can find them (or for the "Say hi" button)
}

/**
 * 2. Team Categories under "TEAM LEADS"
 * Please do NOT invent new departments at 3 AM without telling the rest of us.
 * Only these 5 exist on the board:
 */
export type TeamCategoryKey = 
  | "TECHNICAL" 
  | "DESIGN" 
  | "PHOTOGRAPHY" 
  | "MARKETING" 
  | "SOCIAL_MEDIA";

/**
 * This represents each of the 5 little team boxes in the middle row.
 * Each box has an icon, a category title, and 2 poor souls leading that team.
 */
export interface TeamPod {
  id: string;
  key: TeamCategoryKey;
  title: string;        // The uppercase title: "TECHNICAL", "DESIGN", etc.
  iconType: "code" | "pencil" | "camera" | "megaphone" | "heart"; // Which Lucide icon to render
  members: PolaroidMember[]; // The 2 leads running this specific pod
}

/**
 * 3. Faculty Part
 * These cards are wider and have their official academic department details.
 */
export interface FacultyAdvisor {
  id: string;
  name: string;         // "Dr. Name Surname" or "Prof. Name Surname"
  role: string;         // Almost always "Faculty Advisor"
  department: string;   // "Department of Computer Science & Engineering (IoT)"
  university: string;   // "Jain (Deemed-to-be University)"
  photoUrl?: string;    // Formal faculty portrait
  linkedinUrl?: string;
}

/**
 * 4. The Master Roster
 * The entire wall in one single object.
 * Leadership on top, teams in the middle, faculty at the bottom.
 */
export interface CrewRoster {
  leadership: PolaroidMember[];
  teams: TeamPod[];
  faculty: FacultyAdvisor[];
}

/**
 * 5. The API Response Envelope
 */
export interface CrewApiResponse {
  success: boolean;     // Did the server actually  respond or did something catchfire?
  data: CrewRoster;     // The actual people on the wall
  meta: {
    totalMembers: number;  // Total count so we don't have to calculate .length on 3 arrays
    timestamp: string;     // ISO timestamp so we know if this is fresh or cached from yesterday
    version: string;       // Schema version (v1.0 for now until someone decides to redesign everything again)
  };
}
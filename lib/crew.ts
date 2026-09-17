// File: lib/crew.ts
import { crewData } from "@/data/crew";
import { 
  CrewRoster, 
  PolaroidMember, 
  TeamPod, 
  FacultyAdvisor, 
  CrewApiResponse 
} from "@/types/crew";

/**
 * ZIGBEE CREW DATA SERVICE
 * ---------------------------------------------------------------------------
 * Clean data access layer. All functions return defensive copies so
 * no accidental mutation can mess up the master roster in memory.
 */

export async function getCrewRoster(): Promise<CrewRoster> {
  return {
    leadership: [...crewData.leadership],
    teams: crewData.teams.map((pod) => ({
      ...pod,
      members: [...pod.members],
    })),
    faculty: [...crewData.faculty],
  };
}

export async function getLeadership(): Promise<PolaroidMember[]> {
  return [...crewData.leadership];
}

export async function getTeamPods(): Promise<TeamPod[]> {
  return crewData.teams.map((pod) => ({
    ...pod,
    members: [...pod.members],
  }));
}

export async function getFaculty(): Promise<FacultyAdvisor[]> {
  return [...crewData.faculty];
}

export async function getTotalCrewCount(): Promise<number> {
  const leadershipCount = crewData.leadership.length;
  const teamLeadsCount = crewData.teams.reduce((sum, pod) => sum + pod.members.length, 0);
  const facultyCount = crewData.faculty.length;
  return leadershipCount + teamLeadsCount + facultyCount;
}

export async function getCrewApiResponse(): Promise<CrewApiResponse> {
  const total = await getTotalCrewCount();
  const roster = await getCrewRoster();

  return {
    success: true,
    data: roster,
    meta: {
      totalMembers: total,
      timestamp: new Date().toISOString(),
      version: "1.0.0",
    },
  };
}
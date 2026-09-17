// File: app/api/crew/route.ts

/**
 * ZIGBEE CREW EDGE API ROUTE
 * ---------------------------------------------------------------------------
 * High-performance, globally cached REST endpoint for the club roster.
 * 
 * If 10,000 people open this link during a hackathon, the edge cache ensures
 * our server doesn't catch fire.
 */

import { NextRequest, NextResponse } from "next/server";
import { 
  getCrewApiResponse, 
  getLeadership, 
  getTeamPods, 
  getFaculty 
} from "@/lib/crew";

// 1. Run at the Edge (Vercel / Cloudflare edge data centers globally)
export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get("section")?.toLowerCase();

    // 2. Fetch our standardized envelope from the repository
    const responseData = await getCrewApiResponse();

    // 3. Optional Section Filtering (e.g. /api/crew?section=leadership)
    if (section === "leadership") {
      return NextResponse.json(
        {
          success: true,
          data: { leadership: await getLeadership() },
          meta: {
            ...responseData.meta,
            section: "leadership",
          },
        },
        {
          headers: {
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        }
      );
    }

    if (section === "teams") {
      return NextResponse.json(
        {
          success: true,
          data: { teams: await getTeamPods() },
          meta: {
            ...responseData.meta,
            section: "teams",
          },
        },
        {
          headers: {
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        }
      );
    }

    if (section === "faculty") {
      return NextResponse.json(
        {
          success: true,
          data: { faculty: await getFaculty() },
          meta: {
            ...responseData.meta,
            section: "faculty",
          },
        },
        {
          headers: {
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        }
      );
    }

    // 4. Default: Return the full crew roster envelope with Edge Caching
    return NextResponse.json(responseData, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    // Defensive coding: Never leave the caller hanging with an uncaught crash
    return NextResponse.json(
      {
        success: false,
        error: "Failed to load Zigbee crew roster. Someone probably tripped over a power strip in the lab.",
      },
      { status: 500 }
    );
  }
}
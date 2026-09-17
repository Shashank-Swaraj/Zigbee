// File: lib/calendar.ts
import { ClubEvent } from "@/types/event";

/**
 * Converts standard ISO date string into Google Calendar compact UTC format (YYYYMMDDTHHmmssZ)
 */
function formatDateForGCal(isoString: string): string {
  const d = new Date(isoString);
  return d.toISOString().replace(/-|:|\.\d+/g, "");
}

/**
 * 1. GOOGLE CALENDAR WEB LINK GENERATOR
 * Generates an instant link with Title, Venue, Room Number, Time, and Description
 */
export function generateGoogleCalendarUrl(event: ClubEvent): string {
  const startTime = formatDateForGCal(event.fullDateIso);
  const endTime = formatDateForGCal(event.endDateIso);
  const title = encodeURIComponent(`[ZIGBEE] ${event.category}: ${event.title}`);
  const location = encodeURIComponent(`${event.venue}, ${event.roomNumber}`);
  const details = encodeURIComponent(
    `${event.description}\n\nVenue: ${event.venue}\nRoom: ${event.roomNumber}\nOrganized by Zigbee JU (IoT & Embedded Systems Club)`
  );

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
}
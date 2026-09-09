import { physicalOffices, OfficeData, OfficeId } from '../data/offices';
import { teamMembers, TeamMember } from '../data/team';

/**
 * Returns all physical corporate offices (readonly).
 */
export function getPhysicalOffices(): readonly OfficeData[] {
  return physicalOffices;
}

/**
 * Finds an office by its unique ID ('jaipur' | 'vrindavan' | 'nepal').
 */
export function getOfficeById(id: string): OfficeData | undefined {
  const norm = id.toLowerCase();
  return physicalOffices.find(o => o.id.toLowerCase() === norm);
}

/**
 * Finds an office by its URL slug.
 */
export function getOfficeBySlug(slug: string): OfficeData | undefined {
  const norm = slug.toLowerCase();
  return physicalOffices.find(o => o.slug.toLowerCase() === norm);
}

/**
 * Returns the authoritative phone line for a given office ID.
 */
export function getOfficePhone(id: OfficeId): string {
  const office = getOfficeById(id);
  return office?.phone ?? '+91 93414 36937';
}

/**
 * Returns the authoritative email address for a given office ID.
 */
export function getOfficeEmail(id: OfficeId): string {
  const office = getOfficeById(id);
  return office?.email ?? 'info@growthservice.in';
}

/**
 * Returns the designated head/primary office if configured, or default first office.
 */
export function getHeadOffice(): OfficeData {
  return physicalOffices.find(o => o.isHeadOffice) || physicalOffices[0];
}

/**
 * Computes the verified staff headcount belonging to an office ID.
 */
export function getOfficeEmployeeCount(officeId: string): number {
  if (!officeId || officeId === 'all') return teamMembers.length;
  const norm = officeId.toLowerCase();
  return teamMembers.filter(m => m.officeId.toLowerCase() === norm).length;
}

/**
 * Returns all team members stationed at a given office.
 */
export function getOfficeTeamMembers(officeId: string): readonly TeamMember[] {
  if (!officeId || officeId === 'all') return teamMembers;
  const norm = officeId.toLowerCase();
  return teamMembers.filter(m => m.officeId.toLowerCase() === norm);
}

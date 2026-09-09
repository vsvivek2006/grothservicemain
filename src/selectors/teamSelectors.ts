import { teamMembers, TeamMember, sortByRolePriority } from '../data/team';
import { OfficeData } from '../data/offices';
import { getOfficeById } from './officeSelectors';

/**
 * Returns all verified team members sorted by role hierarchy (CEO → managers → leads → executives).
 */
export function getAllTeamMembers(): TeamMember[] {
  return sortByRolePriority(teamMembers);
}

/** Returns unsorted team members (internal/advanced use). */
export function getAllTeamMembersRaw(): readonly TeamMember[] {
  return teamMembers;
}

/**
 * Finds a team member by their ID.
 */
export function getTeamMemberById(id: number): TeamMember | undefined {
  return teamMembers.find(m => m.id === id);
}

/**
 * Filters team members by office ID, sorted by role hierarchy.
 */
export function getTeamMembersByOffice(officeId: string): TeamMember[] {
  if (!officeId || officeId === 'all') return sortByRolePriority(teamMembers);
  const norm = officeId.toLowerCase();
  return sortByRolePriority(teamMembers.filter(m => m.officeId.toLowerCase() === norm));
}

/**
 * Filters team members by department.
 */
export function getTeamMembersByDepartment(dept: string): readonly TeamMember[] {
  if (!dept || dept === 'all') return teamMembers;
  const norm = dept.toLowerCase();
  return teamMembers.filter(m => m.department.toLowerCase() === norm);
}

/**
 * Resolves the full OfficeData entity for a team member.
 */
export function getEmployeeOffice(member: TeamMember): OfficeData | undefined {
  return getOfficeById(member.officeId);
}

/**
 * Alias for getEmployeeOffice.
 */
export const getOfficeForTeamMember = getEmployeeOffice;

/**
 * Returns total team member count.
 */
export function getTeamMemberCount(): number {
  return teamMembers.length;
}

/**
 * Returns staff headcount for a specific office.
 */
export function getTeamMemberCountByOffice(officeId: string): number {
  if (!officeId || officeId === 'all') return teamMembers.length;
  const norm = officeId.toLowerCase();
  return teamMembers.filter(m => m.officeId.toLowerCase() === norm).length;
}

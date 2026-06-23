import { ROLES } from "./constants.js";

export const PERMISSIONS = {

  MANAGE_USERS: [
    ROLES.ADMIN
  ],

  MANAGE_FAMILIES: [
    ROLES.ADMIN,
    ROLES.MANAGER
  ],

  MANAGE_NGOS: [
    ROLES.ADMIN,
    ROLES.MANAGER
  ],

  MANAGE_DONATIONS: [
    ROLES.ADMIN,
    ROLES.MANAGER,
    ROLES.USER
  ],

  MANAGE_DELIVERIES: [
    ROLES.ADMIN,
    ROLES.MANAGER
  ],

  VIEW_REPORTS: [
    ROLES.ADMIN,
    ROLES.MANAGER
  ],

  VIEW_DASHBOARD: [
    ROLES.ADMIN,
    ROLES.MANAGER
  ],

  MANAGE_SETTINGS: [
    ROLES.ADMIN
  ]
};

export const hasPermission = (
  role,
  permission
) => {

  const allowedRoles =
    PERMISSIONS[permission];

  if (!allowedRoles) {
    return false;
  }

  return allowedRoles.includes(role);
};
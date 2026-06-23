import { USER_ROLES } from "./constants";

export const isAdmin = (role) => {
  return role === USER_ROLES.ADMIN;
};

export const isUser = (role) => {
  return role === USER_ROLES.USER;
};

export const canAccessAdmin = (role) => {
  return role === USER_ROLES.ADMIN || role === USER_ROLES.MANAGER;
};

export const hasPermission = (role, allowedRoles = []) => {
  return allowedRoles.includes(role);
};
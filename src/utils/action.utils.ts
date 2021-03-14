/**
 * Appends PENDING async action type
 */
export const PENDING = (actionType: string): string => `${actionType}/pending`;

/**
 * Appends FULFILLED async action type
 */
export const FULFILLED = (actionType: string): string => `${actionType}/fulfilled`;

/**
 * Appends REJECTED async action type
 */
export const REJECTED = (actionType: string): string => `${actionType}/rejected`;

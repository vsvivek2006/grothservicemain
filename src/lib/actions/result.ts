/**
 * Growth Service — Standardized Server Action Result Contract
 */

export interface ActionSuccess<T> {
  success: true;
  data: T;
}

export interface ActionFailure {
  success: false;
  error: string;
  code?: string;
  fieldErrors?: Record<string, string[]>;
}

export type ActionResult<T> = ActionSuccess<T> | ActionFailure;

export function actionSuccess<T>(data: T): ActionSuccess<T> {
  return { success: true, data };
}

export function actionError(
  error: string,
  code?: string,
  fieldErrors?: Record<string, string[]>
): ActionFailure {
  return {
    success: false,
    error,
    ...(code ? { code } : {}),
    ...(fieldErrors ? { fieldErrors } : {}),
  };
}

import type { ZodError } from "zod";

export function formatIssues(error: ZodError): string[] {
  return error.issues.map((issue) => {
    const key = issue.path.length > 0 ? issue.path.join(".") : "(root)";
    return `${key}: ${issue.message}`;
  });
}

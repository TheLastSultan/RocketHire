export interface Developer {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  expectedSalary: string; // Prefixed with $
  reviewed: boolean;
  resume: object; // JSON object
  skills: string;
  status: "Hired" | "Interviewing" | "Applied" | "Rejected";
}

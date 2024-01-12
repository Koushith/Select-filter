import { AvailableDocs, JobTemplate, Locations, Seniority } from "../types/response.type";

export const JOB_TEMPLATE: JobTemplate = [
  "Heavy Equipment Operator",
  "Heavy Equipment Service Technician",
  "Equipment Operator",
  "Track Foreman",
  "Track Laborer",
  "Track Machine Operator",
  "Asphalt Plant Foreman",
  "Concrete Paving Foreman",
  "Construction Quality Control Technician",
  "Grade Foreman",
  "Grinding Operator",
  "Heavy Equipment Mechanic",
  "Loader Operator",
  "Off Road Truck Driver"
]


export const LOCATIONS: Locations = [
  "New York, NY",
  "Los Angeles, CA",
  "San Francisco, CA",
  "Miami, FL",
  "Chicago, IL",
  "Boston, MA",
  "Houston, TX",
  "Austin, TX"
]

export const SENIORITY: Seniority = [
  "Entry-Level Position",
  "Individual Contributor",
  "Manager",
  "Office Staff",
  "Leadership / Management"
]



export const AVALIABLE_DOCS: AvailableDocs[] = [
  {
    heading: "Drug Policies",
    content: ["Drug Policy Overview", "Controlled Substances Guidelines", "Employee Responsibilities"],
  },
  {
    heading: "Employee Handbooks",
    content: ["Employee Handbook Introduction", "Company Policies Overview", "Employee Support Resources"],
  },
  {
    heading: "Equipment Selection",
    content: [
      "Company Handbook Overview",
      "Code of Conduct",
      "Personal Leave Policy",
      "Vacation Leave Policy",
      "Sick Leave Policy",
      "Medical Leave Guidelines",
    ],
  },
  {
    heading: "Non-Compete Agreement",
    content: ["PTO (Paid Time Off) Overview", "PTO Request Process", "Responsibility Coverage Guidelines", "Unused PTO Policies"],
  },
  {
    heading: "PTO Policy",
    content: ["PTO (Paid Time Off) Overview", "PTO Request Process", "Responsibility Coverage Guidelines", "Unused PTO Policies"],
  },
  {
    heading: "Safety Manuals",
    content: ["Safety Manual Overview", "Safety Guidelines", "Emergency Procedures", "Reporting Incidents"],
  },
];

export enum ResumeCategories {
  Education = "Education",
  WorkExperience = "Work Experience",
}
export enum ResumeTags {
  AI = "Artificial Intellegence",
  WebDevelopment = "Web Development",
  GamesDevelopment = "Games Development",
  MobileDevelopment = "Mobile Development",
  Database = "Database",
  Cloud = "Cloud",
  OperatingSystems = "Operating Systems",
  QualityAssurance = "Quality Assurance",
}
export type ResumeData = {
  category: ResumeCategories; // Type of Resume data
  dateStarted: string;
  dateEnded: string;
  description: string;
  title: string;
  tags: ResumeTags[]; // Which Area of Specialization
};

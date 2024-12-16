// import types
import { ResumeCategories, ResumeData, ResumeTags } from "./types";

// Education
const Education: ResumeData[] = [
  {
    category: ResumeCategories.Education,
    dateStarted: "September 2024",
    dateEnded: "April 2027",
    description: "Bachelor of Science with Honours in Computing Science",
    title: "Singapore Institute of Technology",
    tags: [ResumeTags.AI, ResumeTags.Database, ResumeTags.Cloud],
  },
  {
    category: ResumeCategories.Education,
    dateStarted: "March 2019",
    dateEnded: "March 2021",
    description: "Diploma in Games Design & Development",
    title: "Singapore Polytechnic",
    tags: [ResumeTags.GamesDevelopment],
  },
  {
    category: ResumeCategories.Education,
    dateStarted: "Janurary 2016",
    dateEnded: "Janurary 2018",
    description: "Nitec in Social Media & Web Development",
    title: "Institute of Technical Education College Central",
    tags: [ResumeTags.WebDevelopment],
  },
];

// Work Experience
const Experience: ResumeData[] = [
  {
    category: ResumeCategories.WorkExperience,
    dateStarted: "March 2021",
    dateEnded: "September 2021",
    description:
      "Conducted testing for Razer Synapse 4, identifying issues to improve software stability and performance. Collaborated with developers to troubleshoot and resolve bugs.",
    title: "Quality Assurance Engineer Intern at Razer Singapore",
    tags: [ResumeTags.WebDevelopment, ResumeTags.QualityAssurance],
  },
  {
    category: ResumeCategories.WorkExperience,
    dateStarted: "April 2022",
    dateEnded: "September 2022",
    description:
      "Contributed to and debugged UI components on Razer Synapse 4 to improve user experience and software performance. Focused on front-end development, enhancing the software's interface and functionality.",
    title: "Front-End Developer Intern at Razer Singapore",
    tags: [ResumeTags.WebDevelopment],
  },
];

// data to be exported
export const Dataset = [...Experience, ...Education];

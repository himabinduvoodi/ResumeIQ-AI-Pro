import jobsData from "../data/jobsData";

const extractSkills = (resumeText) => {
  const skills = [
    "Java",
    "Python",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "MySQL",
    "MongoDB",
    "Node",
    "Express",
    "Git",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Firebase",
    "Machine Learning",
    "AI",
    "C",
    "C++",
    "DSA",
  ];

  return skills.filter((skill) =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );
};

const calculateMatch = (resumeSkills, jobSkills) => {
  const matched = jobSkills.filter((skill) =>
    resumeSkills.some(
      (resumeSkill) =>
        resumeSkill.toLowerCase() === skill.toLowerCase()
    )
  );

  const missing = jobSkills.filter(
    (skill) =>
      !matched.some(
        (matchedSkill) =>
          matchedSkill.toLowerCase() === skill.toLowerCase()
      )
  );

  const percentage = Math.round(
    (matched.length / jobSkills.length) * 100
  );

  return {
    percentage,
    matched,
    missing,
  };
};

export const matchJobs = (resumeText) => {
  const resumeSkills = extractSkills(resumeText);

  return jobsData
    .map((job) => ({
      ...job,
      ...calculateMatch(resumeSkills, job.skills),
    }))
    .sort((a, b) => b.percentage - a.percentage);
};
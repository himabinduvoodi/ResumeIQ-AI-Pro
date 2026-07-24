export const compareResumeWithJD = (
  resumeText,
  jdText
) => {

  const keywords = [
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
    "AWS",
    "Azure",
    "Docker",
    "Git",
    "Firebase",
    "Kubernetes",
    "DSA",
  ];

  const matched = [];

  const missing = [];

  keywords.forEach((skill) => {

    const inJD = jdText
      .toLowerCase()
      .includes(skill.toLowerCase());

    const inResume = resumeText
      .toLowerCase()
      .includes(skill.toLowerCase());

    if (inJD && inResume)
      matched.push(skill);

    if (inJD && !inResume)
      missing.push(skill);

  });

  const score = jdText
    ? Math.round(
        (matched.length /
          (matched.length + missing.length || 1)) *
          100
      )
    : 0;

  return {
    score,
    matched,
    missing,
  };

};
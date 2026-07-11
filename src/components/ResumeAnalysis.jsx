function ResumeAnalysis({ resumeText }) {
  const text = resumeText || "";

  const email =
    text.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/)?.[0] ||
    "Not Found";

  const phone =
    text.match(/\b\d{10}\b/) ?. [0] ||
    text.match(/\+?\d[\d\s-]{8,}\d/) ?. [0] ||
    "Not Found";

  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line);

  const name = lines.length ? lines[0] : "Not Found";

  const skills = [
    "Python",
    "Java",
    "C",
    "C++",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "SQL",
    "MySQL",
    "MongoDB",
    "Node.js",
    "Express",
    "Git",
    "GitHub",
    "AWS",
    "Machine Learning",
  ];

  const foundSkills = skills.filter((skill) =>
    text.toLowerCase().includes(skill.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h2 className="text-xl font-bold mb-4">
        Resume Analysis
      </h2>

      <div className="space-y-3">
        <p>
          <span className="font-semibold">Name:</span> {name}
        </p>

        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>

        <p>
          <span className="font-semibold">Phone:</span> {phone}
        </p>

        <div>
          <span className="font-semibold">Skills:</span>

          <div className="flex flex-wrap gap-2 mt-2">
            {foundSkills.length > 0 ? (
              foundSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-gray-500">
                No skills detected
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeAnalysis;
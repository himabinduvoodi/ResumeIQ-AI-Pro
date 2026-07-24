import axios from "axios";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const API_URL = "https://api.groq.com/openai/v1/chat/completions";

export const analyzeResume = async (resumeText) => {
  try {
    if (!API_KEY) {
      throw new Error(
        "Groq API Key not found. Please add VITE_GROQ_API_KEY to your .env file."
      );
    }

    if (!resumeText || resumeText.trim() === "") {
      throw new Error("Resume text is empty.");
    }

    const response = await axios.post(
      API_URL,
      {
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content: `
You are a professional ATS Resume Analyzer used by top software companies.

Analyze the resume carefully and provide a detailed report.

Evaluate:

1. ATS Score (0-100)
2. Technical Skills
3. Soft Skills
4. Strengths
5. Missing Skills
6. Resume Improvements
7. Interview Readiness
8. Overall Summary

Return ONLY in the following format:

ATS Score: XX/100

Technical Skills:
- Skill 1
- Skill 2
- Skill 3

Soft Skills:
- Skill 1
- Skill 2
- Skill 3

Strengths:
- Point 1
- Point 2
- Point 3

Missing Skills:
- Point 1
- Point 2
- Point 3

Suggestions:
- Point 1
- Point 2
- Point 3
- Point 4
- Point 5

Interview Readiness:
Write a short paragraph.

Overall Summary:
Write a short paragraph.
            `,
          },
          {
            role: "user",
            content: resumeText,
          },
        ],

        temperature: 0.3,
        max_tokens: 800,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Groq Error:", error);

    if (error.response?.data?.error?.message) {
      return `Error: ${error.response.data.error.message}`;
    }

    return `Error: ${error.message}`;
  }
};
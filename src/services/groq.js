import axios from "axios";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const analyzeResume = async (resumeText) => {
  try {
    if (!API_KEY) {
      return "Groq API Key not found.";
    }

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content: `You are an expert ATS Resume Analyzer.

Analyze the resume professionally.

Return the response in this exact format:

ATS Score: XX/100

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
Short paragraph.

Overall Summary:
Short paragraph.`
          },
          {
            role: "user",
            content: resumeText
          }
        ],

        temperature: 0.3,
        max_tokens: 500
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices[0].message.content;

  } catch (err) {
    console.error(err);

    if (err.response?.data?.error?.message) {
      return err.response.data.error.message;
    }

    return "AI analysis failed.";
  }
};
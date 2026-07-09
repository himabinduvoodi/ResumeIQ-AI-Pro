import axios from "axios";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

console.log("Groq API Key:", API_KEY);

export const analyzeResume = async (resumeText) => {
  try {

    if (!API_KEY) {
      return "Groq API Key not found.";
    }

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",

        messages: [
          {
            role: "system",
            content:
              "You are an ATS Resume Analyzer. Analyze the resume and provide only 5 short professional suggestions."
          },
          {
            role: "user",
            content: resumeText
          }
        ],

        temperature: 0.3,
        max_tokens: 300
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

    console.log("========== GROQ ERROR ==========");
    console.log("Status:", err.response?.status);
    console.log("Data:", err.response?.data);
    console.log("Message:", err.message);

    if (err.response?.data?.error?.message) {
      return err.response.data.error.message;
    }

    return "AI analysis failed.";

  }
};
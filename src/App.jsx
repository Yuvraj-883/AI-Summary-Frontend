import React, { useState } from "react";
import SummarizerForm from "./components/SummarizerForm";
import { globalStyles } from "./styles/globalStyles";

export default function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    language: "en",
  });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, content, language } = formData;

    if (!title || !content) {
      setResponse({ error: "Please fill in title and content fields." });
      return;
    }

    setLoading(true);
    setResponse(null);

    try {
      const articlePayload =
        language === "en"
          ? { title, description, content }
          : { sTitle: title, sDescription: description, sContent: content };

      const res = await fetch(
        `https://ai-service-backend.vercel.app/api/articles/summarize/${language}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ articles: [articlePayload] }),
        }
      );

      const data = await res.json().catch(() => {
        throw new Error("Invalid JSON response from API.");
      });

      if (!res.ok) throw new Error(data?.message || "Something went wrong with the API.");
      setResponse(data);
    } catch (error) {
      setResponse({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Dancing+Script:wght@700&display=swap" />
      <style>{globalStyles}</style>
      <div className="ai-page">
        <SummarizerForm 
          formData={formData}
          loading={loading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          response={response}
        />
      </div>
    </>
  );
}
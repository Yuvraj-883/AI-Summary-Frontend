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
      const articleData =
        language === "en"
          ? { title, description, content }
          : { sTitle: title, sDescription: description, sContent: content };

      const requestBody = { article: articleData };
      console.log('Request payload:', JSON.stringify(requestBody, null, 2));
      console.log('Request URL:', `https://ai-service-backend.vercel.app/api/articles/summarize/${language}`);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const res = await fetch(
        `https://ai-service-backend.vercel.app/api/articles/summarize/${language}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);
      
      console.log('Response status:', res.status);
      console.log('Response headers:', res.headers);
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error('Error response:', errorText);
        throw new Error(`API Error (${res.status}): ${errorText}`);
      }

      const data = await res.json().catch(() => {
        throw new Error("Invalid JSON response from API.");
      });
      setResponse(data);
    } catch (error) {
      console.error('Full error details:', error);
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      
      if (error.name === 'AbortError') {
        setResponse({ error: "Request timeout. Please try again." });
      } else if (error.message.includes('EPIPE') || error.message.includes('network')) {
        setResponse({ error: "Network connection lost. Please check your connection and try again." });
      } else {
        setResponse({ error: `Error: ${error.message}` });
      }
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
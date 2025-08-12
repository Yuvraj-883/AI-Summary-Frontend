import React, { useState } from "react";

export default function SummarizeArticle() {
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
      setResponse({ error: "Please fill in all fields." });
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
        `https://56e19b63ad71.ngrok-free.app/api/articles/summarize/${language}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ article: articlePayload }),
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

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f0f4f8, #d9e4ec)",
      padding: "40px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    container: {
      maxWidth: 700,
      width: "100%",
      background: "#fff",
      padding: 20,
      borderRadius: 10,
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      fontFamily: "sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: 20,
      color: "#007bff",
    },
    field: { marginTop: 10, display: "flex", flexDirection: "column" },
    input: { padding: "8px", borderRadius: 5, border: "1px solid #ccc" },
    textarea: {
      padding: "8px",
      borderRadius: 5,
      border: "1px solid #ccc",
      minHeight: "60px",
      resize: "vertical",
    },
    button: {
      marginTop: 15,
      padding: "10px 20px",
      background: loading ? "#888" : "#007bff",
      color: "white",
      fontWeight: "bold",
      border: "none",
      borderRadius: 5,
      cursor: loading ? "not-allowed" : "pointer",
      transition: "background 0.3s",
    },
    responseBox: {
      marginTop: 20,
      padding: 15,
      border: "1px solid #ddd",
      borderRadius: 8,
      background: "#f9f9f9",
      color: response?.error ? "red" : "#333",
      maxHeight: 300,
      overflowY: "auto",
      overflowX: "hidden", // no horizontal scrollbar
      whiteSpace: "pre-wrap", // wraps text
      wordBreak: "break-word",
      fontFamily: "monospace",
      fontSize: "0.9rem",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>📰 Summarize Article</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Language:
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              disabled={loading}
              style={{
                marginLeft: 8,
                padding: "6px",
                borderRadius: 5,
                border: "1px solid #ccc",
              }}
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </label>

          <div style={styles.field}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={styles.input}
              disabled={loading}
            />
          </div>

          <div style={styles.field}>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={styles.textarea}
              disabled={loading}
            />
          </div>

          <div style={styles.field}>
            <label>Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              style={{ ...styles.textarea, minHeight: "120px" }}
              disabled={loading}
            />
          </div>

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "⏳ Summarizing..." : "⚡ Summarize"}
          </button>
        </form>

        {response && (
          <div style={styles.responseBox}>
            {JSON.stringify(response, null, 2)}
          </div>
        )}
      </div>
    </div>
  );
}

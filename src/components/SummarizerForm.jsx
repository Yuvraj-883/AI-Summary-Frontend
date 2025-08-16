import React from 'react';

export default function SummarizerForm({ formData, loading, handleChange, handleSubmit, response }) {
  return (
    <div className="glass-container">
      <h2 className="form-title">Quick Article Summary</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="language-select">Language</label>
            <select
              id="language-select"
              name="language"
              value={formData.language}
              onChange={handleChange}
              disabled={loading}
              className="form-select"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="title-input">Title</label>
            <input
              id="title-input"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-input"
              disabled={loading}
              placeholder="Enter article title..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="description-input">Description</label>
            <textarea
              id="description-input"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-textarea"
              disabled={loading}
              placeholder="Enter a short description (optional)..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="content-input">Content</label>
            <textarea
              id="content-input"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="form-textarea"
              style={{ minHeight: "150px" }}
              disabled={loading}
              placeholder="Paste the full article content here..."
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading && <div className="spinner"></div>}
            {loading ? "Synthesizing..." : "⚡ Generate Summary"}
          </button>
        </div>
      </form>

      {response && (
        <div className={`response-box ${response.error ? 'response-box-error' : ''}`}>
          <div className={`response-title ${response.error ? 'error' : 'success'}`}>
            {response.error ? 'Error' : 'Generated Summary'}
          </div>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
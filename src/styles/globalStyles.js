export const globalStyles = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    color: #1f2937;
    overflow: hidden;
  }

  .ai-page {
    height: 100vh;
    width: 100vw;
    background-image: url('https://media.sciencephoto.com/c0/47/35/60/c0473560-800px-wm.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
  }



  .glass-container {
    max-width: 700px;
    width: 90%;
    background: rgba(255, 255, 255, 0.3);
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  .form-title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.6rem;
    font-weight: 700;
    font-family: 'Dancing Script', 'Lucida Handwriting', cursive;
    background: linear-gradient(90deg, #00c6ff, #0072ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .form-grid { display: flex; flex-direction: column; gap: 1.25rem; }
  .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
  .form-group label { font-weight: 500; color: #4b5563; }

  .form-input, .form-textarea, .form-select {
    width: 100%;
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid #d1d5db;
    background-color: white;
    color: #1f2937;
    transition: box-shadow 0.2s, border-color 0.2s;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }
  
  .form-input::placeholder, .form-textarea::placeholder { color: #9ca3af; }

  .form-input:focus, .form-textarea:focus, .form-select:focus {
    outline: none;
    border-color: #0ea5e9;
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.3);
  }

  .form-textarea { min-height: 80px; resize: vertical; }
  
  .submit-btn {
    margin-top: 1rem;
    padding: 12px 24px;
    background: linear-gradient(90deg, #00c6ff, #0072ff);
    color: white;
    font-weight: 700;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; justify-content: center; align-items: center; gap: 0.75rem;
  }

  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 150, 255, 0.2);
  }

  .submit-btn:disabled { background: #4b5563; cursor: not-allowed; }
  
  .spinner {
    width: 20px; height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .response-box {
    margin-top: 2rem; padding: 1.5rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: #f9fafb;
    max-height: 400px; overflow-y: auto;
    white-space: pre-wrap; word-break: break-word;
    font-family: monospace; font-size: 0.9rem;
    color: #1f2937;
  }

  .response-box-error {
    background-color: rgba(220, 38, 38, 0.1);
    border-color: rgba(220, 38, 38, 0.4);
    color: #fca5a5;
  }

  .response-title {
    font-family: 'Inter', sans-serif; font-weight: 700;
    font-size: 1rem; margin: 0 0 1rem 0;
    padding-bottom: 0.75rem; border-bottom: 1px solid #d1d5db;
  }
  
  .response-title.success { color: #22c55e; }
  .response-title.error { color: #ef4444; }
  .response-box-error .response-title { border-color: rgba(220, 38, 38, 0.4); }
`;
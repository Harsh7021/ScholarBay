import React, { useState } from 'react';
import api from '../../api/axiosClient.js';

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    try {
      const { data } = await api.post('/chat', { question });
      setAnswer(data.answer);
    } catch {
      setAnswer('Error contacting chatbot.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="position-fixed bottom-0 end-0 m-3">
      {open && (
        <div className="card shadow" style={{ width: 320, height: 360 }}>
          <div className="card-header d-flex justify-content-between">
            <span>ScholarBot</span>
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="card-body d-flex flex-column">
            <div className="flex-grow-1 mb-2 overflow-auto small">
              {loading ? (
                <p>Thinking...</p>
              ) : answer ? (
                <pre className="mb-0" style={{ whiteSpace: 'pre-wrap' }}>
                  {answer}
                </pre>
              ) : (
                <p className="text-muted">
                  Ask anything about your subjects. The demo bot uses uploaded
                  resource titles as context.
                </p>
              )}
            </div>
            <form onSubmit={handleAsk} className="d-flex">
              <input
                className="form-control form-control-sm me-1"
                placeholder="Type question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <button className="btn btn-sm btn-primary" type="submit">
                Ask
              </button>
            </form>
          </div>
        </div>
      )}
      {!open && (
        <button
          className="btn btn-primary rounded-circle shadow"
          style={{ width: 56, height: 56 }}
          type="button"
          onClick={() => setOpen(true)}
        >
          ?
        </button>
      )}
    </div>
  );
};

export default ChatbotWidget;


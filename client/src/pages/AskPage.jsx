import React, { useEffect, useState } from 'react';
import api from '../api/axiosClient.js';

const AskPage = () => {
  const [questions, setQuestions] = useState([]);
  const [text, setText] = useState('');
  const [subject, setSubject] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchQuestions = async () => {
    setError('');
    setLoading(true);
    try {
      const { data } = await api.get('/questions');
      setQuestions(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load questions');
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAsk = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await api.post('/questions', { text, subject });
      setText('');
      setSubject('');
      fetchQuestions();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to post question');
    }
  };

  const handleAnswer = async (id, answerText) => {
    if (!answerText) return;
    setError('');
    try {
      await api.post(`/questions/${id}/answers`, { text: answerText });
      fetchQuestions();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to post answer');
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3">Ask & Help</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <p className="text-muted">Loading...</p>}
      <form onSubmit={handleAsk} className="mb-4">
        <div className="mb-2">
          <label className="form-label">Your question</label>
          <textarea
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Subject (optional)</label>
          <input
            className="form-control"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Post Question
        </button>
      </form>

      {questions.map((q) => (
        <div key={q._id} className="card mb-3">
          <div className="card-body">
            <h5>{q.text}</h5>
            <p className="text-muted">
              {q.subject} • Asked by {q.askedBy?.fullName || 'Student'}
            </p>
            <ul className="list-unstyled">
              {(q.answers || []).map((a) => (
                <li key={a._id} className="mb-1">
                  <strong>{a.answeredBy?.fullName || 'Student'}:</strong> {a.text}
                </li>
              ))}
            </ul>
            <AnswerBox questionId={q._id} onAnswer={handleAnswer} />
          </div>
        </div>
      ))}
    </div>
  );
};

const AnswerBox = ({ questionId, onAnswer }) => {
  const [text, setText] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAnswer(questionId, text);
        setText('');
      }}
      className="mt-2"
    >
      <div className="input-group">
        <input
          className="form-control"
          placeholder="Write an answer..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-outline-primary" type="submit">
          Answer
        </button>
      </div>
    </form>
  );
};

export default AskPage;


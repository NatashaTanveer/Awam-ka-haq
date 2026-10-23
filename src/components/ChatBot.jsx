import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ChatBot.css'

const replies = [
  {
    keys: ['fir', 'police', 'complaint'],
    text: 'To file an FIR, go to the police station of the area where the incident happened and ask them to register it. If they refuse, you can approach a senior police officer or the court.',
    link: { label: 'Read FIR guide', to: '/articles' },
  },
  {
    keys: ['lawyer', 'advocate', 'attorney'],
    text: 'You can search verified lawyers by name, field of law and city.',
    link: { label: 'Find a Lawyer', to: '/find-lawyer' },
  },
  {
    keys: ['free', 'aid', 'afford', 'money'],
    text: 'If you cannot afford a lawyer, you can apply for free legal aid. Fill in a short form and our team will contact you.',
    link: { label: 'Apply for Legal Aid', to: '/legal-aid' },
  },
  {
    keys: ['right', 'rights', 'article'],
    text: 'You can read about your fundamental rights, like fair trial, equality and safeguards on arrest.',
    link: { label: 'View Legal Rights', to: '/legal-rights' },
  },
  {
    keys: ['khula', 'divorce', 'family', 'marriage'],
    text: 'Family matters like khula and divorce are handled in the family court. A family lawyer can guide you through the steps.',
    link: { label: 'Find a Family Lawyer', to: '/find-lawyer' },
  },
  {
    keys: ['property', 'land', 'registry'],
    text: 'For property issues, always check the registry and ownership documents before any deal. A property lawyer can verify them for you.',
    link: { label: 'Find a Property Lawyer', to: '/find-lawyer' },
  },
]

const quick = ['How to file an FIR?', 'Find a lawyer', 'I need free legal aid', 'My legal rights']

function ChatBot() {
  const [open, setOpen] = useState(false)
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Assalam o Alaikum! 👋 I am your Legal Assistant. Ask me anything or pick a topic below.' },
  ])
  const [input, setInput] = useState('')
  const endRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing, open])

  const send = (raw) => {
    const message = raw.trim()
    if (!message) return

    setMessages((prev) => [...prev, { from: 'user', text: message }])
    setInput('')
    setTyping(true)

    const lower = message.toLowerCase()
    const match = replies.find((r) => r.keys.some((k) => lower.includes(k)))

    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        match
          ? { from: 'bot', text: match.text, link: match.link }
          : {
              from: 'bot',
              text: 'I can help with FIR, lawyers, free legal aid, family and property matters, and your legal rights. Try one of those topics!',
            },
      ])
    }, 700)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    send(input)
  }

  return (
    <>
      {open && (
        <div className="chat-window">
          <div className="chat-head">
            <div>
              <strong>⚖️ Legal Assistant</strong>
              <small>● Online</small>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.from}`}>
                <p>{m.text}</p>
                {m.link && (
                  <button
                    className="chat-link"
                    onClick={() => {
                      navigate(m.link.to)
                      setOpen(false)
                    }}
                  >
                    {m.link.label} →
                  </button>
                )}
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot">
                <p className="dots"><span></span><span></span><span></span></p>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="chat-quick">
            {quick.map((q) => (
              <button key={q} onClick={() => send(q)}>{q}</button>
            ))}
          </div>

          <form className="chat-input" onSubmit={handleSubmit}>
            <input
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>

          <p className="chat-note">General information only, not legal advice.</p>
        </div>
      )}

      <button className="chat-fab" onClick={() => setOpen(!open)} aria-label="Open chat">
        {open ? '✕' : '💬'}
      </button>
    </>
  )
}

export default ChatBot
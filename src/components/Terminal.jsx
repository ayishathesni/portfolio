import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Trash2, Play } from 'lucide-react';
import confetti from 'canvas-confetti';
import { terminalCommands } from '../data/portfolioData';

export default function Terminal() {
  const [history, setHistory] = useState([
    { command: 'welcome', output: '⚡ Welcome to Ayisha\'s Interactive Developer CLI!\nType "help" to view available commands, or click any command shortcut below.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  const handleCommandSubmit = (cmdToRun) => {
    const rawCmd = (cmdToRun !== undefined ? cmdToRun : inputVal).trim().toLowerCase();
    if (!rawCmd) return;

    if (rawCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output = '';
    if (rawCmd === 'sudo hire' || rawCmd === 'hire') {
      output = terminalCommands.hire;
      // Trigger Confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback silently if canvas confetti is missing
      }
    } else if (terminalCommands[rawCmd]) {
      output = terminalCommands[rawCmd];
    } else {
      output = `Command not recognized: "${rawCmd}". Type "help" to see available options.`;
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
    setInputVal('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const commandButtons = ['help', 'about', 'skills', 'exp', 'projects', 'edu', 'contact', 'sudo hire'];

  return (
    <section id="terminal" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">INTERACTIVE DEVELOPER EXPERIENCE</span>
          <h2 className="section-title">Interactive Tech <span className="gradient-text">Terminal</span></h2>
          <p className="section-description">
            Explore my engineering background, skill stack, and project highlights using terminal commands.
          </p>
        </div>

        {/* Terminal Window Frame */}
        <div
          className="glass-card"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            overflow: 'hidden',
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(0, 242, 254, 0.2)',
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              background: '#0d121f',
              padding: '0.8rem 1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ marginLeft: '0.8rem', fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'Fira Code' }}>
                ayisha@portfolio:~ (bash)
              </span>
            </div>

            <button
              onClick={() => handleCommandSubmit('clear')}
              title="Clear Terminal"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.75rem',
              }}
            >
              <Trash2 size={14} />
              <span>clear</span>
            </button>
          </div>

          {/* Quick Shortcuts Buttons Row */}
          <div
            style={{
              padding: '0.75rem 1.2rem',
              background: 'rgba(0, 0, 0, 0.2)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Quick Commands:</span>
            {commandButtons.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommandSubmit(cmd)}
                style={{
                  background: cmd === 'sudo hire' ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                  border: cmd === 'sudo hire' ? '1px solid var(--accent-cyan)' : '1px solid var(--card-border)',
                  color: cmd === 'sudo hire' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                  fontFamily: 'Fira Code',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontWeight: cmd === 'sudo hire' ? 700 : 400,
                }}
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Console Output */}
          <div
            style={{
              padding: '1.5rem',
              minHeight: '320px',
              maxHeight: '450px',
              overflowY: 'auto',
              fontFamily: 'Fira Code, monospace',
              fontSize: '0.9rem',
              lineHeight: 1.6,
              background: '#070a12',
            }}
          >
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)' }}>
                  <span style={{ color: 'var(--accent-purple)' }}>ayisha@portfolio</span>
                  <span style={{ color: 'var(--text-muted)' }}>:~$</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>{item.command}</span>
                </div>
                <div
                  style={{
                    color: item.command === 'sudo hire' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    whiteSpace: 'pre-wrap',
                    marginTop: '0.4rem',
                    paddingLeft: '1rem',
                    borderLeft: '2px solid rgba(0, 242, 254, 0.3)',
                  }}
                >
                  {item.output}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommandSubmit();
              }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}
            >
              <span style={{ color: 'var(--accent-purple)' }}>ayisha@portfolio</span>
              <span style={{ color: 'var(--text-muted)' }}>:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command here (e.g. skills)..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontFamily: 'Fira Code, monospace',
                  fontSize: '0.9rem',
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--accent-cyan)',
                  cursor: 'pointer',
                }}
              >
                <CornerDownLeft size={16} />
              </button>
            </form>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
}

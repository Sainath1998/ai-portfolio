"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUp, Bot, BriefcaseBusiness, CircleAlert, RotateCcw, Sparkles, UserRound } from "lucide-react";
import Navbar from "@/components/Navbar";

type ChatMessage = {
  role: "user" | "model";
  text: string;
};

const suggestions = [
  "How does Sainath's CDN experience match this role?",
  "Summarize his backend engineering experience.",
  "Which skills could help a customer success team?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const transcriptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  async function sendMessage(value: string) {
    const text = value.trim();
    if (!text || isLoading) return;

    const nextMessages = [...messages, { role: "user" as const, text }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/portfolio-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "The assistant could not respond.");
      }

      setMessages([...nextMessages, { role: "model", text: result.text }]);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  function startOver() {
    setMessages([]);
    setError("");
    setInput("");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5ff] text-[#211b39]">
      <Navbar />
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-28 top-28 h-80 w-80 rounded-full bg-fuchsia-200/35 blur-[100px]" />
        <div className="absolute -left-32 bottom-12 h-96 w-96 rounded-full bg-cyan-200/30 blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(88,28,135,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(88,28,135,0.07)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-8 pt-28 sm:px-8 lg:px-12">
        <header className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-violet-800 shadow-sm shadow-violet-950/5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              PORTFOLIO INTELLIGENCE
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Sainath, through his work.</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#625b76] sm:text-base">
              Ask about his experience, skills, and projects, or paste a job description for a grounded fit assessment.
            </p>
          </div>
          <button
            type="button"
            onClick={startOver}
            disabled={messages.length === 0 && !error}
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-violet-200 bg-white/75 px-3 text-sm font-medium text-violet-900 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-45 sm:self-auto"
            aria-label="Start a new conversation"
            title="Start a new conversation"
          >
            <RotateCcw size={15} /> New chat
          </button>
        </header>

        <div className="grid flex-1 gap-5 lg:min-h-[570px] lg:grid-cols-[minmax(0,1fr)_300px]">
          <section className="flex min-h-[590px] flex-col overflow-hidden rounded-2xl border border-white bg-white/85 shadow-[0_24px_80px_-42px_rgba(65,38,122,0.48)] backdrop-blur-xl lg:min-h-0" aria-label="Chat with the portfolio assistant">
            <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-violet-100 px-5 sm:px-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#261c42] text-cyan-200 shadow-md shadow-violet-950/15">
                  <Sparkles size={17} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Sainath&apos;s AI profile</p>
                  <p className="text-xs text-[#746c88]">Grounded in portfolio data</p>
                </div>
              </div>
              <span className="hidden items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-800 sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Ready
              </span>
            </div>

            <div ref={transcriptRef} className="flex-1 space-y-5 overflow-y-auto px-4 py-6 sm:px-7">
              {messages.length === 0 && (
                <div className="mx-auto flex min-h-full max-w-2xl flex-col justify-center py-5">
                  <div className="mb-5 flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-800">
                      <Bot size={17} />
                    </div>
                    <div className="max-w-xl rounded-2xl rounded-tl-sm bg-[#f4f1fb] px-4 py-3 text-sm leading-6 text-[#342b4d]">
                      Hi, I&apos;m Sainath&apos;s portfolio assistant. Ask about his experience, skills, or projects, or share a job description and I&apos;ll assess the match using only his published profile.
                    </div>
                  </div>
                  <p className="mb-3 pl-11 text-[11px] font-semibold uppercase text-[#807891]">Try asking</p>
                  <div className="flex flex-wrap gap-2 pl-11">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => void sendMessage(suggestion)}
                        className="rounded-xl border border-violet-200 bg-white px-3 py-2 text-left text-xs leading-5 text-violet-900 transition hover:border-violet-400 hover:bg-violet-50"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`flex items-start gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${message.role === "user" ? "bg-[#e7e1f5] text-violet-900" : "bg-violet-100 text-violet-800"}`}>
                    {message.role === "user" ? <UserRound size={16} /> : <Bot size={17} />}
                  </div>
                  <div className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 sm:max-w-[78%] ${message.role === "user" ? "rounded-tr-sm bg-[#30234d] text-white" : "rounded-tl-sm bg-[#f4f1fb] text-[#342b4d]"}`}>
                    {message.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-800"><Bot size={17} /></div>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-[#f4f1fb] px-4 py-4" role="status" aria-label="Assistant is thinking">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-500 [animation-delay:-0.2s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-500 [animation-delay:-0.1s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-500" />
                  </div>
                </div>
              )}
              {error && (
                <div className="flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-800" role="alert">
                  <CircleAlert size={17} className="mt-0.5 shrink-0" />{error}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="shrink-0 border-t border-violet-100 bg-white/80 p-4 sm:px-7 sm:py-5">
              <label htmlFor="portfolio-question" className="sr-only">Ask about Sainath or paste a job description</label>
              <div className="flex items-end gap-2 rounded-xl border border-violet-200 bg-white p-2 shadow-sm transition focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100">
                <textarea
                  id="portfolio-question"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      void sendMessage(input);
                    }
                  }}
                  placeholder="Ask a question or paste a job description..."
                  maxLength={2400}
                  rows={2}
                  className="max-h-36 min-h-12 flex-1 resize-y bg-transparent px-2 py-2 text-sm leading-5 text-[#211b39] outline-none placeholder:text-[#928aa2]"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-800 text-white transition hover:bg-violet-950 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send message"
                  title="Send message"
                >
                  <ArrowUp size={18} />
                </button>
              </div>
              <p className="mt-2 flex items-center justify-between gap-3 px-1 text-[11px] text-[#827b91]">
                <span>Only published portfolio details are used.</span>
                <span className="hidden items-center gap-1 sm:inline-flex"><ArrowDown size={12} /> Enter to send · Shift + Enter for a new line</span>
              </p>
            </form>
          </section>

          <aside className="flex flex-col gap-5">
            <section className="overflow-hidden rounded-2xl bg-[#261c42] text-white shadow-[0_24px_64px_-36px_rgba(38,28,66,0.8)]">
              <div className="relative px-5 pb-5 pt-6">
                <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full border border-cyan-200/20" />
                <div className="absolute -right-4 -top-6 h-24 w-24 rounded-full border border-fuchsia-200/20" />
                <div className="relative mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/20 bg-white/5 text-cyan-200">
                  <BriefcaseBusiness size={20} />
                </div>
                <p className="relative text-xs font-semibold uppercase text-cyan-200">Profile scope</p>
                <h2 className="relative mt-1 text-xl font-semibold">A focused introduction.</h2>
                <p className="relative mt-2 text-sm leading-6 text-white/70">The assistant can discuss Sainath&apos;s listed professional experience, technical skills, and project work.</p>
              </div>
              <div className="border-t border-white/10 px-5 py-4">
                <ul className="space-y-3 text-sm text-white/85">
                  <li className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />Customer success & CDN</li>
                  <li className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300" />Backend engineering</li>
                  <li className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />Evidence-based role fit</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-violet-200/80 bg-white/70 p-5 backdrop-blur-lg">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-violet-950"><Sparkles size={15} className="text-fuchsia-600" /> Better fit checks</div>
              <p className="text-sm leading-6 text-[#625b76]">Include the role requirements or full job description. The assistant will map them to listed experience and call out where the portfolio has no evidence.</p>
            </section>
          </aside>
        </div>
        <footer className="pt-5 text-center text-[11px] text-[#857d95]">AI-generated responses are based on the published portfolio and may require verification.</footer>
      </section>
    </main>
  );
}
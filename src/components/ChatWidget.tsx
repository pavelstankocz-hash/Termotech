import { Link } from "@tanstack/react-router";
import { MessageCircle, Send, X, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useI18n } from "@/lib/i18n";

type Msg = { role: "user" | "assistant"; content: string };

export function ChatWidget() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    setFailed(false);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as { text?: string };
      if (!data.text) throw new Error("empty");
      setMessages([...next, { role: "assistant", content: data.text }]);
    } catch {
      setFailed(true);
      setMessages([...next, { role: "assistant", content: t("chat.error") }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[520px] max-h-[75vh] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          <div className="flex items-start justify-between gap-2 border-b border-border bg-primary px-4 py-3 text-primary-foreground">
            <div>
              <p className="font-semibold leading-tight">{t("chat.title")}</p>
              <p className="text-xs opacity-90">{t("chat.sub")}</p>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="rounded p-1 hover:bg-black/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-sm">
            <div className="max-w-[85%] rounded-lg bg-muted px-3 py-2 text-foreground">
              {t("chat.greeting")}
            </div>
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] whitespace-pre-wrap rounded-lg bg-primary px-3 py-2 text-primary-foreground"
                    : "max-w-[85%] whitespace-pre-wrap rounded-lg bg-muted px-3 py-2 text-foreground"
                }
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="max-w-[85%] rounded-lg bg-muted px-3 py-2 text-muted-foreground">
                <span className="animate-pulse">•••</span>
              </div>
            )}
          </div>

          <div className="border-t border-border px-4 py-2">
            <p className="mb-2 text-xs text-muted-foreground">
              {failed ? t("chat.error") : t("chat.fallbackNote")}
            </p>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mb-2 inline-flex items-center gap-2 text-xs font-medium text-primary hover:underline"
            >
              <Mail className="h-3.5 w-3.5" />
              {t("chat.contactCta")}
            </Link>
            <form onSubmit={send} className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("chat.placeholder")}
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label={t("chat.send")}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("chat.open")}
        className="fixed bottom-6 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
}

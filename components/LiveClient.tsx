"use client";

import { FormEvent, useEffect, useState } from "react";
import { defaultChat, defaultSettings } from "@/lib/defaults";
import { loadChat, loadSettings, saveChat } from "@/lib/storage";
import { ChatMessage, SiteSettings } from "@/lib/types";

export function LiveClient() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [messages, setMessages] = useState<ChatMessage[]>(defaultChat);
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setSettings(loadSettings());
    setMessages(loadChat());
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    const nextMessage: ChatMessage = {
      id: crypto.randomUUID(),
      author: author.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    const next = [...messages, nextMessage];
    setMessages(next);
    saveChat(next);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-full space-y-3">
      {/* TITRE */}
      <div className="text-sm font-semibold text-white/80">
        💬 Chat
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {messages.length === 0 ? (
          <div className="text-sm text-white/40">
            Aucun message
          </div>
        ) : (
          [...messages].reverse().map((msg) => (
            <div
              key={msg.id}
              className="bg-black/50 border border-white/10 rounded-lg p-2"
            >
              <div className="flex justify-between text-xs text-white/60">
                <span className="font-semibold text-white">
                  {msg.author}
                </span>

                <span suppressHydrationWarning>
                  {new Date(msg.createdAt).toLocaleTimeString("fr-FR")}
                </span>
              </div>

              <div className="text-sm mt-1 text-white/80">
                {msg.message}
              </div>
            </div>
          ))
        )}
      </div>

      {/* INPUT */}
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Nom"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full bg-black border border-white/10 rounded px-2 py-1 text-sm outline-none"
        />

        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-black border border-white/10 rounded px-2 py-1 text-sm outline-none"
        />

        <button
          type="submit"
          className="w-full bg-red-600 py-1 rounded text-sm font-semibold"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
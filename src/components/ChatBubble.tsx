"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ChatBubble() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 w-80 h-96 bg-zinc-800 rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden"
                    >
                        <div className="bg-gradient-to-r from-primary to-secondary p-4 flex justify-between items-center">
                            <span className="font-bold text-white">{t('chat.title')}</span>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto space-y-4">
                            <div className="bg-white/10 p-3 rounded-lg rounded-tl-none self-start max-w-[80%] text-sm">
                                {t('chat.greeting')}
                            </div>
                        </div>
                        <div className="p-3 border-t border-white/10 bg-zinc-900 flex gap-2">
                            <input
                                type="text"
                                placeholder={t('chat.placeholder')}
                                className="flex-1 bg-transparent text-sm text-white focus:outline-none"
                            />
                            <button className="text-primary hover:text-secondary transition-colors">
                                <IconSend />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg text-white"
            >
                {isOpen ? <X /> : <MessageCircle />}
            </motion.button>
        </div>
    );
}

function IconSend() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
    );
}

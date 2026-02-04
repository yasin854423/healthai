"use client";

import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/lib/i18n';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'tr', label: 'TR' },
        { code: 'es', label: 'ES' },
    ];

    return (
        <div className="fixed top-6 right-6 z-50 flex gap-2 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${language === lang.code
                        ? 'bg-primary text-white'
                        : 'text-gray-400 hover:text-white'
                        }`}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}

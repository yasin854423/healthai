"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
    const { t } = useLanguage();

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                            Health AI
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                {t('nav.home')}
                            </Link>

                            <Link href="/analysis" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                {t('nav.analysis')}
                            </Link>

                            <div className="relative group">
                                <button className="text-gray-300 group-hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                                    {t('nav.innovations')}
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        <Link href="/#neuroscan" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white" role="menuitem">
                                            {t('nav.neuroscan')}
                                        </Link>
                                        <Link href="/gynecology" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white" role="menuitem">
                                            {t('nav.gynecology')}
                                        </Link>
                                        <Link href="/#cardio" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white" role="menuitem">
                                            {t('nav.cardio')}
                                        </Link>
                                        <Link href="/genomics" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white" role="menuitem">
                                            {t('nav.genom')}
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                {t('nav.contact')}
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}

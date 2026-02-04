"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function DemoRequest() {
    const { t } = useLanguage();
    return (
        <section className="py-20 px-4 bg-zinc-900/50">
            <div className="max-w-xl mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    {t('demo.title')}
                </motion.h2>
                <motion.form
                    className="space-y-4 text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-400">{t('demo.name')}</label>
                        <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Dr. Jane Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-400">{t('demo.email')}</label>
                        <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="jane@hospital.org" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-400">{t('demo.org')}</label>
                        <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="General Hospital" />
                    </div>
                    <button type="button" className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity mt-4">
                        {t('demo.button')}
                    </button>
                </motion.form>
            </div>
        </section>
    );
}

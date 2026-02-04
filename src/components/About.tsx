"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
export default function About() {
    const { t } = useLanguage();
    return (
        <section className="py-20 px-8 bg-zinc-900/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold mb-8 text-primary">{t('about.title')}</h2>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {t('about.p1')}
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        {t('about.p2')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

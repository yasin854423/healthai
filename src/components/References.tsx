"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const partners = ["Global Health Corp", "Future MedSys", "Neural Diagnosis Inc.", "NanoBio Tech", "CardioSmart Solutions"];

export default function References() {
    const { t } = useLanguage();
    return (
        <section className="py-16 bg-black border-y border-white/5">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-xl text-gray-500 mb-8 font-semibold uppercase tracking-widest">{t('references.title')}</h3>
                <div className="flex flex-wrap justify-center gap-12 items-center opacity-70">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            className="text-2xl font-bold text-gray-400 hover:text-white transition-colors cursor-default"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {partner}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

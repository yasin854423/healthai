"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Dna, Pill, FileText, Activity } from "lucide-react";

export default function GenomicsPage() {
    const { t } = useLanguage();

    const cards = [
        {
            key: "drug_comp",
            icon: Pill,
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            key: "genetic_profile",
            icon: Dna,
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        },
        {
            key: "personalize",
            icon: Activity,
            color: "text-green-400",
            bg: "bg-green-500/10",
            border: "border-green-500/20"
        },
        {
            key: "sample_report",
            icon: FileText,
            color: "text-pink-400",
            bg: "bg-pink-500/10",
            border: "border-pink-500/20"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-24 px-4 pb-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600 mb-6">
                        {t('genomics.title')}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t('genomics.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.key}
                                className={`p-8 rounded-2xl border ${card.border} ${card.bg} hover:scale-[1.02] transition-transform cursor-pointer group`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className={`w-16 h-16 rounded-full ${card.bg} flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors`}>
                                    <Icon className={`w-8 h-8 ${card.color}`} />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                                    {t(`genomics.cards.${card.key}.title`)}
                                </h2>
                                <p className="text-gray-400 leading-relaxed">
                                    {t(`genomics.cards.${card.key}.desc`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

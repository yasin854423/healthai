"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function GynecologyPage() {
    const { t } = useLanguage();

    const categories = [
        {
            title: "gynecology.high",
            color: "border-green-500/50 bg-green-500/5",
            badge: "text-green-400 bg-green-400/10",
            items: [
                { key: "gynecology.diseases.pcos", score: "98%" },
                { key: "gynecology.diseases.gdm", score: "96%" },
                { key: "gynecology.diseases.rh", score: "99%" },
            ]
        },
        {
            title: "gynecology.medium",
            color: "border-yellow-500/50 bg-yellow-500/5",
            badge: "text-yellow-400 bg-yellow-400/10",
            items: [
                { key: "gynecology.diseases.preeclampsia", score: "88%" },
                { key: "gynecology.diseases.ectopic", score: "85%" },
                { key: "gynecology.diseases.endo", score: "82%" },
                { key: "gynecology.diseases.molar", score: "80%" },
                { key: "gynecology.diseases.eclampsia", score: "85%" },
            ]
        },
        {
            title: "gynecology.low",
            color: "border-red-500/50 bg-red-500/5",
            badge: "text-red-400 bg-red-400/10",
            items: [
                { key: "gynecology.diseases.ovarian_ca", score: "72%" },
                { key: "gynecology.diseases.endo_ca", score: "70%" },
            ]
        }
    ];

    return (
        <main className="min-h-screen pt-24 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
                        {t('gynecology.title')}
                    </h1>
                    <p className="text-xl text-gray-400">
                        {t('gynecology.subtitle')}
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.2 }}
                        >
                            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${category.badge.replace('bg-', 'text-').split(' ')[0]}`}>
                                <span className={`w-3 h-3 rounded-full ${category.badge.split(' ')[1].replace('/10', '')}`} />
                                {t(category.title)}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.items.map((item, itemIndex) => (
                                    <motion.div
                                        key={itemIndex}
                                        className={`p-6 rounded-xl border ${category.color} hover:bg-white/5 transition-colors cursor-default backdrop-blur-sm`}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-semibold text-white">{t(item.key)}</h3>
                                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${category.badge}`}>
                                                AI: {item.score}
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-800 h-1.5 rounded-full mt-4 overflow-hidden">
                                            <motion.div
                                                className={`h-full ${category.badge.split(' ')[1].replace('/10', '')}`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: item.score }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}

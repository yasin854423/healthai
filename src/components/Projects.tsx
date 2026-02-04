"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Projects() {
    const { t } = useLanguage();

    const projects = [
        {
            id: "neuroscan",
            title: "projects.p1_title",
            description: "projects.p1_desc",
            tags: ["MRI", "Deep Learning", "Neurology"],
            color: "bg-blue-500/10 border-blue-500/50 text-blue-400",
            link: null
        },
        {
            id: null,
            title: "projects.p_gyn_title",
            description: "projects.p_gyn_desc",
            tags: ["AI", "Gynecology", "Diagnostics"],
            color: "bg-pink-500/10 border-pink-500/50 text-pink-400",
            link: "/gynecology"
        },
        {
            id: "cardio",
            title: "projects.p2_title",
            description: "projects.p2_desc",
            tags: ["IoT", "Real-time", "Cardiology"],
            color: "bg-teal-500/10 border-teal-500/50 text-teal-400",
            link: null
        },
        {
            id: null,
            title: "projects.p3_title",
            description: "projects.p3_desc",
            tags: ["Genomics", "Big Data", "Oncology"],
            color: "bg-indigo-500/10 border-indigo-500/50 text-indigo-400",
            link: "/genomics"
        }
    ];

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {t('projects.title')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => {
                        const CardContent = (
                            <motion.div
                                className={`h-full p-8 rounded-xl border ${project.color} hover:scale-105 transition-transform cursor-pointer flex flex-col`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="text-2xl font-bold mb-4 text-white">{t(project.title)}</h3>
                                <p className="text-gray-300 mb-6 flex-grow">{t(project.description)}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-2 py-1 rounded-full bg-white/10 text-white">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );

                        return project.link ? (
                            <Link key={index} href={project.link} className="block h-full">
                                {CardContent}
                            </Link>
                        ) : (
                            <div key={index} id={project.id || undefined} className="block h-full scroll-mt-24">
                                {CardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

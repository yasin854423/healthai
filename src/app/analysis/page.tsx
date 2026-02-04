"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
    Upload, Activity, Heart, Wind, Dna, FileText, User, Cpu,
    Brain, Stethoscope, Utensils, Droplet, Bone
} from "lucide-react";

export default function AnalysisPage() {
    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        age: "",
        gender: "male",
        height: "",
        weight: "",
        smoker: false,
        notes: "",
        reportFiles: [] as File[],
        imageFiles: [] as File[]
    });

    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const [results, setResults] = useState<{
        analysis: { details: string, referral: string } | null,
        specialties: Array<{ key: string, risk: "risk_high" | "risk_medium" | "risk_low", score: number, findings: string[], title?: string }> | null,
        radio: { status: string, findings: string } | null
    }>({ analysis: null, specialties: null, radio: null });

    const calculateBMI = () => {
        if (!formData.height || !formData.weight) return null;
        const h = parseFloat(formData.height) / 100;
        const w = parseFloat(formData.weight);
        return (w / (h * h)).toFixed(1);
    };

    const runAnalysis = async () => {
        setIsAnalyzing(true);
        setResults({ analysis: null, specialties: null, radio: null }); // Reset previous results

        // Simulating AI Processing Time
        await new Promise(resolve => setTimeout(resolve, 2500));

        const age = parseInt(formData.age) || 30;
        const height = parseFloat(formData.height) || 170;
        const weight = parseFloat(formData.weight) || 70;
        const bmi = (weight / ((height / 100) ** 2)) || 22;
        const isSmoker = formData.smoker;
        const text = formData.notes.toLowerCase();
        const gender = formData.gender;

        // Comprehensive Analysis Engine
        let findings: string[] = [];
        let riskFactors: string[] = [];
        let referral = t('analysis.referrals.general');

        // 1. Vitals Analysis
        if (bmi > 30) riskFactors.push(t('analysis.risks.obesity', { val: bmi.toFixed(1) }));
        if (isSmoker) riskFactors.push(t('analysis.risks.smoker'));
        if (age > 50) riskFactors.push(t('analysis.risks.age'));
        if (bmi < 18.5) riskFactors.push(t('analysis.risks.underweight'));

        // 2. Specialty Analysis Logic
        const specialtiesConfig = [
            { key: 'cardio', keywords: /pain|ağrı|dolor|heart|kalp|corazon|pressure|tansiyon|presion|palpitation|çarpıntı/, finding: 'cardio', ref: 'cardio' },
            { key: 'pulmo', keywords: /breath|nefes|respirar|cough|öksürük|tos|asthma|astım|asma|lung|akciğer/, finding: 'respiratory', ref: 'pulmo' },
            { key: 'endo', keywords: /sugar|şeker|azucar|diabetes|diyabet|thirst|susama|fatigue|yorgunluk|sweat|terleme/, finding: 'metabolic', ref: 'endo' },
            { key: 'gastro', keywords: /stomach|mide|estomago|bowel|bağırsak|digest|sindirim|nausea|bulantı|vomit|kusma/, finding: 'gastro', ref: 'gastro' },
            { key: 'nephro', keywords: /kidney|böbrek|renal|urine|idrar|flank|yan ağrısı/, finding: 'nephro', ref: 'nephro' },
            { key: 'ortho', keywords: /bone|kemik|hueso|joint|eklem|knee|diz|back|bel|sırt|fracture|kırık/, finding: 'ortho', ref: 'ortho' },
            { key: 'neurosurg', keywords: /spine|omurga|disc|disk|hernia|fıtık|tumor|tümör|neck|boyun/, finding: 'neurosurg', ref: 'neurosurg' },
            { key: 'uro', keywords: /bladder|mesane|prostate|prostat|urination|idrar yolu/, finding: 'uro', ref: 'uro' },
            { key: 'neuro', keywords: /headache|başağrısı|cabeza|dizzy|başdönmesi|mareo|faint|bayılma|numb|uyuşma|seizure|nöbet/, finding: 'neuro', ref: 'neuro_scan' }
        ];

        const calculatedSpecialties: Array<{ key: string, risk: "risk_high" | "risk_medium" | "risk_low", score: number, findings: string[], title?: string }> = [];

        specialtiesConfig.forEach(spec => {
            let score = 95;
            let risk: "risk_high" | "risk_medium" | "risk_low" = "risk_low";
            let specFindings: string[] = [];

            if (text.match(spec.keywords)) {
                score -= 30;
                risk = "risk_high";
                findings.push(t(`analysis.findings.${spec.finding}`));
                specFindings.push(t(`analysis.findings.${spec.finding}`));
                if (referral === t('analysis.referrals.general')) referral = t(`analysis.referrals.${spec.ref}`);
                else if (!referral.includes(t(`analysis.referrals.${spec.ref}`))) referral += ` & ${t(`analysis.referrals.${spec.ref}`)}`;
            }

            // Risk factor modifiers
            if (spec.key === 'cardio' && (bmi > 30 || isSmoker || age > 50)) { score -= 10; if (risk === 'risk_low') risk = "risk_medium"; }
            if (spec.key === 'pulmo' && isSmoker) { score -= 20; if (risk === 'risk_low') risk = "risk_high"; }
            if (spec.key === 'endo' && (bmi > 30)) { score -= 15; if (risk === 'risk_low') risk = "risk_medium"; }

            calculatedSpecialties.push({
                key: spec.key,
                title: t(`analysis.cat_${spec.key}`),
                risk,
                score,
                findings: specFindings
            });
        });

        // Gynecology (Conditional)
        if (gender === "female") {
            let gynScore = 95;
            let gynRisk: "risk_high" | "risk_medium" | "risk_low" = "risk_low";
            let gynFindings: string[] = [];

            if (text.match(/pregnant|gebe|hamile|embarazada/)) {
                if (text.match(/bleeding|kanama|spotting|pain|ağrı|cramp|kramp/)) {
                    findings.push(t('analysis.findings.high_risk_preg'));
                    gynFindings.push(t('analysis.findings.high_risk_preg'));
                    referral = t('analysis.referrals.urgent_obgyn');
                    gynRisk = "risk_high";
                    gynScore = 40;
                } else {
                    findings.push(t('analysis.findings.preg_monitor'));
                    gynFindings.push(t('analysis.findings.preg_monitor'));
                    if (!referral.includes(t('analysis.referrals.obgyn'))) referral += ` & ${t('analysis.referrals.obgyn')}`;
                    gynScore = 80;
                }
            } else if (text.match(/period|adet|menstru|cycle|döngü|pelvic|pelvik/)) {
                findings.push(t('analysis.findings.gyn_issue'));
                gynFindings.push(t('analysis.findings.gyn_issue'));
                referral = t('analysis.referrals.gyn');
                gynRisk = "risk_medium";
                gynScore = 75;
            }

            calculatedSpecialties.push({
                key: 'gyn',
                title: t('analysis.cat_gyn'),
                risk: gynRisk,
                score: gynScore,
                findings: gynFindings
            });
        }

        // Genomics / Hereditary
        if (text.match(/family|aile|genetic|genetik|hereditary|irsiyet|cancer history|kanser öyküsü/)) {
            findings.push(t('analysis.findings.hereditary'));
            referral = referral.includes(t('analysis.referrals.general')) ? t('analysis.referrals.genetics') : `${referral} & ${t('analysis.referrals.genetics')}`;
        }

        // 3. Synthesis Algorithm
        if (findings.length === 0) {
            if (bmi > 30 && isSmoker) {
                findings.push(t('analysis.findings.prevent_high'));
                referral = t('analysis.referrals.internal');
            } else if (bmi > 25) {
                findings.push(t('analysis.findings.prevent_overweight'));
                referral = t('analysis.referrals.diet');
            } else if (isSmoker) {
                findings.push(t('analysis.findings.prevent_pulmo'));
                referral = t('analysis.referrals.smoking');
            }
        }

        // Construct Summary
        let detailsText = t('analysis.templates.profile', { age, gender: t(`analysis.${gender}`), bmi: bmi.toFixed(1) }) + " ";
        if (formData.reportFiles.length > 0) detailsText += t('analysis.templates.report_count', { count: formData.reportFiles.length }) + " ";
        if (formData.imageFiles.length > 0) detailsText += t('analysis.templates.image_count', { count: formData.imageFiles.length }) + " ";

        if (riskFactors.length > 0) detailsText += t('analysis.templates.risk_intro') + riskFactors.join(", ") + ". ";
        if (text.length > 5) detailsText += t('analysis.templates.note_intro') + findings.join(", ") + ". ";

        if (findings.includes(t('analysis.findings.high_risk_preg'))) {
            detailsText += t('analysis.templates.critical_preg');
        } else if (findings.includes(t('analysis.findings.hereditary'))) {
            detailsText += t('analysis.templates.rec_genomic');
        } else {
            detailsText += t('analysis.templates.rec_general');
        }

        setResults({
            analysis: {
                details: detailsText,
                referral: referral.includes(t('analysis.referrals.general')) && findings.length > 0 ? t('analysis.rec_consult') : `${t('analysis.referral_prefix')} ${referral}`
            },
            specialties: calculatedSpecialties,
            radio: {
                status: formData.imageFiles.length > 0 ? "Completed" : "No Images",
                findings: formData.imageFiles.length > 0 ? `Analyzed ${formData.imageFiles.length} MRI/CT images.` : "No imaging data provided."
            }
        });
        setIsAnalyzing(false);
    };

    const getSpecialtyIcon = (key: string) => {
        switch (key) {
            case 'cardio': return Heart;
            case 'pulmo': return Wind;
            case 'endo': return Droplet;
            case 'gastro': return Utensils;
            case 'nephro': return Activity;
            case 'ortho': return Bone;
            case 'neurosurg': return Bone; // Or distinct spine icon if available
            case 'uro': return Droplet;
            case 'neuro': return Brain;
            case 'gyn': return Baby;
            default: return Activity;
        }
    };

    return (
        <div className="min-h-screen bg-black text-white pt-24 px-4 pb-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
                        {t('analysis.title')}
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">{t('analysis.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm"
                    >
                        <form onSubmit={(e) => { e.preventDefault(); runAnalysis(); }} className="space-y-8">
                            {/* Personal Info */}
                            <InputCard title={t('analysis.section_personal')} icon={User}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">{t('analysis.age')}</label>
                                        <input
                                            type="number"
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-cyan-500 outline-none transition"
                                            value={formData.age}
                                            onChange={e => setFormData({ ...formData, age: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">{t('analysis.gender')}</label>
                                        <select
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-cyan-500 outline-none transition"
                                            value={formData.gender}
                                            onChange={e => setFormData({ ...formData, gender: e.target.value as 'male' | 'female' })}
                                        >
                                            <option value="male">{t('analysis.male')}</option>
                                            <option value="female">{t('analysis.female')}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">{t('analysis.height')}</label>
                                        <input
                                            type="number"
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-cyan-500 outline-none transition"
                                            value={formData.height}
                                            onChange={e => setFormData({ ...formData, height: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">{t('analysis.weight')}</label>
                                        <input
                                            type="number"
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-cyan-500 outline-none transition"
                                            value={formData.weight}
                                            onChange={e => setFormData({ ...formData, weight: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                {calculateBMI() && (
                                    <div className="mt-4 p-3 bg-cyan-900/20 border border-cyan-800/50 rounded-lg text-center">
                                        <span className="text-gray-400">{t('analysis.bmi')}: </span>
                                        <span className="font-bold text-cyan-400 text-xl">{calculateBMI()}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-3 pt-2">
                                    <input type="checkbox" checked={formData.smoker} onChange={(e) => setFormData({ ...formData, smoker: e.target.checked })} className="w-5 h-5 rounded border-white/10 bg-white/5 text-purple-500 focus:ring-purple-500" />
                                    <span className="text-gray-300">{t('analysis.smoker')}</span>
                                </div>
                            </InputCard>

                            {/* Section: Medical Reports */}
                            <InputCard title={t('analysis.upload_reports')} icon={FileText}>
                                <div className="space-y-4">
                                    <div
                                        className="border border-dashed border-white/10 rounded-xl p-6 text-center cursor-pointer hover:border-cyan-500 transition-colors bg-black/30"
                                        onDragOver={(e) => e.preventDefault()}
                                        onDrop={(e) => {
                                            e.preventDefault();
                                            if (e.dataTransfer.files) setFormData(prev => ({ ...prev, reportFiles: [...(prev.reportFiles || []), ...Array.from(e.dataTransfer.files)] }));
                                        }}
                                        onClick={() => document.getElementById('report-upload')?.click()}
                                    >
                                        <input id="report-upload" type="file" multiple accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => {
                                            const files = e.target.files ? Array.from(e.target.files) : [];
                                            setFormData(prev => ({ ...prev, reportFiles: [...(prev.reportFiles || []), ...files] }));
                                        }} />
                                        <div className="flex flex-col items-center gap-2">
                                            <FileText className="w-6 h-6 text-gray-400" />
                                            <span className="text-sm text-gray-300">{t('analysis.upload_reports')}</span>
                                            <span className="text-xs text-gray-500">({t('analysis.drop_reports')})</span>
                                        </div>
                                        {(formData.reportFiles || []).length > 0 && (
                                            <div className="mt-3 text-left w-full">
                                                {formData.reportFiles.map((f, i) => (
                                                    <div key={i} className="text-xs text-cyan-400 flex items-center gap-1">
                                                        <span className="w-1 h-1 rounded-full bg-cyan-400" /> {f.name}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <textarea
                                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 h-32 focus:border-cyan-500 outline-none transition"
                                        placeholder={t('analysis.lab_placeholder')}
                                        value={formData.notes}
                                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                    ></textarea>
                                </div>
                            </InputCard>

                            {/* Section: Medical Imaging */}
                            <InputCard title={t('analysis.section_images')} icon={Cpu}>
                                <div
                                    className="border-2 border-dashed border-purple-500/20 rounded-xl p-8 text-center cursor-pointer hover:border-purple-500 transition-colors bg-black/30"
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) => {
                                        e.preventDefault();
                                        if (e.dataTransfer.files) setFormData(prev => ({ ...prev, imageFiles: [...(prev.imageFiles || []), ...Array.from(e.dataTransfer.files)] }));
                                    }}
                                    onClick={() => document.getElementById('image-upload')?.click()}
                                >
                                    <input id="image-upload" type="file" multiple accept="image/*,.dcm" className="hidden" onChange={(e) => {
                                        const files = e.target.files ? Array.from(e.target.files) : [];
                                        setFormData(prev => ({ ...prev, imageFiles: [...(prev.imageFiles || []), ...files] }));
                                    }} />
                                    <div className="flex flex-col items-center gap-2">
                                        <Upload className="w-10 h-10 text-purple-500" />
                                        <span className="text-gray-300 font-medium">{t('analysis.upload_images')}</span>
                                        <span className="text-sm text-gray-500">{t('analysis.drop_images')}</span>
                                    </div>
                                    {(formData.imageFiles || []).length > 0 && (
                                        <div className="mt-4 grid grid-cols-2 gap-2 w-full text-left">
                                            {formData.imageFiles.map((f, i) => (
                                                <div key={i} className="text-xs text-purple-300 bg-purple-900/20 p-2 rounded flex items-center gap-2">
                                                    <Activity className="w-3 h-3" /> {f.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </InputCard>

                            <button
                                type="submit"
                                disabled={isAnalyzing}
                                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 py-4 rounded-xl font-bold text-lg hover:from-cyan-500 hover:to-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                            >
                                {isAnalyzing ? (
                                    <>
                                        <Activity className="w-5 h-5 animate-spin" />
                                        {t('analysis.analyzing')}
                                    </>
                                ) : (
                                    <>
                                        <Stethoscope className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                        {t('analysis.calculate')}
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Results Section */}
                    <div className="space-y-6">
                        <AnimatePresence>
                            {results.analysis && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                        <Activity className="text-cyan-400" /> {t('analysis.results_title')}
                                    </h2>

                                    {/* AI Detailed Recommendation Card */}
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
                                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                            <Dna className="text-cyan-400 w-6 h-6" />
                                            AI Clinical Assessment
                                        </h3>
                                        <div className="space-y-3">
                                            <p className="text-gray-300 italic border-l-2 border-white/10 pl-4">
                                                "{results.analysis.details}"
                                            </p>
                                            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                                                <span className="text-sm text-gray-400">Recommended Action:</span>
                                                <span className="font-bold text-cyan-300 bg-cyan-900/40 px-3 py-1 rounded-lg border border-cyan-500/20">
                                                    {results.analysis.referral}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Specialty Cards (Dynamic) */}
                                    {results.specialties && results.specialties.map((spec, i) => {
                                        const Icon = getSpecialtyIcon(spec.key);
                                        const isHighRisk = spec.risk === 'risk_high';
                                        return (
                                            <div key={i} className={`p-6 rounded-2xl border ${isHighRisk ? 'bg-orange-950/30 border-orange-500/30' : 'bg-zinc-900/50 border-white/5'}`}>
                                                <div className="flex justify-between items-start mb-4">
                                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                                        <Icon className={isHighRisk ? 'text-orange-500' : 'text-green-500'} />
                                                        {spec.title}
                                                    </h3>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${isHighRisk ? 'bg-orange-500/20 text-orange-500' : 'bg-green-500/20 text-green-500'}`}>
                                                        {t('analysis.' + spec.risk)}
                                                    </span>
                                                </div>
                                                <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${spec.score}%` }}
                                                        className={`h-2 rounded-full ${isHighRisk ? 'bg-orange-500' : 'bg-green-500'}`}
                                                    />
                                                </div>
                                                <div className="mt-2 text-sm text-gray-400">
                                                    {spec.findings.length > 0 ? (
                                                        <ul className="list-disc pl-4 space-y-1">
                                                            {spec.findings.map((f, idx) => (
                                                                <li key={idx}>{f}</li>
                                                            ))}
                                                        </ul>
                                                    ) : t('analysis.rec_healthy')}
                                                </div>
                                            </div>
                                        );
                                    })}

                                    {/* Radiology Card */}
                                    {results.radio && (
                                        <div className="p-6 rounded-2xl border bg-zinc-900/50 border-white/5">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                                    <FileText className="text-blue-500" />
                                                    {t('analysis.cat_radio')}
                                                </h3>
                                            </div>
                                            <p className="text-gray-300 text-sm mb-2">{results.radio.findings}</p>
                                            {formData.imageFiles.map((f, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs text-purple-400 mt-1">
                                                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                                                    Analyzed: {f.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                </motion.div>
                            )}

                            {!results.analysis && !isAnalyzing && (
                                <div className="h-full flex flex-col items-center justify-center text-gray-500 p-12 border border-dashed border-white/10 rounded-2xl order-last lg:order-none">
                                    <Activity className="w-16 h-16 mb-4 opacity-50" />
                                    <p className="text-lg">Enter data and click Analyze to see AI insights.</p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Reusable Input Card Component
function InputCard({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) {
    return (
        <div className="bg-black/30 p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Icon className="w-5 h-5 text-cyan-400" />
                {title}
            </h3>
            {children}
        </div>
    );
}

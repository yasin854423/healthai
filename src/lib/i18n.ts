export type Language = 'en' | 'tr' | 'es';

export const dictionary = {
    en: {
        hero: {
            title: "Health AI",
            subtitle: "Empowering Health with Artificial Intelligence.",
            description: "Revolutionizing patient care and diagnostics through advanced machine learning algorithms and predictive analytics."
        },
        about: {
            title: "About Us",
            p1: "We are a team of dedicated AI researchers and medical professionals committed to transforming healthcare. Our mission is to make advanced diagnostic tools accessible to everyone, everywhere.",
            p2: "By leveraging state-of-the-art deep learning, we unlock patterns in medical data that were previously invisible, enabling earlier detection and more personalized treatment plans.",
            cardTitle: "AI + Biology"
        },
        projects: {
            title: "Our Innovations",
            p1_title: "NeuroScan AI",
            p1_desc: "Early detection of neurodegenerative diseases using MRI analysis.",
            p_gyn_title: "Gynecology AI",
            p_gyn_desc: "AI-driven analysis for women's health conditions.",
            p2_title: "CardioPredict",
            p2_desc: "Real-time heart failure prediction from wearable device data.",
            p3_title: "GenomicInsight",
            p3_desc: "Personalized medicine recommendations based on genomic sequencing."
        },
        references: {
            title: "Trusted By"
        },
        demo: {
            title: "Request a Demo",
            name: "Name",
            email: "Email",
            org: "Organization",
            button: "Schedule Demo"
        },
        chat: {
            title: "Health AI Assistant",
            greeting: "Hello! How can I assist you with our AI diagnostic tools today?",
            placeholder: "Type a message..."
        },
        nav: {
            home: "Home",
            analysis: "AI Analysis",
            innovations: "Innovations",
            gynecology: "Gynecology Diseases",
            neuroscan: "NeuroScan AI",
            cardio: "CardioPredict",
            genom: "GenomicInsight",
            contact: "Contact"
        },
        analysis: {
            title: "Patient Health Analysis",
            subtitle: "Comprehensive AI-driven health assessment",
            section_personal: "Personal Information",
            habits: "Lifestyle & Habits",
            clinical: "Clinical Data",
            uploads: "Reports & Imaging",
            age: "Age",
            gender: "Gender",
            male: "Male",
            female: "Female",
            height: "Height (cm)",
            weight: "Weight (kg)",
            bmi: "BMI Score",
            calculate: "Calculate Analysis",
            analyzing: "AI Analyzing...",
            smoking: "Smoking Status",
            smoker: "Smoker",
            non_smoker: "Non-Smoker",
            occasional: "Occasional",
            lab_findings: "Clinical Report Notes",
            lab_placeholder: "Type detailed clinical findings here...",
            section_reports: "Medical Reports",
            upload_reports: "Upload PDF/DOC Reports",
            section_images: "Medical Imaging",
            upload_images: "Upload MRI/CT Images",
            drop_reports: "Drag reports here",
            drop_images: "Drag images here",
            results_title: "AI Analysis Results",
            risk_low: "Low Risk",
            risk_medium: "Moderate Risk",
            risk_high: "High Risk",
            cat_cardio: "Cardiology Analysis",
            cat_endo: "Endocrinology",
            cat_pulmo: "Pulmonology Analysis",
            cat_gastro: "Gastroenterology",
            cat_nephro: "Nephrology",
            cat_ortho: "Orthopedics",
            cat_neurosurg: "Neurosurgery",
            cat_uro: "Urology",
            cat_radio: "Radiology & Imaging",
            recommendation: "AI Recommendation",
            rec_consult: "Consult Specialist",
            rec_healthy: "Healthy / Routine",
            // Dynamic Analysis Translations
            risks: {
                obesity: "Obesity (BMI: {{val}})",
                smoker: "Tobacco Use",
                age: "Advanced Age",
                underweight: "Underweight"
            },
            findings: {
                cardio: "Cardiovascular Anomaly",
                metabolic: "Metabolic Disorder",
                respiratory: "Respiratory Distress",
                neuro: "Neurological Symptoms",
                gastro: "Digestive/Gut Issue",
                nephro: "Kidney Function Issue",
                ortho: "Musculoskeletal Issue",
                neurosurg: "Cranial/Spinal Risk",
                uro: "Urological Issue",
                high_risk_preg: "High-Risk Pregnancy Complication",
                preg_monitor: "Pregnancy Monitoring",
                gyn_issue: "Gynecological Irregularity",
                hereditary: "Hereditary Risk Factor",
                prevent_high: "High Risk of Metabolic & Cardiac Disease",
                prevent_overweight: "Overweight - Health Monitoring Required",
                prevent_pulmo: "Pulmonary Risk Warning",
                healthy_routine: "Healthy Vitals - Routine Checkup"
            },
            referrals: {
                cardio: "Cardiology",
                endo: "Endocrinology",
                pulmo: "Pulmonology",
                neuro: "Neurology",
                neuro_scan: "Neurology (NeuroScan)",
                gastro: "Gastroenterology",
                nephro: "Nephrology",
                ortho: "Orthopedics",
                neurosurg: "Neurosurgery",
                uro: "Urology",
                cardio_endo: "Cardiology & Endocrinology",
                obgyn: "Obstetrics & Gynecology",
                urgent_obgyn: "URGENT Obstetrics / ER",
                gyn: "Gynecology",
                genetics: "Medical Genetics",
                internal: "Internal Medicine (Preventative)",
                diet: "Dietitian / Nutritionist",
                smoking: "Smoking Cessation Clinic",
                general: "General Check-up"
            },
            templates: {
                profile: "Patient Profile: {{age}}yo {{gender}}, BMI {{bmi}}.",
                report_count: "{{count}} Medical Reports analyzed.",
                image_count: "{{count}} Imaging Scans processed.",
                risk_intro: "Major Risk Factors identified: ",
                note_intro: "Clinical Notes indicate: ",
                critical_preg: "CRITICAL: Pregnancy complications detected. Immediate medical intervention recommended.",
                rec_genomic: "RECOMMENDATION: Due to family history, consider consulting our 'GenomicInsight' module for detailed DNA analysis.",
                rec_general: "AI analysis recommends coordination with the listed departments.",
                rec_routine: "Healthy Vitals - Routine Checkup"
            }
        },
        gynecology: {
            title: "Gynecology & Obstetrics AI Analysis",
            subtitle: "Predictability-based classification of common conditions.",
            high: "High Predictability",
            medium: "Medium Predictability",
            low: "Low Predictability",
            diseases: {
                pcos: "Polycystic Ovary Syndrome (PCOS)",
                gdm: "Gestational Diabetes",
                rh: "Rh Incompatibility",
                preeclampsia: "Preeclampsia",
                ectopic: "Ectopic Pregnancy",
                endo: "Endometriosis",
                molar: "Molar Pregnancy",
                eclampsia: "Eclampsia",
                ovarian_ca: "Ovarian Cancer",
                endo_ca: "Endometrial Cancer"
            }
        },
        genomics: {
            title: "GenomicInsight",
            subtitle: "Decode your DNA for personalized health and longevity.",
            cards: {
                drug_comp: {
                    title: "Drug Compatibility Query",
                    desc: "Analyze how your genes affect your response to medications."
                },
                genetic_profile: {
                    title: "Discover Genetic Profile",
                    desc: "Comprehensive breakdown of your genetic heritage and traits."
                },
                personalize: {
                    title: "Personalize Treatment",
                    desc: "Tailor medical treatments to your unique genetic makeup."
                },
                sample_report: {
                    title: "Review Sample Report",
                    desc: "View a detailed example of our AI-generated genomic analysis."
                }
            }
        }
    },
    tr: {
        hero: {
            title: "Sağlık AI",
            subtitle: "Yapay Zeka ile Sağlığı Güçlendiriyoruz.",
            description: "Gelişmiş makine öğrenimi algoritmaları ve öngörücü analizlerle hasta bakımı ve teşhiste devrim yaratıyoruz."
        },
        about: {
            title: "Hakkımızda",
            p1: "Biz, sağlık hizmetlerini dönüştürmeye kendini adamış yapay zeka araştırmacıları ve tıp uzmanlarından oluşan bir ekibiz. Misyonumuz, gelişmiş teşhis araçlarını herkes, her yerde erişilebilir kılmaktır.",
            p2: "En son derin öğrenme teknolojilerini kullanarak, tıbbi verilerdeki daha önce görünmeyen kalıpları ortaya çıkarıyor, erken teşhis ve daha kişiselleştirilmiş tedavi planlarını mümkün kılıyoruz.",
            cardTitle: "YZ + Biyoloji"
        },
        projects: {
            title: "İnovasyonlarımız",
            p1_title: "NeuroScan AI",
            p1_desc: "MRI analizi kullanarak nörodejeneratif hastalıkların erken tespiti.",
            p_gyn_title: "Kadın Doğum AI",
            p_gyn_desc: "Kadın hastalıkları için yapay zeka destekli analiz.",
            p2_title: "CardioPredict",
            p2_desc: "Giyilebilir cihaz verilerinden gerçek zamanlı kalp yetmezliği tahmini.",
            p3_title: "GenomicInsight",
            p3_desc: "Genomik dizilime dayalı kişiselleştirilmiş ilaç önerileri."
        },
        references: {
            title: "Referanslar"
        },
        demo: {
            title: "Demo Talep Et",
            name: "İsim",
            email: "E-posta",
            org: "Kurum",
            button: "Demo Planla"
        },
        chat: {
            title: "Sağlık Asistanı",
            greeting: "Merhaba! Bugün size AI teşhis araçlarımızla nasıl yardımcı olabilirim?",
            placeholder: "Bir mesaj yazın..."
        },
        nav: {
            home: "Ana Sayfa",
            analysis: "AI Analiz",
            innovations: "İnovasyonlar",
            gynecology: "Kadın Doğum Hastalıkları",
            neuroscan: "NeuroScan AI",
            cardio: "CardioPredict",
            genom: "GenomicInsight",
            contact: "İletişim"
        },
        analysis: {
            title: "Hasta Sağlık Analizi",
            subtitle: "Kapsamlı yapay zeka destekli sağlık değerlendirmesi",
            section_personal: "Kişisel Bilgiler",
            habits: "Yaşam Tarzı & Alışkanlıklar",
            clinical: "Klinik Veriler",
            uploads: "Raporlar & Görüntüleme",
            age: "Yaş",
            gender: "Cinsiyet",
            male: "Erkek",
            female: "Kadın",
            height: "Boy (cm)",
            weight: "Kilo (kg)",
            bmi: "Vücut Kitle İndeksi",
            calculate: "Analizi Başlat",
            analyzing: "Yapay Zeka Analiz Ediyor...",
            smoking: "Sigara Kullanımı",
            smoker: "Kullanıcı",
            non_smoker: "Kullanmıyor",
            occasional: "Arada Bir",
            lab_findings: "Klinik Rapor Notları",
            lab_placeholder: "Detaylı klinik bulguları buraya yazınız...",
            section_reports: "Tıbbi Raporlar",
            upload_reports: "PDF/DOC Rapor Yükle",
            section_images: "Tıbbi Görüntüleme",
            upload_images: "MR/CT Görüntü Yükle",
            drop_reports: "Raporları buraya bırakın",
            drop_images: "Görüntüleri buraya bırakın",
            results_title: "Yapay Zeka Analiz Sonuçları",
            risk_low: "Düşük Risk",
            risk_medium: "Orta Risk",
            risk_high: "Yüksek Risk",
            cat_cardio: "Kardiyoloji Analizi",
            cat_endo: "Endokrinoloji",
            cat_pulmo: "Göğüs Hastalıkları Analizi",
            cat_gastro: "Gastroenteroloji",
            cat_nephro: "Nefroloji",
            cat_ortho: "Ortopedi ve Travmatoloji",
            cat_neurosurg: "Beyin ve Sinir Cerrahisi",
            cat_uro: "Üroloji",
            cat_radio: "Radyoloji ve Görüntüleme",
            recommendation: "AI Önerisi",
            rec_consult: "Uzmana Danışın",
            rec_healthy: "Sağlıklı / Rutin",
            // Dynamic Analysis Translations
            risks: {
                obesity: "Obezite (VKI: {{val}})",
                smoker: "Tütün Kullanımı",
                age: "İleri Yaş",
                underweight: "Zayıf"
            },
            findings: {
                cardio: "Kardiyovasküler Anomali",
                metabolic: "Metabolik Bozukluk",
                respiratory: "Solunum Sıkıntısı",
                neuro: "Nörolojik Belirtiler",
                gastro: "Sindirim Sistemi Sorunu",
                nephro: "Böbrek Fonksiyon Bozukluğu",
                ortho: "Kas-İskelet Sistemi Sorunu",
                neurosurg: "Kranial/Spinal Risk",
                uro: "Ürolojik Sorun",
                high_risk_preg: "Yüksek Riskli Gebelik Komplikasyonu",
                preg_monitor: "Gebelik Takibi",
                gyn_issue: "Jinekolojik Düzensizlik",
                hereditary: "Kalıtsal Risk Faktörü",
                prevent_high: "Yüksek Metabolik ve Kardiyak Risk",
                prevent_overweight: "Fazla Kilo - Sağlık Takibi Gerekli",
                prevent_pulmo: "Akciğer Risk Uyarısı",
                healthy_routine: "Sağlıklı Değerler - Rutin Kontrol"
            },
            referrals: {
                cardio: "Kardiyoloji",
                endo: "Endokrinoloji",
                pulmo: "Göğüs Hastalıkları",
                neuro: "Nöroloji",
                neuro_scan: "Nöroloji (NeuroScan)",
                gastro: "Gastroenteroloji",
                nephro: "Nefroloji",
                ortho: "Ortopedi",
                neurosurg: "Beyin Cerrahisi",
                uro: "Üroloji",
                cardio_endo: "Kardiyoloji & Endokrinoloji",
                obgyn: "Kadın Hastalıkları ve Doğum",
                urgent_obgyn: "ACİL Kadın Doğum / Acil Servis",
                gyn: "Jinekoloji",
                genetics: "Tıbbi Genetik",
                internal: "Dahiliye (Önleyici Tıp)",
                diet: "Diyetisyen / Beslenme Uzmanı",
                smoking: "Sigara Bırakma Polikliniği",
                general: "Genel Kontrol"
            },
            templates: {
                profile: "Hasta Profili: {{age}}yaş {{gender}}, VKI {{bmi}}.",
                report_count: "{{count}} Tıbbi Rapor analiz edildi.",
                image_count: "{{count}} Görüntüleme Taraması işlendi.",
                risk_intro: "Tespit Edilen Başlıca Risk Faktörleri: ",
                note_intro: "Klinik Notlar şunları gösteriyor: ",
                critical_preg: "KRİTİK: Gebelik komplikasyonları tespit edildi. Acil tıbbi müdahale önerilir.",
                rec_genomic: "ÖNERİ: Aile öyküsü nedeniyle, detaylı DNA analizi için 'GenomicInsight' modülümüze başvurmayı düşünün.",
                rec_general: "Yapay zeka analizi, listelenen bölümlerle koordinasyon önerir.",
                rec_routine: "Sağlıklı Değerler - Rutin Kontrol"
            }
        },
        gynecology: {
            title: "Kadın Doğum & AI Analizi",
            subtitle: "Yaygın durumların tahmin edilebilirlik sınıflandırması.",
            high: "Yüksek Tahmin Edilebilirlik",
            medium: "Orta Tahmin Edilebilirlik",
            low: "Düşük Tahmin Edilebilirlik",
            diseases: {
                pcos: "Polikistik Over Sendromu (PCOS)",
                gdm: "Gestasyonel Diyabet",
                rh: "Rh Uyuşmazlığı",
                preeclampsia: "Preeklampsi",
                ectopic: "Dış Gebelik (Ektopik)",
                endo: "Endometriozis",
                molar: "Molar Gebelik",
                eclampsia: "Eklampsi",
                ovarian_ca: "Over Kanseri (Ca)",
                endo_ca: "Endometrium Kanseri (Ca)"
            }
        },
        genomics: {
            title: "GenomicInsight",
            subtitle: "Kişiselleştirilmiş sağlık ve uzun ömür için DNA'nızın şifresini çözün.",
            cards: {
                drug_comp: {
                    title: "İlaç Uyumluluğunu Sorgula",
                    desc: "Genlerinizin ilaçlara yanıtınızı nasıl etkilediğini analiz edin."
                },
                genetic_profile: {
                    title: "Genetik Profilini Keşfet",
                    desc: "Genetik mirasınızın ve özelliklerinizin kapsamlı dökümü."
                },
                personalize: {
                    title: "Tedavini Kişiselleştir",
                    desc: "Tıbbi tedavileri benzersiz genetik yapınıza göre uyarlayın."
                },
                sample_report: {
                    title: "Örnek Raporu İncele",
                    desc: "Yapay zeka tarafından oluşturulan genomik analizimizin ayrıntılı bir örneğini görüntüleyin."
                }
            }
        }
    },
    es: {
        hero: {
            title: "Salud IA",
            subtitle: "Potenciando la Salud con Inteligencia Artificial.",
            description: "Revolucionando la atención al paciente y el diagnóstico a través de algoritmos avanzados de aprendizaje automático y análisis predictivo."
        },
        about: {
            title: "Sobre Nosotros",
            p1: "Somos un equipo de investigadores de IA y profesionales médicos dedicados a transformar la atención médica. Nuestra misión es hacer que las herramientas de diagnóstico avanzadas sean accesibles para todos, en todas partes.",
            p2: "Al aprovechar el aprendizaje profundo de última generación, desbloqueamos patrones en datos médicos que antes eran invisibles, permitiendo una detección más temprana y planes de tratamiento más personalizados.",
            cardTitle: "IA + Biología"
        },
        projects: {
            title: "Nuestras Innovaciones",
            p1_title: "NeuroScan AI",
            p1_desc: "Detección temprana de enfermedades neurodegenerativas mediante análisis de resonancia magnética.",
            p_gyn_title: "Ginecología IA",
            p_gyn_desc: "Análisis impulsado por IA para condiciones de salud de la mujer.",
            p2_title: "CardioPredict",
            p2_desc: "Predicción de insuficiencia cardíaca en tiempo real a partir de datos de dispositivos portátiles.",
            p3_title: "GenomicInsight",
            p3_desc: "Recomendaciones de medicina personalizada basadas en la secuenciación genómica."
        },
        references: {
            title: "Confiado Por"
        },
        demo: {
            title: "Solicitar Demo",
            name: "Nombre",
            email: "Correo",
            org: "Organización",
            button: "Programar Demo"
        },
        chat: {
            title: "Asistente de Salud IA",
            greeting: "¡Hola! ¿Cómo puedo ayudarte con nuestras herramientas de diagnóstico de IA hoy?",
            placeholder: "Escribe un mensaje..."
        },
        nav: {
            home: "Inicio",
            analysis: "Análisis IA",
            innovations: "Innovaciones",
            gynecology: "Ginecología",
            neuroscan: "NeuroScan IA",
            cardio: "CardioPredict",
            genom: "GenomicInsight",
            contact: "Contacto"
        },
        analysis: {
            title: "Análisis de Salud del Paciente",
            subtitle: "Evaluación de salud integral impulsada por IA",
            section_personal: "Información Personal",
            habits: "Estilo de Vida y Hábitos",
            clinical: "Datos Clínicos",
            uploads: "Informes e Imágenes",
            age: "Edad",
            gender: "Género",
            male: "Masculino",
            female: "Femenino",
            height: "Altura (cm)",
            weight: "Peso (kg)",
            bmi: "IMC",
            calculate: "Calcular Análisis",
            analyzing: "Analizando IA...",
            smoking: "Tabaquismo",
            smoker: "Fumador",
            non_smoker: "No Fumador",
            occasional: "Ocasional",
            lab_findings: "Notas del Informe Clínico",
            lab_placeholder: "Escriba los hallazgos clínicos detallados aquí...",
            section_reports: "Informes Médicos",
            upload_reports: "Subir Informes PDF/DOC",
            section_images: "Imágenes Médicas",
            upload_images: "Subir Imágenes resonancia magnética/TC",
            drop_reports: "Arrastre informes aquí",
            drop_images: "Arrastre imágenes aquí",
            results_title: "Resultados del Análisis de IA",
            risk_low: "Bajo Riesgo",
            risk_medium: "Riesgo Medio",
            risk_high: "Alto Riesgo",
            cat_cardio: "Análisis de Cardiología",
            cat_endo: "Endocrinología",
            cat_pulmo: "Análisis de Neumología",
            cat_gastro: "Gastroenterología",
            cat_nephro: "Nefrología",
            cat_ortho: "Ortopedia",
            cat_neurosurg: "Neurocirugía",
            cat_uro: "Urología",
            cat_radio: "Radiología e Imágenes",
            recommendation: "Recomendación de IA",
            rec_consult: "Consultar Especialista",
            rec_healthy: "Saludable / Rutina",
            // Dynamic Analysis Translations
            risks: {
                obesity: "Obesidad (IMC: {{val}})",
                smoker: "Uso de Tabaco",
                age: "Edad Avanzada",
                underweight: "Bajo Peso"
            },
            findings: {
                cardio: "Anomalía Cardiovascular",
                metabolic: "Trastorno Metabólico",
                respiratory: "Dificultad Respiratoria",
                neuro: "Síntomas Neurológicos",
                gastro: "Problema Digestivo",
                nephro: "Problema de Función Renal",
                ortho: "Problema Musculoesquelético",
                neurosurg: "Riesgo Craneal/Espinal",
                uro: "Problema Urológico",
                high_risk_preg: "Complicación de Embarazo de Alto Riesgo",
                preg_monitor: "Control de Embarazo",
                gyn_issue: "Irregularidad Ginecológica",
                hereditary: "Factor de Riesgo Hereditario",
                prevent_high: "Alto Riesgo de Enfermedad Metabólica y Cardíaca",
                prevent_overweight: "Sobrepeso - Se Requiere Control de Salud",
                prevent_pulmo: "Advertencia de Riesgo Pulmonar",
                healthy_routine: "Signos Vitales Saludables - Chequeo de Rutina"
            },
            referrals: {
                cardio: "Cardiología",
                endo: "Endocrinología",
                pulmo: "Neumología",
                neuro: "Neurología",
                neuro_scan: "Neurología (NeuroScan)",
                gastro: "Gastroenterología",
                nephro: "Nefrología",
                ortho: "Ortopedia",
                neurosurg: "Neurocirugía",
                uro: "Urología",
                cardio_endo: "Cardiología y Endocrinología",
                obgyn: "Obstetricia y Ginecología",
                urgent_obgyn: "Obstetricia URGENTE / Sala de Emergencias",
                gyn: "Ginecología",
                genetics: "Genética Médica",
                internal: "Medicina Interna (Preventiva)",
                diet: "Dietista / Nutricionista",
                smoking: "Clínica para Dejar de Fumar",
                general: "Chequeo General"
            },
            templates: {
                profile: "Perfil del Paciente: {{age}} años {{gender}}, IMC {{bmi}}.",
                report_count: "{{count}} Informes Médicos analizados.",
                image_count: "{{count}} Imágenes procesadas.",
                risk_intro: "Factores de Riesgo Principales identificados: ",
                note_intro: "Las notas clínicas indican: ",
                critical_preg: "CRÍTICO: Complicaciones de embarazo detectadas. Se recomienda intervención médica inmediata.",
                rec_genomic: "RECOMENDACIÓN: Debido a los antecedentes familiares, considere consultar nuestro módulo 'GenomicInsight' para un análisis de ADN detallado.",
                rec_general: "El análisis de IA recomienda la coordinación con los departamentos enumerados.",
                rec_routine: "Signos Vitales Saludables - Chequeo de Rutina"
            }
        },
        gynecology: {
            title: "Análisis IA de Ginecología",
            subtitle: "Clasificación de condiciones comunes basada en la previsibilidad.",
            high: "Alta Previsibilidad",
            medium: "Previsibilidad Media",
            low: "Baja Previsibilidad",
            diseases: {
                pcos: "Síndrome de Ovario Poliquístico (SOP)",
                gdm: "Diabetes Gestacional",
                rh: "Incompatibilidad Rh",
                preeclampsia: "Preeclampsia",
                ectopic: "Embarazo Ectópico",
                endo: "Endometriosis",
                molar: "Embarazo Molar",
                eclampsia: "Eclampsia",
                ovarian_ca: "Cáncer de Ovario",
                endo_ca: "Cáncer de Endometrio"
            }
        },
        genomics: {
            title: "GenomicInsight",
            subtitle: "Decodifica tu ADN para una salud y longevidad personalizadas.",
            cards: {
                drug_comp: {
                    title: "Consulta de Compatibilidad de Medicamentos",
                    desc: "Analice cómo afectan sus genes a su respuesta a los medicamentos."
                },
                genetic_profile: {
                    title: "Descubre tu Perfil Genético",
                    desc: "Desglose completo de su herencia genética y rasgos."
                },
                personalize: {
                    title: "Personaliza tu Tratamiento",
                    desc: "Adapte los tratamientos médicos a su composición genética única."
                },
                sample_report: {
                    title: "Revisar Informe de Muestra",
                    desc: "Vea un ejemplo detallado de nuestro análisis genómico generado por IA."
                }
            }
        }
    }
};

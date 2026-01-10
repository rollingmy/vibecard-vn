"use client";

import React from "react";
import templates from "@/data/templates.json";
import { FlexTheme } from "@/components/templates/FlexTheme";
import { LoveTheme } from "@/components/templates/LoveTheme";
import { OfficeLifeTemplates } from "@/components/templates/OfficeTheme";
import { GamingTheme } from "@/components/templates/GamingTheme";
import { GenZTheme } from "@/components/templates/GenZTheme";
import { RetroTemplates } from "@/components/templates/RetroTheme";
import { DarkHumorTemplates } from "@/components/templates/DarkHumorTheme";
import { ZodiacTemplates } from "@/components/templates/ZodiacTheme";
import { TravelTemplates } from "@/components/templates/TravelTheme";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const AllTemplates = {
    ...FlexTheme,
    ...LoveTheme,
    ...OfficeLifeTemplates,
    ...GamingTheme,
    ...GenZTheme,
    ...RetroTemplates,
    ...DarkHumorTemplates,
    ...ZodiacTemplates,
    ...TravelTemplates
};


export default function TemplateLabPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-8">
            <header className="mb-12 border-b border-gray-200 pb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-2">Template QA Lab 🧪</h1>
                <p className="text-gray-500 max-w-2xl">
                    Control center for verifying visual integrity of all {templates.length} card templates.
                    Check for overflow issues, avatar alignment, and layout consistency across edge cases.
                </p>
            </header>

            <div className="space-y-16">
                {templates.map((template) => {
                    const RenderTemplate = AllTemplates[template.id as keyof typeof AllTemplates];

                    if (!RenderTemplate) return null;

                    // Define Test Cases
                    const testCases = [
                        {
                            label: "Short Name",
                            props: {
                                userName: "A",
                                userImage: "https://i.pravatar.cc/150?u=a", // Square-ish
                                nameFontSize: 40, // Force large font for short text

                            }
                        },
                        {
                            label: "Extreme Long Name",
                            props: {
                                userName: "Nguyễn Trần Huyền Trân Công Chúa",
                                userImage: "https://i.pravatar.cc/150?u=long",
                                nameFontSize: 14, // Force small font for length

                            }
                        },
                        {
                            label: "Bad Aspect Ratio Avatar",
                            props: {
                                userName: "Vibe Checker",
                                userImage: "https://placehold.co/100x300/png", // Very tall image
                                nameFontSize: 24,

                            }
                        }
                    ];

                    return (
                        <div key={template.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h2 className="text-xl font-bold font-mono">{template.id}</h2>
                                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200">
                                            {template.name}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 italic">{template.description}</p>
                                </div>
                                <Link
                                    href={`/editor/${template.id}`}
                                    target="_blank"
                                    className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    Open Editor
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {testCases.map((test, index) => (
                                    <div key={index} className="flex flex-col gap-2">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">
                                            {test.label}
                                        </span>
                                        <div className="relative aspect-[3/4] w-full border border-gray-100 rounded-lg overflow-hidden shadow-md bg-gray-50">
                                            <svg
                                                viewBox="0 0 300 400"
                                                className="w-full h-full"
                                                preserveAspectRatio="xMidYMid meet"
                                            >
                                                {RenderTemplate(test.props)}
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <footer className="mt-20 text-center text-gray-400 text-sm pb-8">
                VibeCard VN Internal Tool • {new Date().getFullYear()}
            </footer>
        </div>
    );
}

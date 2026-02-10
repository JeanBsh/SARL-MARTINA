import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LegalPageLayoutProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
    date?: string;
}

export default function LegalPageLayout({ children, title, subtitle, date }: LegalPageLayoutProps) {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-secondary/10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-architectural-blue/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-slate-900 mb-6">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl text-muted-foreground mb-4">
                            {subtitle}
                        </p>
                    )}
                    {date && (
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                            {date}
                        </p>
                    )}
                </div>

                <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-16 shadow-xl shadow-slate-200/50">
                    <div className="prose prose-slate max-w-none 
            prose-headings:font-serif prose-headings:text-slate-900 prose-headings:font-semibold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-100
            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
            prose-li:text-slate-600
            prose-strong:text-slate-900 prose-strong:font-semibold
            prose-a:text-architectural-blue prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            ">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}

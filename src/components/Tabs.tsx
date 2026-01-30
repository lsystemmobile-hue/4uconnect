import { useState } from "react";

interface Tab {
    id: string;
    label: string;
}

interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onChange: (tabId: string) => void;
    variant?: "green" | "navy" | "black";
}

const Tabs = ({ tabs, activeTab, onChange, variant = "navy" }: TabsProps) => {
    const colorClasses = {
        green: {
            active: "text-4u-green border-4u-green",
            inactive: "text-muted-foreground hover:text-4u-green/70",
            indicator: "bg-4u-green",
        },
        navy: {
            active: "text-4u-navy border-4u-navy",
            inactive: "text-muted-foreground hover:text-4u-navy/70",
            indicator: "bg-4u-navy",
        },
        black: {
            active: "text-4u-black border-4u-black",
            inactive: "text-muted-foreground hover:text-4u-black/70",
            indicator: "bg-4u-black",
        },
    };

    return (
        <div className="w-full border-b border-border/50 bg-background/50 backdrop-blur-sm sticky top-0 z-40">
            <div className="container mx-auto px-4">
                <div className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide justify-center">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => onChange(tab.id)}
                                className={`
                  relative px-4 md:px-6 py-4 md:py-5 font-bold text-sm md:text-base
                  whitespace-nowrap transition-all duration-300
                  ${isActive ? colorClasses[variant].active : colorClasses[variant].inactive}
                `}
                            >
                                {tab.label}
                                {isActive && (
                                    <span
                                        className={`
                      absolute bottom-0 left-0 right-0 h-1 rounded-t-full
                      ${colorClasses[variant].indicator}
                      animate-in slide-in-from-left duration-300
                    `}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Tabs;

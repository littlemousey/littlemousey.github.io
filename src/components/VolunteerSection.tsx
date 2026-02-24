import React from "react";
import { volunteerExperiences } from "@/lib/data";
import { Sprout } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export default function VolunteerSection() {
  return (
    <section
      id="volunteer-work"
      className="py-12 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🎖️ Volunteer work
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {volunteerExperiences.map((experience, index) => (
            <MotionWrapper
              key={experience.organisation + index}
              delay={index * 0.1}
            >
              <GlassCard className="p-4 dark:border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full cursor-pointer" onClick={() => window.location.assign(experience.url)}>
                <div className="flex items-center mb-2">
                  <motion.div
                    whileHover={{ rotate: 20 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    className="flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600 rounded-full p-1.5 mr-2"
                  >
                    <Sprout className="h-4 w-4 text-white" />
                  </motion.div>
                  <h3 className="font-medium">{experience.organisation}</h3>
                </div>
                <div className="flex flex-col space-y-2 mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded-md pl-8">
                      📅 {experience.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1 pl-8">
                    {experience.description}
                  </p>
                </div>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

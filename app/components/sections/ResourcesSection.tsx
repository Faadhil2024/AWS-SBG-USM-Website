"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  BookOpen,
  Award,
  GitBranch,
  Wrench,
} from "lucide-react";

type ResourceLevel = "Beginner" | "Intermediate" | "Advanced" | "All levels";

interface ResourceItem {
  title: string;
  description: string;
  url: string;
  level?: ResourceLevel;
}

interface ResourceCategory {
  category: string;
  icon: ElementType;
  color: string;
  bg: string;
  items: ResourceItem[];
}

const resources: ResourceCategory[] = [
  {
    category: "AWS Certifications",
    icon: Award,
    color: "text-aws-orange",
    bg: "bg-aws-orange/10 border-aws-orange/20",
    items: [
      {
        title: "AWS Cloud Practitioner",
        description:
          "Perfect starting point. Covers cloud concepts, AWS services, security, and pricing.",
        url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
        level: "Beginner",
        
      },
      {
        title: "AWS Solutions Architect Associate",
        description:
          "Design distributed systems on AWS. Most popular AWS certification.",
        url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
        level: "Intermediate",
        
      },
    ],
  },
  {
    category: "Free Learning",
    icon: BookOpen,
    color: "text-accent-blue",
    bg: "bg-accent-blue/10 border-accent-blue/20",
    items: [
      {
        title: "AWS Skill Builder",
        description:
          "Official free AWS training platform. Hundreds of courses and labs.",
        url: "https://skillbuilder.aws/",
        level: "All levels",
        
      },
      {
        title: "AWS Educate",
        description:
          "Free cloud learning for students. No credit card required.",
        url: "https://aws.amazon.com/education/awseducate/",
        level: "Beginner",
      
      },
    ],
  },
  {
    category: "Hands-on Practice",
    icon: Wrench,
    color: "text-accent-purple",
    bg: "bg-accent-purple/10 border-accent-purple/20",
    items: [
      {
        title: "AWS Free Tier",
        description:
          "12 months free access to 100+ AWS services. Build real projects at zero cost.",
        url: "https://aws.amazon.com/free/",
      },
      {
        title: "AWS Well-Architected Labs",
        description:
          "Hands-on labs to learn best practices for building cloud solutions.",
        url: "https://www.wellarchitectedlabs.com/",
        level: "Intermediate",
        
      },
    ],
  },
  {
    category: "Community Resources",
    icon: GitBranch,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
    items: [
      {
        title: "AWS SBG USM GitHub",
        description:
          "Workshop slides, code samples, and project templates from our events.",
        url: "https://github.com",
        
      },
      {
        title: "AWS Documentation",
        description:
          "The official AWS docs. Comprehensive reference for every AWS service.",
        url: "https://docs.aws.amazon.com/",
        
      },
    ],
  },
];

const LEVEL_COLORS: Record<string, string> = {
  Beginner: "bg-green-500/10 text-green-400 border-green-500/20",
  Intermediate: "bg-aws-orange/10 text-aws-orange border-aws-orange/20",
  Advanced: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "All levels": "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
};

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Everything you need to{" "}
            <span className="gradient-text">get started.</span>
          </h2>

          <p className="text-text-secondary max-w-2xl mx-auto text-base leading-relaxed">
            Curated AWS learning resources, certification guides, and
            community materials to help you build cloud skills fast.
          </p>
        </motion.div>

        {/* Resource categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg border ${category.bg}`}>
                  <category.icon
                    size={16}
                    className={category.color}
                  />
                </div>

                <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                  {category.category}
                </h3>
              </div>

              {/* Resource items */}
              <div className="space-y-3">
                {category.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block card hover:shadow-card-hover group h-[135px]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-text-primary group-hover:text-aws-orange transition-colors mb-2">
                          {item.title}
                        </h4>

                        <p className="text-xs text-text-secondary leading-relaxed mb-3">
                          {item.description}
                        </p>

                        {item.level && (
                          <span
                            className={`inline-flex px-2 py-0.5 rounded text-xs border ${
                              LEVEL_COLORS[item.level]
                            }`}
                          >
                            {item.level}
                          </span>
                        )}
                      </div>

                      <ExternalLink
                        size={14}
                        className="text-text-muted group-hover:text-aws-orange transition-colors flex-shrink-0 mt-0.5"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

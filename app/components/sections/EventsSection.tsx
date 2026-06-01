"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react";
import { events } from "@/data/events";
import { formatDate } from "@/lib/utils";
import { type Event } from "@/types";

const EVENT_TYPE_COLORS: Record<string, string> = {
  Workshop:        "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
  talk:            "bg-sky-500/10 text-sky-400 border-sky-500/20",
  lab:             "bg-violet-500/10 text-violet-400 border-violet-500/20",
  networking:      "bg-green-500/10 text-green-400 border-green-500/20",
  hackathon:       "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Kickstart:       "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Builder Session": "bg-green-500/10 text-green-400 border-green-500/20",
  other:           "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "KickStart 2026":       "bg-amber-500/10 text-amber-400 border-amber-500/20",

};

function EventCard({ event }: { event: Event }) {
  const isUpcoming = event.status === "upcoming";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card group hover:shadow-card-hover relative overflow-hidden"
    >
      {/* Upcoming indicator */}
      {isUpcoming && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-aws-orange/10 border border-aws-orange/20">
          <span className="w-1.5 h-1.5 rounded-full bg-aws-orange animate-pulse" />
          <span className="text-xs text-aws-orange font-medium">
            Upcoming
          </span>
        </div>
      )}

      {/* Event type badge */}
      <div className="mb-4">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${
            EVENT_TYPE_COLORS[event.type]
          }`}
        >
          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-text-primary mb-3 group-hover:text-aws-orange transition-colors pr-16">
        {event.title}
      </h3>

      {/* Meta */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Calendar size={13} className="text-aws-orange flex-shrink-0" />
          <span>{formatDate(event.date)}</span>

          {event.time && (
            <>
              <span>·</span>
              <Clock size={13} className="flex-shrink-0" />
              <span>{event.time}</span>
            </>
          )}
        </div>

        <div className="flex items-start gap-2 text-xs text-text-muted">
          <MapPin
            size={13}
            className="text-aws-orange flex-shrink-0 mt-0.5"
          />
          <span>{event.location}</span>
        </div>

        {event.attendeeCount && (
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Users size={13} className="text-aws-orange flex-shrink-0" />
            <span>{event.attendeeCount} attendees</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-2">
        {event.description}
      </p>

      {/* Tags */}
      {event.tags && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {event.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs bg-brand-elevated text-text-muted border border-brand-border"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      {isUpcoming && event.registrationUrl && (
        <a
          href={event.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-aws-orange hover:text-aws-orange-light transition-colors"
        >
          Register Now <ArrowRight size={14} />
        </a>
      )}
    </motion.div>
  );
}

export default function EventsSection() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <section id="events" className="py-24 relative bg-brand-surface/30">
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
          <span className="text-xs font-semibold text-aws-orange uppercase tracking-widest mb-4 block">
            Events
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Learn by <span className="gradient-text">doing.</span>
          </h2>

          <p className="text-text-secondary max-w-2xl mx-auto text-base leading-relaxed">
            We run approximately 4 major events every year — workshops,
            tech talks, hands-on labs, and networking sessions. All free
            for USM students.
          </p>
        </motion.div>

        {/* Upcoming events */}
        {upcoming.length > 0 && (
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-aws-orange animate-pulse" />
              Upcoming Events
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* Past events */}
        {past.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-text-muted" />
              Past Events
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {past.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
          
        )}
      </div>
    </section>
  );
}
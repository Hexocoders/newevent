"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import EventCard from "./EventCard";
import Spinner from "./Spinner";
import { CalendarDays, Ticket, Sparkles, History } from "lucide-react";

export default function EventList() {
  const events = useQuery(api.events.get);

  if (!events) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const upcomingEvents = events
    .filter((event) => event.eventDate > Date.now())
    .sort((a, b) => a.eventDate - b.eventDate);

  const pastEvents = events
    .filter((event) => event.eventDate <= Date.now())
    .sort((a, b) => b.eventDate - a.eventDate);

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 space-y-4 md:space-y-0">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <h2 className="text-sm font-semibold text-purple-600 tracking-wide uppercase">Events For You</h2>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              Upcoming Events
            </h1>
            <p className="mt-2 text-xl text-gray-600">
              Discover & book tickets for amazing events
            </p>
          </div>
          <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 hover:border-purple-200 transition-colors duration-200">
            <div className="flex items-center gap-3 text-gray-600">
              <CalendarDays className="w-5 h-5 text-purple-500" />
              <span className="font-medium text-gray-900">
                {upcomingEvents.length} Upcoming Events
              </span>
            </div>
          </div>
        </div>

        {/* Upcoming Events Grid */}
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map((event) => (
              <EventCard key={event._id} eventId={event._id} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center mb-16 shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Ticket className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No upcoming events
            </h3>
            <p className="text-gray-600 text-lg">Check back later for new events</p>
          </div>
        )}

        {/* Past Events Section */}
        {pastEvents.length > 0 && (
          <div className="border-t border-gray-200 pt-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 space-y-4 md:space-y-0">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <History className="w-5 h-5 text-purple-500" />
                  <h2 className="text-sm font-semibold text-purple-600 tracking-wide uppercase">Previous Experiences</h2>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                  Past Events
                </h2>
                <p className="mt-2 text-xl text-gray-600">
                  Relive the memories of our previous events
                </p>
              </div>
              <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 hover:border-purple-200 transition-colors duration-200">
                <div className="flex items-center gap-3 text-gray-600">
                  <CalendarDays className="w-5 h-5 text-purple-500" />
                  <span className="font-medium text-gray-900">
                    {pastEvents.length} Past Events
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div key={event._id} className="relative">
                  <div className="absolute -top-2 left-4 z-10">
                    <span className="bg-gray-100/80 backdrop-blur-sm text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                      Past Event
                    </span>
                  </div>
                  <div className="relative opacity-90 transition-opacity hover:opacity-100">
                    <EventCard eventId={event._id} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import EventList from "@/components/EventList";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <EventList />
    </main>
  );
}

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import References from "@/components/References";
import DemoRequest from "@/components/DemoRequest";
import ChatBubble from "@/components/ChatBubble";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30">
      <Hero />
      <About />
      <Projects />
      <References />
      <DemoRequest />
      <ChatBubble />
    </main>
  );
}

export default function About() {
  return (
    <div className="max-w-xl mx-auto py-20 space-y-8 animate-in fade-in duration-700">
      <h1 className="text-4xl font-black tracking-tighter uppercase text-black">Our Philosophy</h1>
      <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
        <p>
          Trendly is a demonstration of high-performance modern web architecture. 
          By utilizing a <strong>Modular Directory Structure</strong>, we separate concerns across components, 
          API logic, and page views.
        </p>
        <p>
          In a real Next.js environment, this project would leverage <strong>Server Components</strong> for 
          SEO-optimized rendering and <strong>Client Components</strong> for interactive elements like our cart system.
        </p>
      </div>
    </div>
  );
}
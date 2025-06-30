export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 md:p-10">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold mb-6">LEANBuilds</h1>

        {/* Responsive Video Embed */}
        <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/05igvHdNQyk?autoplay=1&mute=1&playsinline=1"
            title="LEANBuilds Introduction Video"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-lg max-w-4xl mx-auto mt-8">
          We bridge the gap between physical assets and digital tools. By harnessing emerging technologies, we empower designers, contractors, and owners to make faster, smarter decisions. Our deliverables are tailored to maximize the impact of your time, providing accurate, actionable data you can trust.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Designers</h2>
          <p>
            We collaborate with architects, engineers, and technologists to bring precision to your vision—through site verification, as-built modeling, and digital integration.
          </p>
        </div>

        <div className="border rounded-2xl shadow-lg p-8 text-left hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">🏗️ CONTRACTORS</h2>
          <p className="mb-2 font-medium">High-Tech Solutions to Execute with Precision</p>
          <p className="mb-4">Using Drones, GNSS, Total Stations & 3D Modeling</p>

          <p className="font-semibold">📐 Construction Layout & Field Execution</p>
          <ul className="list-disc list-inside mb-4">
            <li>GPS & Total Station layout for footings, gridlines, services, curb, and grading</li>
            <li>Precision staking for excavation, concrete, and utility installation</li>
          </ul>

          <p className="font-semibold">📊 Quantities & Modeling</p>
          <ul className="list-disc list-inside mb-4">
            <li>Cut/Fill & stockpile volume calculations using drone data</li>
            <li>3D execution modeling for site coordination and staging</li>
            <li>Conflict & clash detection modeling to identify issues before they arise</li>
          </ul>

          <p className="font-semibold">📸 Site Documentation</p>
          <ul className="list-disc list-inside mb-4">
            <li>Drone-based as-built capture and progress tracking</li>
            <li>Orthomosaics, point clouds, and georeferenced site data</li>
            <li>High-precision as-built measurements for record or verification</li>
          </ul>

          <p className="font-semibold">📄 Preconstruction Support</p>
          <ul className="list-disc list-inside">
            <li>Drawing & plan reviews for constructability and clarity</li>
            <li>Material takeoffs and quantity estimates directly from models</li>
            <li>Assistance with RFIs and field coordination</li>
          </ul>
        </div>

        <div className="border rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Owners</h2>
          <p>
            We provide clarity to owners and developers by delivering accurate site data, construction insight, and planning support—helping you make informed decisions from start to finish.
          </p>
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-600">
        <p className="text-base font-medium">Contact</p>
        <p>
          <a href="tel:+17054930733" className="hover:underline">(705) 493-0733</a>
        </p>
        <p>
          <a href="mailto:jesse.graham@leanbuilds.ca" className="hover:underline">jesse.graham@leanbuilds.ca</a>
        </p>
        <p className="mt-4">&copy; {new Date().getFullYear()} LEANBuilds. All rights reserved.</p>
      </footer>
    </main>
  );
}

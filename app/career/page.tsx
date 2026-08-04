export default function CareerPage() {
  return (
    <div className="min-h-screen bg-blue-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-yellow-300 mb-6">
        Career
      </h1>

      <p className="text-xl text-center max-w-3xl">
        Join the Udaan Magazine team. We welcome student editors, content writers,
        photographers, designers, and volunteers.
      </p>

      <div className="mt-10">
        <a
          href="mailto:career@uddanmagazine.com"
          className="bg-yellow-400 text-blue-950 px-8 py-4 rounded-xl font-bold"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
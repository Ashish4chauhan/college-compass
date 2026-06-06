export default function ContactPage() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Contact Us
      </h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
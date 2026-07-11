'use client'
import { motion } from 'framer-motion'

export default function UdaanWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-sky-900 to-orange-100 text-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-blue-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-yellow-300 tracking-wide">
              उड़ान
            </h1>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-white">
            <li><a href="#home" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-300 transition">About</a></li>
            <li><a href="#features" className="hover:text-yellow-300 transition">Features</a></li>
            <li><a href="#magazine" className="hover:text-yellow-300 transition">Magazine</a></li>
            <li><a href="#gallery" className="hover:text-yellow-300 transition">Gallery</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>

          <button className="hidden md:block px-6 py-3 rounded-xl bg-yellow-400 text-blue-950 font-bold shadow-lg hover:scale-105 transition-transform">
            Login
          </button>

          <button className="md:hidden text-3xl text-yellow-300">
            ☰
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden px-6 py-20 md:px-16 lg:px-28 min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"
          />

          <motion.div
            animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"
          />
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')] bg-cover bg-center"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide text-yellow-300 drop-shadow-lg">
            उड़ान
          </h1>
          <p className="mt-6 text-2xl md:text-3xl font-light text-blue-100">
            नई सोच • नई दिशा • नई उड़ान
          </p>
          <p className="mt-8 text-lg md:text-xl text-gray-200 leading-relaxed">
            स्कूल और कॉलेज की प्रतिभाओं, रचनात्मकता और उपलब्धियों को समर्पित वार्षिक पत्रिका।
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 rounded-2xl bg-yellow-400 text-blue-950 font-bold shadow-2xl hover:scale-105 transition-transform">
              Read Magazine
            </button>
            <button className="px-8 py-4 rounded-2xl border border-white/50 bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
              Submit Article Nows
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="relative px-6 py-20 md:px-16 lg:px-28 bg-white text-gray-900 rounded-t-[50px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,200,0,0.15),transparent_30%)]"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-950 mb-14">
            हमारी विशेषताएँ
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'रचनात्मक लेखन',
                desc: 'कविताएँ, कहानियाँ और विद्यार्थियों की अभिव्यक्तियाँ।',
                icon: '✍️',
              },
              {
                title: 'छात्र उपलब्धियाँ',
                desc: 'शैक्षणिक, खेल और सांस्कृतिक सफलताओं का मंच।',
                icon: '🏆',
              },
              {
                title: 'कैंपस लाइफ',
                desc: 'कार्यक्रम, उत्सव और विद्यालय/महाविद्यालय की यादें।',
                icon: '🎓',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-100 to-orange-50 p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-blue-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Magazine Preview */}
      <section id="magazine" className="relative px-6 py-20 md:px-16 lg:px-28 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-50 text-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7')] bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-blue-950 mb-6">
              Udaan 2026 Edition
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              यह पत्रिका विद्यार्थियों के सपनों, विचारों और रचनात्मकता को एक नई पहचान देती है।
              इसमें प्रेरणादायक लेख, उपलब्धियाँ, कला, साहित्य और समाज से जुड़े विषय शामिल हैं।
            </p>

            <ul className="space-y-4 text-lg">
              <li>✔️ Student Articles & Poetry</li>
              <li>✔️ School / College Achievements</li>
              <li>✔️ Event Gallery & Memories</li>
              <li>✔️ Inspirational Stories</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="w-[320px] h-[460px] rounded-[40px] bg-gradient-to-b from-blue-950 to-orange-500 shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
              <h3 className="text-5xl font-extrabold text-yellow-300 mt-10">
                उड़ान
              </h3>
              <p className="mt-4 text-lg text-white/80">
                नई सोच • नई दिशा • नई उड़ान
              </p>
              <div className="mt-16 text-white space-y-3 text-lg">
                <p>• साहित्य एवं कला</p>
                <p>• छात्र प्रतिभा मंच</p>
                <p>• कैंपस गतिविधियाँ</p>
                <p>• सफलता की कहानियाँ</p>
              </div>
              <div className="absolute bottom-8 left-8 text-sm text-white/70">
                Annual Magazine 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Submission Section */}
      <section id="contact" className="px-6 py-20 md:px-16 lg:px-28 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-950 to-sky-900 rounded-[40px] p-10 md:p-16 shadow-2xl text-white">
          <h2 className="text-5xl font-bold text-yellow-300 text-center mb-6">
            अपना Article भेजें
          </h2>

          <p className="text-center text-lg text-blue-100 mb-12 leading-relaxed">
            विद्यार्थी अपनी कविता, कहानी, लेख, उपलब्धियाँ और कला से जुड़े कंटेंट यहाँ से भेज सकते हैं।
          </p>

          <form
  action="https://script.google.com/macros/library/d/1gRpjHHAUXyt4HTtgynD66lKhUjvdz2adUXg2a6SlWO1mhb40gnSz0GNK/2"
  method="POST"
  className="grid md:grid-cols-2 gap-6"
>
            <input
              type="text"
              name="studentName"
              placeholder="Student Name"
              className="p-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />

            <input
              type="text"
              name="department"
              placeholder="Class / Department"
              className="p-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300 md:col-span-2"
            />

            <input
              type="text"
              name="articleTitle"
              placeholder="Article Title"
              className="p-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300 md:col-span-2"
            />

            <textarea
              rows="6"
              name="articleContent"
              placeholder="Write your article here..."
              className="p-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300 md:col-span-2"
            ></textarea>

            <div className="md:col-span-2">
              <label className="block mb-3 text-blue-100 font-medium">
                Upload Article / Images
              </label>
              <input
                name="attachment"
                type="file"
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/20"
              />
            </div>

            <div className="md:col-span-2 text-center mt-4">
              <button
              
                type="submit"
                className="px-10 py-4 rounded-2xl bg-yellow-400 text-blue-950 font-bold text-lg shadow-xl hover:scale-105 transition-transform"
              >
                Submit Article
                
              </button>
            </div>
          </form>

          <div className="mt-10 bg-white/10 border border-white/20 rounded-3xl p-6 text-blue-100">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              Admin Features
            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-lg">
              <div className="bg-white/5 rounded-2xl p-4">
                ✅ Student article submissions
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                ✅ Google Sheet integration
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                ✅ Admin approval system
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                ✅ Email notifications
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                ✅ PDF magazine export
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                ✅ Student login support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 px-6 py-10 text-center text-gray-300">
        <h3 className="text-3xl font-bold text-yellow-300 mb-4">उड़ान</h3>
        <p className="text-lg">Let Your Ideas Take Flight</p>
        <p className="mt-6 text-sm text-gray-400">
          © 2026 Udaan Magazine | Designed for School & College Publications
        </p>
      </footer>
    </div>
  )
}

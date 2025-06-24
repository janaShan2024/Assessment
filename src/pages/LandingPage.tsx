import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import man from '../assets/girl.png'
import video from '../assets/sample_video.mp4'
import { FaArrowUp } from 'react-icons/fa'
const LandingPage = () => {
    const navigate = useNavigate()
const testimonials = [
  {
    name: 'Arun Kumar',
    title: 'Software Engineer, TCS',
    quote: 'This platform helped me upskill in cloud technologies quickly and get certified. Super intuitive!',
    image: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Nisha Patel',
    title: 'Frontend Developer, Infosys',
    quote: 'I loved the curated learning paths. The AI suggestions were spot-on and saved me tons of time.',
    image: 'https://i.pravatar.cc/100?img=2',
  },
  {
    name: 'Rahul Mehra',
    title: 'Tech Lead, Wipro',
    quote: 'Upskilling my team became effortless. Great tracking, solid content, and smooth experience.',
    image: 'https://i.pravatar.cc/100?img=3',
  },
]
    const features = [
        { title: "Personalized Learning Paths", desc: "Courses tailored to your role, goals, and interests.", icon: "🎯" },
        { title: "Progress Tracking & Reports", desc: "Track growth with real-time dashboards and reports.", icon: "📈" },
        { title: "Certifications & Badges", desc: "Earn certifications to validate your skills.", icon: "🎓" },
        { title: "AI-Suggested Skills", desc: "Smart skill suggestions based on your role.", icon: "🤖" },
        { title: "Collaborative Learning", desc: "Learn together with team challenges.", icon: "🤝" },
        { title: "Reminders & Nudges", desc: "Stay on track with timely nudges.", icon: "🔔" },
    ]
    const sliderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const slider = sliderRef.current
        if (!slider) return

        const interval = setInterval(() => {
            if (!slider) return
            const scrollWidth = slider.scrollWidth
            const cardWidth = slider.firstChild?.clientWidth || 0
            const maxScrollLeft = scrollWidth - slider.clientWidth

            if (slider.scrollLeft >= maxScrollLeft) {
                slider.scrollTo({ left: 0, behavior: 'smooth' })
            } else {
                slider.scrollBy({ left: cardWidth, behavior: 'smooth' })
            }
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
    return (
        <div >
            <div className="relative w-full h-[70vh] overflow-hidden">
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-[70vh] object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-[70vh] bg-black/60 z-10" />

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-6">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                        <div className="md:w-full mb-8 md:mb-0 p-4 pt-4">
                            <h2 className="relative top-4 w-full h-auto py-4 animate-pulse justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
                                Upgrade your skills. Elevate your future.
                            </h2>
                            <p className="text-2xl text-gray-400 mb-6">
                                The smarter way to skill up — together.
                            </p>
                            <button className="bg-gray-800 text-white px-6 py-3 rounded-full border hover:bg-gray-900" onClick={() => navigate('/dashboard')}   >
                                Get Started
                            </button>
                        </div>
                        {/* <div className="md:w-1/2">
                        <img 
                            src={man} 
                            alt="Hero" 
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div> */}
                    </div>
                </div>
            </div>
            <section className="py-16 bg-black text-gray-300">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl relative top-0 w-full h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-center select-auto">Why Learn With Us</h2>

                    <div
                        ref={sliderRef}
                        className="flex overflow-x-auto space-x-4 scroll-smooth snap-x snap-mandatory scrollbar-hide hide-scrollbar"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    className="bg-black hover:bg-gray-800 p-6 h-[250px] rounded-xl shadow text-center text-white transition hover:scale-105 hover:shadow-lg snap-start"
                                >
                                    <div className="text-4xl mb-4">{f.icon}</div>
                                    <h3 className="text-2xl font-semibold mb-2 text-cyan-600">{f.title}</h3>
                                    <p className="text-sm text-gray-300">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
             <section className="bg-black py-16 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl relative top-0 w-full h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-center select-auto">What Our Learners Say</h2>
        <p className="text-gray-400 mb-10">Empowering IT professionals to learn and grow every day.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-left"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-200">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
              <p className="text-gray-400 italic">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
            <section id="contact" className="bg-black py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl relative top-0 w-full h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-center select-auto">Get in Touch</h2>
                    <p className="text-center text-gray-400 mb-8">Have questions or need support? Reach out to us, and we’ll get back to you promptly.</p>
                    <div className="max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 mb-4 border rounded-lg bg-gray-800"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 mb-4 border rounded-lg bg-gray-800"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 mb-4 border rounded-lg h-32 bg-gray-800"
                        ></textarea>
                        <button className="bg-gray-600 text-white px-6 py-3 w-full rounded-lg hover:bg-gray-900">
                            Send Message
                        </button>
                    </div>
                </div>
            </section>
            <footer className="bg-black text-white py-8">
                <div className="container mx-auto px-4">

                    <p className="text-center text-sm mt-8">
                        &copy; 2025 Augusta Hi-tech. All rights reserved.
                    </p>
                </div>
            </footer>
            { isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg transition-opacity duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )}
        </div>
    )
}


export default LandingPage

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Users,
  Building,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  CheckCircle,
  Calendar,
  FileText,
  Microscope,
  Search,
  User,
  ChevronDown,
  Star,
  Library,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"

export default function NursingCollegePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src="/images/sarkar.jpg"
                  alt="Sarkar Group of Education Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Sarkar Group of Education</h1>
         
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                {
                  name: "About",
                  items: ["History", "Mission & Vision", "Leadership", "Accreditation", "Campus"],
                },
                {
                  name: "Academics",
                  items: ["Undergraduate", "Graduate", "Continuing Education", "Course Catalog", "Academic Calendar"],
                },
                {
                  name: "Admissions",
                  items: ["Apply Now", "Requirements", "Tuition & Aid", "Visit Campus", "International Students"],
                },
                {
                  name: "Student Life",
                  items: ["Housing", "Activities", "Support Services", "Health Services", "Career Services"],
                },
                {
                  name: "Research",
                  items: ["Research Centers", "Faculty Research", "Student Research", "Publications"],
                },
              ].map((item) => (
                <div key={item.name} className="relative">
                  <button
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>

                  {activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-600" />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                {["About", "Academics", "Admissions", "Student Life", "Research"].map((item) => (
                  <a key={item} href="#" className="block py-2 text-gray-700 font-medium">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* News Banner */}
      

      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 min-h-[80vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Sarkar Nursing{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                College
              </span>
            </motion.h1>

            <motion.div
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-2">
                Discover top nursing programs to upgrade your skills and stay ahead.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Learn from experts and enhance your expertise at your own pace.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                className="bg-gray-900 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Programs
              </motion.button>

              <motion.button
                className="border-2 border-purple-500 text-purple-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "Apply for Admission", desc: "Start your nursing journey", link: "Apply Now" },
              {
                icon: Calendar,
                title: "Academic Calendar",
                desc: "Important dates & deadlines",
                link: "View Calendar",
              },
              { icon: BookOpen, title: "Course Catalog", desc: "Browse our programs", link: "View Catalog" },
              { icon: User, title: "Student Resources", desc: "Support services & tools", link: "Access Portal" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <a href="#" className="text-blue-600 font-medium text-sm hover:underline flex items-center">
                  {item.link} <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Sarkar Nursing College</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sarkar Nursing College has been at the forefront of nursing education, preparing
                healthcare professionals who demonstrate clinical excellence, compassionate care, and leadership in
                diverse healthcare settings.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "AACN Accredited programs ensuring quality education",
                  "State-of-the-art simulation laboratories and clinical facilities",
                  "Experienced faculty with advanced degrees and clinical expertise",
                  "Strong partnerships with leading healthcare institutions",
                  "Comprehensive student support services and career guidance",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                  Learn More About Us
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50">
                  Download Brochure
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/images/nursing-college.jpg"
                alt="Sarkar Nursing College Building"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Programs
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of AACN-accredited nursing programs designed to meet your career
              goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                level: "Undergraduate",
                title: "Bachelor of Science in Nursing (BSN)",
                duration: "4 Years • 128 Credit Hours",
                description:
                  "Comprehensive program preparing students for professional nursing practice in diverse healthcare settings.",
                features: [
                  "Clinical rotations in partner hospitals",
                  "Simulation laboratory training",
                  "Community health experience",
                  "Leadership and management courses",
                  "Research methods and evidence-based practice",
                ],
                accreditation: "AACN Accredited",
                tuition: "$18,500/year",
                icon: GraduationCap,
              },
              {
                level: "Graduate",
                title: "Master of Science in Nursing (MSN)",
                duration: "2 Years • 42 Credit Hours",
                description:
                  "Advanced practice nursing program with multiple specialization tracks for career advancement.",
                features: [
                  "Family Nurse Practitioner track",
                  "Nurse Educator specialization",
                  "Healthcare Administration focus",
                  "Clinical research opportunities",
                  "Thesis or capstone project",
                ],
                accreditation: "CCNE Approved",
                tuition: "$22,800/year",
                icon: Award,
              },
              {
                level: "Doctoral",
                title: "Doctor of Nursing Practice (DNP)",
                duration: "3 Years • 75 Credit Hours",
                description:
                  "Terminal practice degree for advanced nursing leadership and clinical expertise in healthcare.",
                features: [
                  "Advanced clinical practice",
                  "Healthcare policy and advocacy",
                  "Quality improvement initiatives",
                  "Interprofessional collaboration",
                  "Scholarly capstone project",
                ],
                accreditation: "AACN Endorsed",
                tuition: "$26,400/year",
                icon: Microscope,
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {program.level}
                    </span>
                    <program.icon className="w-8 h-8 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{program.duration}</p>
                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm">Program Highlights:</h4>
                    {program.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-600">Annual Tuition:</span>
                      <span className="font-bold text-gray-900">{program.tuition}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-600">Accreditation:</span>
                      <span className="text-sm font-medium text-green-600">{program.accreditation}</span>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Learn More & Apply
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Campus & Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus & Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art campus provides students with the resources and environment needed for academic
              success.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">World-Class Learning Environment</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Building,
                    title: "High-Fidelity Simulation Center",
                    description:
                      "Advanced patient simulators and realistic clinical scenarios for hands-on learning experience.",
                  },
                  {
                    icon: Library,
                    title: "Health Sciences Library",
                    description:
                      "Comprehensive collection of nursing and medical resources, study spaces, and research support.",
                  },
                  {
                    icon: Microscope,
                    title: "Skills & Assessment Labs",
                    description:
                      "Fully equipped laboratories for practicing clinical skills and competency assessments.",
                  },
                  {
                    icon: Users,
                    title: "Student Success Center",
                    description: "Academic tutoring, career counseling, and comprehensive student support services.",
                  },
                ].map((facility, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <facility.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{facility.title}</h4>
                      <p className="text-gray-600">{facility.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { src: "/images/campus1.jpg", alt: "Sarkar Nursing College Campus" },
                { src: "/images/campus2.jpg", alt: "Sarkar Nursing College Facilities" },
                { src: "/images/campus3.jpg", alt: "Sarkar Nursing College Labs" },
                { src: "/images/campus4.jpg", alt: "Sarkar Nursing College Classrooms" },
              ].map((image, index) => (
                <div key={index} className={`relative ${index % 2 === 1 ? "mt-8" : ""}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={250}
                    className="rounded-xl shadow-lg object-cover w-full h-full"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Alumni Success Stories</h2>
            <p className="text-xl text-gray-600">Our graduates are making a difference in healthcare worldwide</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Maan Sharma, MSN, RN",
                class: "Class of 2019",
                position: "Head Nurse",
                organization: "AIIMS Delhi",
                image: "/images/alumni-profile.jpeg",
                quote:
                  "Sarkar Nursing College provided me with exceptional clinical training and leadership skills that helped me secure a position at one of India's premier hospitals.",
                achievement: "Gold Medalist in MSN program",
              },
              {
                name: "Rajesh Kumar, BSN, RN",
                class: "Class of 2021",
                position: "Critical Care Specialist",
                organization: "Fortis Hospital, Jaipur",
                image: "/images/alumni-profile.jpeg",
                quote:
                  "The hands-on training in state-of-the-art simulation labs at Sarkar Nursing College prepared me perfectly for the challenges of critical care nursing.",
                achievement: "Received Best Nurse Award 2023",
              },
              {
                name: "Ananya Patel, BSN, RN",
                class: "Class of 2022",
                position: "Pediatric Nurse",
                organization: "Rainbow Children's Hospital",
                image: "/images/alumni-profile.jpeg",
                quote:
                  "The faculty at Sarkar Nursing College mentored me throughout my journey, helping me discover my passion for pediatric care and excel in my specialized field.",
                achievement: "Pediatric Nursing Excellence Award",
              },
            ].map((alumni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={alumni.image || "/placeholder.svg"}
                    alt={alumni.name}
                    width={80}
                    height={80}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{alumni.name}</h4>
                    <p className="text-blue-600 text-sm font-medium">{alumni.class}</p>
                    <p className="text-gray-600 text-sm">{alumni.position}</p>
                    <p className="text-gray-500 text-xs">{alumni.organization}</p>
                  </div>
                </div>

                <blockquote className="text-gray-600 italic mb-4">&ldquo;{alumni.quote}&rdquo;</blockquote>

                <div className="flex items-center text-sm">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-gray-700 font-medium">{alumni.achievement}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Latest News & Events</h2>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              View All News
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: "News",
                date: "December 15, 2024",
                title: "St. Mary's Nursing Students Win State Competition",
                excerpt:
                  "Our BSN students placed first in the annual State Nursing Skills Competition, demonstrating excellence in clinical practice.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                type: "Event",
                date: "May 15, 2024",
                title: "Sarkar Nursing Students Win State Competition",
                excerpt:
                  "A team of BSN students took first place in the State Nursing Challenge, demonstrating exceptional clinical knowledge and teamwork.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                type: "Achievement",
                date: "December 10, 2024",
                title: "NCLEX Pass Rate Reaches Record High",
                excerpt:
                  "Our 2024 graduates achieved a 98.5% first-time NCLEX-RN pass rate, exceeding national averages.",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {item.type}
                    </span>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                  <a href="#" className="text-blue-600 font-medium text-sm hover:underline">
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact & Visit */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Visit Our Campus</h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience our state-of-the-art facilities and meet with our admissions team to learn more about our
                programs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Campus Address</h4>
                    <p className="text-gray-300 mb-4">
                      Bansa Road, Samod, Chomu<br />
                      Jaipur, Rajasthan, India
                    </p>
                    <div className="rounded-lg overflow-hidden w-full mt-2">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.935870294683!2d75.80557407152322!3d27.19044219614736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396da9e01ea54ccd%3A0x2744aa12d0eee920!2sSarkar%20Group%20Of%20Education!5e1!3m2!1sen!2sin!4v1752168629609!5m2!1sen!2sin" 
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Contact Numbers</h4>
                    <p className="text-gray-300">
                      Admissions:
                      Mobile: +91 8947 94 7969<br />
                      Mobile: +91 8740 02 7036<br />
                      Mobile: +91 9462 72 6082<br />
                      Monday-Friday: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-300">
                      <a href="mailto:admissions@sarkarnursing.edu" className="hover:text-blue-500">
                        admissions@sarkarnursing.edu
                      </a>
                      <br />
                      <a href="mailto:info@sarkarnursing.edu" className="hover:text-blue-500">
                        info@sarkarnursing.edu
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                  Schedule Visit
                </button>
                <button className="border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800">
                  Virtual Tour
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Request Information</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500">
                  <option>Program of Interest</option>
                  <option>BSN - Bachelor of Science in Nursing</option>
                  <option>MSN - Master of Science in Nursing</option>
                  <option>DNP - Doctor of Nursing Practice</option>
                </select>
                <textarea
                  placeholder="Questions or Comments"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Information Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* College Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    src="/images/sarkar.jpg"
                    alt="Sarkar Group of Education Logo"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sarkar Group of Education</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
              Approved by AICTE & PCI and is affiliated to Rajasthan University of Health Sciences (RUHS)


              </p>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">AACN Accredited</span>
                <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">CCNE Approved</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Academics</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    BSN Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    MSN Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    DNP Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Course Catalog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Academic Calendar
                  </a>
                </li>
              </ul>
            </div>

            {/* Admissions */}
            <div>
              <h4 className="font-bold mb-4">Admissions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Apply Now
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Requirements
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Tuition & Aid
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Visit Campus
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    International Students
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Student Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Library
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Career Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Alumni Network
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support Services
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Sarkar Nursing College. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white">
                  Accessibility
                </a>
                <a href="#" className="hover:text-white">
                  Non-Discrimination
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg z-40 flex items-center justify-center hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

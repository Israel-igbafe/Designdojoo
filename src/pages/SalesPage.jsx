import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiUsers, FiBookOpen } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FiType, FiGrid, FiFileText, FiTarget } from "react-icons/fi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaPalette } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { HiOutlineRocketLaunch, HiOutlineTrophy } from "react-icons/hi2";
import { FiHome, FiBriefcase, FiShare2, FiAward } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

function SalesPage() {
  return (
    <main className="bg-black min-h-screen text-white">

      <Navbar />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Welcome to the Inside,{" "}
          <span className="text-red-500">Alex.</span>
          <br />
          Let's Get to Work.
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
          DesignDojoo is not another course you'll abandon.
          It is a live <span className="text-red-500 font-medium">bootcamp</span>
          {" "}where you learn, pair with peers, and ship real products.
        </p>

        <div className="mt-10 flex justify-center">
          <video
            className="rounded-xl shadow-lg w-full max-w-3xl"
            controls
          >
            <source src="/sales/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-10 max-w-3xl mx-auto leading-relaxed text-white">
          "You see this your tech career,
          let us give you an{" "}
          <span className="text-red-500">accountable partner</span>
          {" "}to stay on track."
        </p>

      </section>

      {/* PROGRAM ORDER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">
          Order of Program
        </h2>

        <p className="text-gray-400 text-center mt-3 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
          An 8-week structured journey from design fundamentals
          to portfolio-ready work and paid gigs.
        </p>

        <div className="mt-12">

          {/* TRACK SELECTOR */}
          <div className="border border-gray-700 rounded-full px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3 text-sm mb-10 bg-gray-900">
            <div className="flex items-center gap-2 text-red-500 font-semibold">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              PRODUCT DESIGN
            </div>
            <div className="flex items-center gap-2 text-yellow-400 font-semibold sm:ml-auto">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              PRODUCT MANAGEMENT
            </div>
          </div>

          {/* WEEK 1 */}
          <div className="flex flex-col gap-6 relative">
            <div className="relative">
              <div className="text-[80px] sm:text-[110px] font-bold text-gray-800 leading-none select-none">
                01
              </div>
              <div className="absolute top-6 sm:top-8 left-3 flex items-center gap-3">
                <span className="font-semibold text-sm tracking-wide text-white">
                  WEEK 1
                </span>
                <span className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                  FOUNDATION
                </span>
              </div>
            </div>

            <div className="flex-1 min-w-0 space-y-4">
              {/* DAY 1 */}
              <div className="flex items-start gap-4 bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6">
                <FiUsers className="text-gray-400 text-xl mt-1 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Day 1</p>
                  <p className="font-semibold text-base sm:text-lg text-white">Onboarding</p>
                  <p className="text-sm text-gray-400">Design Thinking Process: Empathize → Define → Ideate → Prototype → Test</p>
                </div>
                <span className="text-xs bg-gray-800 border border-gray-600 px-3 py-1 rounded-full text-gray-300 whitespace-nowrap shrink-0">
                  Joint Session
                </span>
              </div>

              {/* DAY 2 */}
              <div className="flex items-start gap-4 bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6">
                <FiBookOpen className="text-gray-400 text-xl mt-1 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Day 2</p>
                  <p className="font-semibold text-base sm:text-lg text-white">Human-Centered Design</p>
                  <p className="text-sm text-gray-400">Qualitative user interviews, focus groups</p>
                </div>
                <span className="text-xs bg-gray-800 border border-gray-600 px-3 py-1 rounded-full text-gray-300 whitespace-nowrap shrink-0">
                  Joint Session
                </span>
              </div>

              {/* DAY 3 */}
              <div className="flex items-start gap-4 bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6">
                <HiOutlineLightBulb className="text-gray-400 text-xl mt-1 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Day 3</p>
                  <p className="font-semibold text-base sm:text-lg text-white">Fundamental Design Principles</p>
                  <p className="text-sm text-gray-400">Design shapes and basics</p>
                </div>
                <span className="text-xs bg-gray-800 border border-gray-600 px-3 py-1 rounded-full text-gray-300 whitespace-nowrap shrink-0">
                  Joint Session
                </span>
              </div>
            </div>
          </div>

          {/* WEEK 2 */}
          <div className="mt-20 sm:mt-24 flex flex-col gap-10">
            <div className="relative">
              <div className="text-[80px] sm:text-[110px] font-bold text-gray-800 leading-none select-none">02</div>
              <div className="absolute top-6 sm:top-8 left-3 flex items-center gap-3">
                <span className="font-semibold text-sm tracking-wide text-white">WEEK 2</span>
                <span className="text-xs bg-blue-900 text-blue-300 px-3 py-1 rounded-full">CORE SKILLS</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {/* Center divider — visible only on md+ */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-700"></div>

              {/* LEFT */}
              <div className="space-y-4">
                {[
                  { day: "Day 1", title: "Typography + Low Fidelity Design", Icon: FiType },
                  { day: "Day 2", title: "60-30-10 Colour Theory + High Fidelity Design", Icon: FaPalette },
                  { day: "Day 3", title: "Layout & Grids + High Fidelity Design", Icon: FiGrid },
                ].map(({ day, title, Icon }) => (
                  <div key={day} className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-xl px-4 sm:px-6 py-5">
                    <div className="flex items-start gap-4">
                      <div className="w-[3px] bg-red-500 h-14 rounded shrink-0"></div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-xs bg-red-900 text-red-400 px-2 py-1 rounded-full">UI DESIGN</span>
                          <span className="text-xs text-gray-500">{day}</span>
                        </div>
                        <p className="font-semibold text-white text-sm sm:text-base">{title}</p>
                      </div>
                    </div>
                    <Icon className="text-gray-600 text-2xl sm:text-3xl shrink-0 ml-2" />
                  </div>
                ))}
              </div>

              {/* RIGHT */}
              <div className="space-y-4">
                {[
                  { day: "Day 1", title: "Agile Framework + Journey Maps", Icon: AiOutlineLineChart },
                  { day: "Day 2", title: "Writing PRD + MVP", Icon: FiFileText },
                  { day: "Day 3", title: "OKR + Team Tools", Icon: FiTarget },
                ].map(({ day, title, Icon }) => (
                  <div key={day} className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-xl px-4 sm:px-6 py-5">
                    <div className="flex items-start gap-4">
                      <div className="w-[3px] bg-yellow-400 h-14 rounded shrink-0"></div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-xs bg-yellow-900 text-yellow-400 px-2 py-1 rounded-full">PM TRACK</span>
                          <span className="text-xs text-gray-500">{day}</span>
                        </div>
                        <p className="font-semibold text-white text-sm sm:text-base">{title}</p>
                      </div>
                    </div>
                    <Icon className="text-gray-600 text-2xl sm:text-3xl shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WEEK 3 */}
          <div className="mt-20 sm:mt-24 flex flex-col gap-10">
            <div className="relative">
              <div className="text-[80px] sm:text-[110px] font-bold text-gray-800 leading-none select-none">03</div>
              <div className="absolute top-6 sm:top-8 left-3 flex items-center gap-3">
                <span className="font-semibold text-sm tracking-wide text-white">WEEK 3</span>
                <span className="text-xs bg-yellow-900 text-yellow-400 px-3 py-1 rounded-full">BUILD PHASE</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { day: "Day 1", title: "Project 1 Pairing", sub: "Individual / Business Portfolio", Icon: HiOutlineRocketLaunch },
                { day: "Day 2", title: "Project 1 Mentor Review", sub: null, Icon: FiStar },
                { day: "Day 3", title: "Showcase / Feedback", sub: null, Icon: HiOutlineTrophy },
              ].map(({ day, title, sub, Icon }) => (
                <div key={day} className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-xl px-4 sm:px-6 py-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-purple-900 rounded-lg shrink-0">
                      <Icon className="text-purple-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">{day}</p>
                      <p className="font-semibold text-base sm:text-lg text-white">{title}</p>
                      {sub && <p className="text-sm text-gray-400">{sub}</p>}
                    </div>
                  </div>
                  <span className="text-xs bg-gray-800 border border-gray-600 px-3 py-1 rounded-full text-gray-300 whitespace-nowrap shrink-0 ml-2">
                    Joint Session
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* WEEK 4 */}
          <div className="mt-20 sm:mt-24 flex flex-col gap-10">
            <div className="relative">
              <div className="text-[80px] sm:text-[110px] font-bold text-gray-800 leading-none select-none">04</div>
              <div className="absolute top-6 sm:top-8 left-3 flex items-center gap-3">
                <span className="font-semibold text-sm tracking-wide text-white">WEEK 4</span>
                <span className="text-xs bg-yellow-900 text-yellow-400 px-3 py-1 rounded-full">BUILD PHASE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-[3px] bg-red-500 h-14 rounded shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs bg-red-900 text-red-400 px-2 py-1 rounded-full">UI DESIGN</span>
                      <span className="text-xs text-gray-500">Day 1</span>
                    </div>
                    <p className="font-semibold text-white">Project 2 Pairing</p>
                    <p className="text-sm text-gray-400">Edutech / Prize Money</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-[3px] bg-yellow-400 h-14 rounded shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs bg-yellow-900 text-yellow-400 px-2 py-1 rounded-full">PM TRACK</span>
                      <span className="text-xs text-gray-500">Day 1</span>
                    </div>
                    <p className="font-semibold text-white">Project 1 Mentor Review + Showcase / Feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WEEK 5 */}
          <div className="mt-20 sm:mt-24 flex flex-col gap-10">
            <div className="relative">
              <div className="text-[80px] sm:text-[110px] font-bold text-gray-800 leading-none select-none">05</div>
              <div className="absolute top-6 sm:top-8 left-3 flex items-center gap-3">
                <span className="font-semibold text-sm tracking-wide text-white">WEEK 5</span>
                <span className="text-xs bg-yellow-900 text-yellow-400 px-3 py-1 rounded-full">BUILD PHASE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-[3px] bg-red-500 h-14 rounded shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs bg-red-900 text-red-400 px-2 py-1 rounded-full">UI DESIGN</span>
                      <span className="text-xs text-gray-500">Day 1</span>
                    </div>
                    <p className="font-semibold text-white">Project 3 Re-Pairing</p>
                    <p className="text-sm text-gray-400">FinTech / Prize Money</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-[3px] bg-yellow-400 h-14 rounded shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs bg-yellow-900 text-yellow-400 px-2 py-1 rounded-full">PM TRACK</span>
                      <span className="text-xs text-gray-500">Day 1</span>
                    </div>
                    <p className="font-semibold text-white">Project 1 Mentor Review + Showcase / Feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WEEK 6 */}
          <div className="mt-20 sm:mt-24 flex flex-col gap-6">
            <div className="relative">
              <div className="text-[80px] sm:text-[110px] font-bold text-gray-800 leading-none select-none">06</div>
              <div className="absolute top-6 sm:top-8 left-3 flex items-center gap-3">
                <span className="font-semibold text-sm tracking-wide text-white">WEEK 6</span>
                <span className="text-xs bg-blue-900 text-blue-300 px-3 py-1 rounded-full">LAUNCH</span>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-900 rounded-lg shrink-0">
                <FiShare2 className="text-blue-400 text-lg" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 mb-1">Day 1</p>
                <p className="font-semibold text-base sm:text-lg text-white">Social Media</p>
                <p className="text-sm text-gray-400">Declaration of Personal Project</p>
              </div>
              <span className="text-xs bg-gray-800 border border-gray-600 px-3 py-1 rounded-full text-gray-300 whitespace-nowrap shrink-0">
                Joint Session
              </span>
            </div>
          </div>

          {/* WEEK 7 */}
          <div className="mt-20 sm:mt-24 flex flex-col gap-6">
            <div className="relative">
              <div className="text-[80px] sm:text-[110px] font-bold text-gray-800 leading-none select-none">07</div>
              <div className="absolute top-6 sm:top-8 left-3 flex items-center gap-3">
                <span className="font-semibold text-sm tracking-wide text-white">WEEK 7</span>
                <span className="text-xs bg-blue-900 text-blue-300 px-3 py-1 rounded-full">LAUNCH</span>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-900 rounded-lg shrink-0">
                <FiBriefcase className="text-blue-400 text-lg" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 mb-1">Day 1</p>
                <p className="font-semibold text-base sm:text-lg text-white">Portfolio & CV</p>
              </div>
              <span className="text-xs bg-gray-800 border border-gray-600 px-3 py-1 rounded-full text-gray-300 whitespace-nowrap shrink-0">
                Joint Session
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* WEEK 8 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24">
        <div className="relative">
          <div className="text-[80px] sm:text-[110px] font-bold text-gray-800 leading-none select-none">08</div>
          <div className="absolute top-6 sm:top-8 left-3 flex items-center gap-3">
            <span className="font-semibold text-sm tracking-wide text-white">WEEK 8</span>
            <span className="text-xs bg-yellow-900 text-yellow-400 px-3 py-1 rounded-full">MILESTONE</span>
          </div>
        </div>
      </div>

      {/* FINAL MILESTONE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="bg-gray-900 border border-gray-700 text-white rounded-xl p-6 sm:p-8 text-center">
          <div className="flex items-center justify-center gap-2 text-red-500 text-sm mb-3">
            <FiAward className="text-red-500" />
            <span className="font-semibold tracking-wide">FINAL MILESTONE</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold">
            Presentation of Personal Project
          </h3>
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            <span className="text-sm bg-gray-800 px-4 py-2 rounded-full text-gray-300">Look for paid gigs</span>
            <span className="text-sm bg-gray-800 px-4 py-2 rounded-full text-gray-300">Client Acquisition</span>
            <span className="text-sm bg-gray-800 px-4 py-2 rounded-full text-gray-300">DesignDojoo Agency</span>
          </div>
        </div>
      </div>

      {/* HOW DESIGNDOJOO WORKS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-white">
          How DesignDojoo Works
        </h2>
        <p className="text-gray-400 text-center mt-2 text-sm sm:text-base">
          Hear directly from students and instructors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-700 shadow-md">
              <video className="w-full h-56 sm:h-60 object-cover" controls>
                <source src="/sales/dojo-video.mp4" type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </section>

      {/* SEAT RESERVED */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Your Seat is Reserved,{" "}
          <span className="text-red-500">Alex.</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Your scholarship has been applied. Complete your enrollment before the timer expires.
        </p>
      </section>

      {/* PRICING */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="border border-gray-700 rounded-xl overflow-hidden bg-gray-900 shadow-sm">

          {/* HEADER */}
          <div className="bg-gray-800 text-white px-4 sm:px-6 py-4 font-semibold border-l-4 border-red-500 text-sm sm:text-base">
            DesignDojoo Product Experience
          </div>

          {/* OPTION 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-6 border-b border-gray-700">
            <div>
              <p className="font-semibold text-white">Standard Bootcamp</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mt-2">
                <span className="flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  <FiHome className="text-sm" /> Tier 1
                </span>
                <span>8 Weeks</span>
                <span className="font-medium text-white">₦41,829</span>
                <span className="line-through text-gray-500">₦82,658</span>
              </div>
              <p className="text-xs text-red-400 mt-1">50% Scholarship Applied</p>
            </div>
            <button className="bg-white text-black px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto">
              Apply direct →
            </button>
          </div>

          {/* OPTION 2 */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-6 border-b border-gray-700">
            <div>
              <p className="font-semibold text-white">Agency Placement</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mt-2">
                <span className="flex items-center gap-1 bg-gray-700 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  <FiBriefcase className="text-sm" /> Tier 2
                </span>
                <span>Part-time, 1 Year</span>
                <span className="font-medium text-white">₦49,829</span>
                <span className="line-through text-gray-500">₦99,658</span>
              </div>
              <p className="text-xs text-red-400 mt-1">50% Scholarship Applied • Includes ₦40,000 Placement Fee</p>
            </div>
            <button className="bg-white text-black px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto">
              Apply direct →
            </button>
          </div>

          {/* MENTORSHIP HEADER */}
          <div className="bg-red-950 border-l-4 border-red-500 px-4 sm:px-6 py-3 font-semibold text-white text-sm sm:text-base">
            Mentorship with Placement
          </div>

          {/* OPTION 3 */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-6">
            <div>
              <p className="font-semibold text-white">Mentorship + Agency Placement</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mt-2">
                <span className="flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  <FaGraduationCap className="text-sm" /> All-in-One
                </span>
                <span>Full-time, 1 Year</span>
                <span className="font-medium text-white">₦65,829</span>
                <span className="line-through text-gray-500">₦131,658</span>
              </div>
              <p className="text-xs text-red-400 mt-1">50% Scholarship Applied • Includes Placement + Mentorship Fees</p>
            </div>
            <button className="bg-white text-black px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto">
              Apply direct →
            </button>
          </div>

        </div>
      </section>

      {/* BACKED BY */}
      <section className="text-center py-16 border-t border-gray-800">
        <p className="text-gray-400 text-sm">Backed by the Best.</p>
        <img src="/images/partners/pediforte.svg" className="mx-auto mt-4 h-10" />
      </section>

      {/* CERTIFICATE + TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* CERTIFICATE IMAGE */}
        <img src="/images/certificates/certificates-5.svg" className="rounded-xl shadow-sm border border-gray-700 w-full" />

        {/* TESTIMONIALS */}
        <div className="space-y-4 sm:space-y-6">
          {[
            { initials: "TA", quote: "\"I shipped my first product in week 5. DesignDojoo is the real deal.\"", name: "Temi A.", role: "UI Designer, Flutterwave" },
            { initials: "KB", quote: "\"The PM track gave me a framework I use every single day at work.\"", name: "Kola B.", role: "Product Manager, Paystack" },
            { initials: "ZM", quote: "\"Best investment I made in my career. The peer pairing is genius.\"", name: "Zara M.", role: "Product Designer, Andela" },
          ].map(({ initials, quote, name, role }) => (
            <div key={initials} className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold text-gray-300 shrink-0">
                  {initials}
                </div>
                <div>
                  <div className="text-red-500 text-sm mb-2">★★★★★</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{quote}</p>
                  <p className="text-xs text-gray-500 mt-3">
                    <span className="font-semibold text-gray-300">{name}</span> — {role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      <Footer />

    </main>
  );
}

export default SalesPage;

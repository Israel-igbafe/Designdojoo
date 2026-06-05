import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { FiUsers, FiBookOpen, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FiType, FiGrid, FiFileText, FiTarget, FiShare2 } from "react-icons/fi";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaPalette, FaGraduationCap } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { HiOutlineRocketLaunch, HiOutlineTrophy } from "react-icons/hi2";
import { FiHome, FiBriefcase, FiAward } from "react-icons/fi";
import { HiOutlineBriefcase, HiOutlineDocumentText, HiOutlineUserGroup, HiOutlineSparkles, HiOutlineClipboardList } from "react-icons/hi";

/* ─── LEVEL BADGE ─────────────────────────────────────────── */
const levelStyles = {
  Beginner:     "bg-green-800 text-green-300",
  Intermediate: "bg-blue-800 text-blue-300",
  Professional: "bg-purple-800 text-purple-300",
  Executive:    "bg-yellow-800 text-yellow-300",
};

function LevelBadge({ level }) {
  return (
    <span className={`text-xs px-3 py-1 rounded-full font-medium ${levelStyles[level] || "bg-gray-700 text-gray-300"}`}>
      {level}
    </span>
  );
}

/* ─── TRACK PILL ──────────────────────────────────────────── */
function TrackPill({ track }) {
  if (track === "UI DESIGN") return <span className="text-[10px] bg-red-900 text-red-400 px-2 py-0.5 rounded-full font-medium uppercase tracking-wide">UI Design</span>;
  if (track === "PM TRACK")  return <span className="text-[10px] bg-yellow-900 text-yellow-400 px-2 py-0.5 rounded-full font-medium uppercase tracking-wide">PM Track</span>;
  return <span className="text-[10px] bg-gray-700 text-gray-400 px-2 py-0.5 rounded-full font-medium uppercase tracking-wide">Joint Session</span>;
}

/* ─── SESSION ROW ─────────────────────────────────────────── */
function SessionRow({ day, title, subtitle, track, Icon }) {
  const accentColor = track === "UI DESIGN" ? "bg-red-500" : track === "PM TRACK" ? "bg-yellow-400" : null;
  return (
    <div className="flex items-start gap-4 py-4 border-b border-gray-800 last:border-0">
      {accentColor ? (
        <div className={`w-[3px] ${accentColor} rounded self-stretch mt-1 shrink-0`}></div>
      ) : (
        <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
          {Icon && <Icon className="text-gray-500 text-base" />}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
          <TrackPill track={track} />
          <span className="text-[10px] text-gray-500">Day {day}</span>
        </div>
        <p className="text-sm font-semibold text-white leading-snug">{title}</p>
        {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}

/* ─── SPLIT SESSION ROW (for weeks with 2-col days) ──────── */
function SplitWeekContent({ leftSessions, rightSessions }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800">
      <div className="pr-0 md:pr-6">
        {leftSessions.map((s, i) => <SessionRow key={i} {...s} />)}
      </div>
      <div className="pl-0 md:pl-6 pt-4 md:pt-0">
        {rightSessions.map((s, i) => <SessionRow key={i} {...s} />)}
      </div>
    </div>
  );
}

/* ─── ACCORDION WEEK ──────────────────────────────────────── */
function WeekAccordion({ weekNum, level, phase, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-gray-950 hover:bg-gray-900 transition-colors"
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-semibold text-sm text-white tracking-wide">WEEK {weekNum}</span>
          <LevelBadge level={level} />
          {phase && <span className="text-xs text-gray-500">{phase}</span>}
        </div>
        {open
          ? <FiChevronUp className="text-gray-400 text-lg shrink-0" />
          : <FiChevronDown className="text-gray-400 text-lg shrink-0" />
        }
      </button>
      {open && (
        <div className="px-5 pb-4 bg-gray-950 border-t border-gray-800">
          {children}
        </div>
      )}
    </div>
  );
}

/* ─── COUNTDOWN HOOK ──────────────────────────────────────── */
function useCountdown(targetDate) {
  const calc = () => {
    const diff = Math.max(0, targetDate - Date.now());
    return {
      hours:   Math.floor(diff / 1000 / 3600),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ─── MAIN COMPONENT ──────────────────────────────────────── */
function SalesPage() {
  // Read the user's name from the URL: /sales?name=Alex
  // Falls back to "Chief" if no name param is present.
  const [userName] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("name") || "";
    // Capitalise first letter of each word, strip any unsafe characters
    return raw
      ? raw.replace(/[^a-zA-Z\s'-]/g, "").trim().replace(/\b\w/g, (c) => c.toUpperCase()) || "Chief"
      : "Chief";
  });

  // Persist deadline in localStorage — clock starts on first visit (email link click)
  // and survives page refreshes. Keyed per user so two users on the same browser
  // don't share a deadline.
  const [target] = useState(() => {
    const KEY = `designdojoo_deadline_${userName}`;
    const stored = localStorage.getItem(KEY);
    if (stored) return Number(stored);
    const deadline = Date.now() + 72 * 60 * 60 * 1000;
    localStorage.setItem(KEY, String(deadline));
    return deadline;
  });
  const { hours, minutes, seconds } = useCountdown(target);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <main className="bg-black min-h-screen text-white">

      {/* Sales page navbar — logo only, black background */}
      <nav className="bg-black px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.12 41.73" className="h-8 w-auto">
            <path fill="#0d090a" d="M39.48,6.05c4-4.26,10-5.57,15.59-5.34L71.92.06l1.2,0V41.62c-7.25.16-14.25.11-21.47.06A21,21,0,0,1,34.07,31.1c-3.91-5.57-.93-13.74-6.34-18.35C22.58,8.43,15.25,10.52,9,10.15L10.15,9V32.71c0,.15-1.09-1.17-1.09-1.14l10.3.62a12.09,12.09,0,0,0,9.45-2.8c-1.61,2.73-6.18,4.09-9.45,4.07-.48,0-11.4.53-11.57.51V7.79C13.26,8,19,7.11,24.43,8.32c5.49,1.46,9.27,7,9.26,12.51a19.68,19.68,0,0,0,2.44,9.11,18.61,18.61,0,0,0,15.61,9.38c6.63,0,13.53.09,20.13,0l-1.11,1.18V1.24S72,2.44,71.92,2.42L55.1,1.89c-5.68-.59-11.26.2-15.62,4.16Z"/>
            <path fill="#b41f24" d="M33.64,35.68c-4,4.26-10,5.57-15.59,5.34L1.2,41.66l-1.2,0V.11C7.25,0,14.25,0,21.47.05A21,21,0,0,1,39.05,10.62C43,16.19,40,24.36,45.39,29c5.15,4.32,12.48,2.22,18.75,2.6L63,32.76V9c0-.15,1.09,1.18,1.1,1.15l-10.3-.67a12.15,12.15,0,0,0-9.51,2.78,12.77,12.77,0,0,1,9.51-4c.46,0,11.42-.58,11.56-.56V33.94c-5.46-.16-11.19.68-16.64-.53-5.48-1.46-9.27-7-9.25-12.51A19.88,19.88,0,0,0,37,11.78,18.61,18.61,0,0,0,21.37,2.41c-6.62-.05-13.53-.09-20.13,0L2.36,1.26V40.48S1.13,39.28,1.2,39.3L18,39.84c5.68.59,11.26-.21,15.62-4.16Z"/>
          </svg>
          <span className="text-white font-bold text-xl tracking-tight">DesignDojoo</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Welcome to the Inside,{" "}
          <span className="text-red-500">{userName}.</span>
          <br />
          Let's Get to Work.
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
          DesignDojoo is not another course you'll abandon.
          It is a live <span className="text-red-500 font-medium">bootcamp</span>
          {" "}where you learn, pair with peers, and ship real products.
        </p>
        <div className="mt-10 flex justify-center">
          <video className="rounded-xl shadow-lg w-full max-w-3xl border border-gray-800" controls>
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

      {/* ORDER OF PROGRAM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">Order of Program</h2>
        <p className="text-gray-400 text-center mt-3 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
          An 8-week structured journey from design fundamentals to portfolio-ready work and paid gigs.
        </p>

        {/* TRACK INDICATOR */}
        <div className="border border-gray-800 rounded-full px-5 py-3 flex flex-wrap items-center gap-4 text-sm my-8 bg-gray-950">
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
        <WeekAccordion weekNum="1" level="Beginner" phase="Foundation" defaultOpen>
          <SessionRow day={1} title="Onboarding" subtitle="Design Thinking Process: Empathize → Define → Ideate → Prototype → Test" track="JOINT" Icon={FiUsers} />
          <SessionRow day={2} title="Human-Centered Design" subtitle="Qualitative user interviews, focus groups" track="JOINT" Icon={FiBookOpen} />
          <SessionRow day={3} title="Fundamental Design Principles" subtitle="Design shapes and basics" track="JOINT" Icon={HiOutlineLightBulb} />
        </WeekAccordion>

        {/* WEEK 2 */}
        <WeekAccordion weekNum="2" level="Beginner" phase="Core Skills">
          <SplitWeekContent
            leftSessions={[
              { day: 1, title: "Typography + Low Fidelity Design", track: "UI DESIGN", Icon: FiType },
              { day: 2, title: "60-30-10 Colour Theory + High Fidelity Design", track: "UI DESIGN", Icon: FaPalette },
              { day: 3, title: "Layout & Grids + High Fidelity Design", track: "UI DESIGN", Icon: FiGrid },
            ]}
            rightSessions={[
              { day: 1, title: "Agile Framework + Journey Maps", track: "PM TRACK", Icon: AiOutlineLineChart },
              { day: 2, title: "Writing PRD + MVP", track: "PM TRACK", Icon: FiFileText },
              { day: 3, title: "OKR + Team Tools", track: "PM TRACK", Icon: FiTarget },
            ]}
          />
        </WeekAccordion>

        {/* WEEK 3 */}
        <WeekAccordion weekNum="3" level="Intermediate" phase="Build Phase">
          <SessionRow day={1} title="Project 1 Pairing" subtitle="E-commerce / Business Portfolio" track="JOINT" Icon={HiOutlineRocketLaunch} />
          <SessionRow day={2} title="Project 1 Mentor Review" track="JOINT" Icon={FiStar} />
          <SessionRow day={3} title="Showcase / Feedback" track="JOINT" Icon={HiOutlineTrophy} />
        </WeekAccordion>

        {/* WEEK 4 */}
        <WeekAccordion weekNum="4" level="Intermediate" phase="Build Phase">
          <SessionRow day={1} title="Project 2 Pairing" subtitle="EduTech / Prize Money" track="JOINT" Icon={HiOutlineRocketLaunch} />
          <SessionRow day={2} title="Project 2 Mentor Review" track="JOINT" Icon={FiStar} />
          <SessionRow day={3} title="Showcase / Feedback" track="JOINT" Icon={HiOutlineTrophy} />
        </WeekAccordion>

        {/* WEEK 5 */}
        <WeekAccordion weekNum="5" level="Professional" phase="Build Phase">
          <SessionRow day={1} title="Project 3 Re-Pairing" subtitle="Fin-Tech / Prize Money" track="JOINT" Icon={HiOutlineRocketLaunch} />
          <SessionRow day={2} title="Project 1 Mentor Review" track="JOINT" Icon={FiStar} />
          <SessionRow day={3} title="Showcase / Feedback" track="JOINT" Icon={HiOutlineTrophy} />
        </WeekAccordion>

        {/* WEEK 6 */}
        <WeekAccordion weekNum="6" level="Professional" phase="Personal Brand">
          <SplitWeekContent
            leftSessions={[
              { day: 1, title: "Optimizing Profile on Social Media", track: "UI DESIGN", Icon: FiShare2 },
              { day: 2, title: "Personal Branding", track: "JOINT", Icon: HiOutlineSparkles },
              { day: 3, title: "Declaration of Personal Project", track: "JOINT", Icon: HiOutlineDocumentText },
            ]}
            rightSessions={[
              { day: 1, title: "Personal Branding", track: "PM TRACK", Icon: HiOutlineSparkles },
              { day: 2, title: "Personal Branding", track: "JOINT", Icon: HiOutlineSparkles },
              { day: 3, title: "Declaration of Personal Project", track: "JOINT", Icon: HiOutlineDocumentText },
            ]}
          />
        </WeekAccordion>

        {/* WEEK 7 */}
        <WeekAccordion weekNum="7" level="Executive" phase="Career Prep">
          <SessionRow day={1} title="Crafting a High-Impact CV" track="JOINT" Icon={HiOutlineDocumentText} />
          <SessionRow day={2} title="The Perfect Portfolio" track="JOINT" Icon={HiOutlineBriefcase} />
          <SessionRow day={3} title="Interview Preparation" track="JOINT" Icon={HiOutlineUserGroup} />
        </WeekAccordion>

        {/* WEEK 8 */}
        <WeekAccordion weekNum="8" level="Executive" phase="Final Milestone">
          <SessionRow day={1} title="Presentation of Personal Projects" track="JOINT" Icon={HiOutlineRocketLaunch} />
          <SessionRow day={2} title="Freelancing & Hunting for Paid Gigs" track="JOINT" Icon={HiOutlineClipboardList} />
          <SessionRow day={3} title="Client Acquisition & DesignDojoo Agency Integration" track="JOINT" Icon={HiOutlineBriefcase} />
        </WeekAccordion>

      </section>

      {/* FINAL MILESTONE CARD */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-white text-black rounded-xl p-6 sm:p-10 text-center shadow-xl">
          <div className="flex items-center justify-center gap-2 text-red-500 text-sm mb-3">
            <FiAward />
            <span className="font-semibold tracking-wide uppercase text-xs">Final Milestone</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Presentation of Personal Project
          </h3>
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            <span className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-full">Look for paid gigs</span>
            <span className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-full">Client Acquisition</span>
            <span className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-full">DesignDojoo Agency</span>
          </div>
        </div>
      </div>

      {/* HOW DESIGNDOJOO WORKS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-white">How DesignDojoo Works</h2>
        <p className="text-gray-400 text-center mt-2 text-sm sm:text-base">Hear directly from students and instructors.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-800">
              <video className="w-full h-56 sm:h-60 object-cover" controls>
                <source src="/sales/dojo-video.mp4" type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </section>

      {/* COUNTDOWN / SEAT RESERVED */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center">
            <span className="text-red-400 text-lg">⏱</span>
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Complete Your Enrollment Before Time Runs Out
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Before your seat is reversed, <span className="text-red-500 font-medium">{userName}.</span>
        </p>

        {/* TIMER DISPLAY */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-8">
          {[[pad(hours), "Hours"], [pad(minutes), "Minutes"], [pad(seconds), "Seconds"]].map(([val, label]) => (
            <div key={label} className="flex flex-col items-center">
              <div className="bg-gray-900 border border-gray-700 rounded-lg w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center tabular-nums">
                <span className="text-2xl sm:text-3xl font-bold text-white">{val}</span>
              </div>
              <span className="text-xs text-gray-500 mt-2">{label}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-red-500 mt-5">
          ● Limited spots available — Secure yours now
        </p>
      </section>

      {/* SEAT RESERVED HEADING */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Your Seat is Reserved,{" "}
          <span className="text-red-500">{userName}.</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Your scholarship has been applied. Complete your enrollment before the timer expires.
        </p>
      </section>

      {/* PRICING */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="border border-gray-800 rounded-xl overflow-hidden bg-gray-950">

          <div className="bg-gray-900 text-white px-4 sm:px-6 py-4 font-semibold border-l-4 border-red-500 text-sm sm:text-base">
            DesignDojoo Product Experience
          </div>

          {/* OPTION 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-6 border-b border-gray-800">
            <div>
              <p className="font-semibold text-white">Standard Bootcamp</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mt-2">
                <span className="flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  <FiHome className="text-sm" /> Tier 1
                </span>
                <span>8 Weeks</span>
                <span className="font-medium text-white">₦41,829</span>
                <span className="line-through text-gray-600">₦82,658</span>
              </div>
              <p className="text-xs text-red-400 mt-1">50% Scholarship Applied</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors w-full sm:w-auto">
              Apply direct <span>→</span>
            </button>
          </div>

          {/* OPTION 2 */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-6 border-b border-gray-800">
            <div>
              <p className="font-semibold text-white">Agency Placement</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mt-2">
                <span className="flex items-center gap-1 bg-gray-700 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  <FiBriefcase className="text-sm" /> Tier 2
                </span>
                <span>Part-time, 1 Year</span>
                <span className="font-medium text-white">₦49,829</span>
                <span className="line-through text-gray-600">₦99,658</span>
              </div>
              <p className="text-xs text-red-400 mt-1">50% Scholarship Applied • Includes ₦40,000 Placement Fee</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors w-full sm:w-auto">
              Apply direct <span>→</span>
            </button>
          </div>

          {/* MENTORSHIP HEADER */}
          <div className="bg-red-950 border-l-4 border-red-500 px-4 sm:px-6 py-3 font-semibold text-white text-sm">
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
                <span className="line-through text-gray-600">₦131,658</span>
              </div>
              <p className="text-xs text-red-400 mt-1">50% Scholarship Applied • Includes Placement + Mentorship Fees</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors w-full sm:w-auto">
              Apply direct <span>→</span>
            </button>
          </div>

        </div>
      </section>

      {/* BACKED BY */}
      <section className="text-center py-12 border-t border-gray-900">
        <p className="text-gray-500 text-sm">Backed by the Best.</p>
        <img src="/images/partners/pediforte.svg" className="mx-auto mt-4 h-10" />
      </section>

      {/* CERTIFICATE + TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <img src="/images/certificates/certificates-5.svg" className="rounded-xl shadow-sm border border-gray-800 w-full" />

        <div className="space-y-4">
          {[
            { initials: "TA", quote: "\"I shipped my first product in week 5. DesignDojoo is the real deal.\"", name: "Temi A.", role: "UI Designer, Flutterwave" },
            { initials: "KB", quote: "\"The PM track gave me a framework I use every single day at work.\"", name: "Kola B.", role: "Product Manager, Paystack" },
            { initials: "ZM", quote: "\"Best investment I made in my career. The peer pairing is genius.\"", name: "Zara M.", role: "Product Designer, Andela" },
          ].map(({ initials, quote, name, role }) => (
            <div key={initials} className="bg-gray-950 border border-gray-800 rounded-xl p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-sm font-semibold text-gray-300 shrink-0">
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

      {/* ── INLINE FOOTER (white, matches Figma) ─────────────── */}
      <footer className="bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT — logo + tagline + socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.12 41.73" className="h-8 w-auto">
                <path fill="#0d090a" d="M39.48,6.05c4-4.26,10-5.57,15.59-5.34L71.92.06l1.2,0V41.62c-7.25.16-14.25.11-21.47.06A21,21,0,0,1,34.07,31.1c-3.91-5.57-.93-13.74-6.34-18.35C22.58,8.43,15.25,10.52,9,10.15L10.15,9V32.71c0,.15-1.09-1.17-1.09-1.14l10.3.62a12.09,12.09,0,0,0,9.45-2.8c-1.61,2.73-6.18,4.09-9.45,4.07-.48,0-11.4.53-11.57.51V7.79C13.26,8,19,7.11,24.43,8.32c5.49,1.46,9.27,7,9.26,12.51a19.68,19.68,0,0,0,2.44,9.11,18.61,18.61,0,0,0,15.61,9.38c6.63,0,13.53.09,20.13,0l-1.11,1.18V1.24S72,2.44,71.92,2.42L55.1,1.89c-5.68-.59-11.26.2-15.62,4.16Z"/>
                <path fill="#b41f24" d="M33.64,35.68c-4,4.26-10,5.57-15.59,5.34L1.2,41.66l-1.2,0V.11C7.25,0,14.25,0,21.47.05A21,21,0,0,1,39.05,10.62C43,16.19,40,24.36,45.39,29c5.15,4.32,12.48,2.22,18.75,2.6L63,32.76V9c0-.15,1.09,1.18,1.1,1.15l-10.3-.67a12.15,12.15,0,0,0-9.51,2.78,12.77,12.77,0,0,1,9.51-4c.46,0,11.42-.58,11.56-.56V33.94c-5.46-.16-11.19.68-16.64-.53-5.48-1.46-9.27-7-9.25-12.51A19.88,19.88,0,0,0,37,11.78,18.61,18.61,0,0,0,21.37,2.41c-6.62-.05-13.53-.09-20.13,0L2.36,1.26V40.48S1.13,39.28,1.2,39.3L18,39.84c5.68.59,11.26-.21,15.62-4.16Z"/>
              </svg>
              <span className="text-xl font-bold text-gray-900 tracking-tight">DesignDojoo</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Transforming aspiring designers and product managers into industry-ready professionals through accountability, real projects, and career support.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 pt-1">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Email */}
              <a href="#" aria-label="Email" className="text-gray-500 hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75"/>
                </svg>
              </a>
            </div>
          </div>

          {/* MIDDLE — Program links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm tracking-wide uppercase">Program</h4>
            <ul className="space-y-3">
              {["UI Design Track", "PM Track", "Curriculum", "Scholarship"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Resources links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm tracking-wide uppercase">Resources</h4>
            <ul className="space-y-3">
              {["Blog", "FAQ", "Contact Us", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200">
          <p className="text-center text-xs text-gray-400 py-5">
            © 2025 DesignDojoo. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}

export default SalesPage;

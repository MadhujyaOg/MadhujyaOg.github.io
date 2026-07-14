import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import EarthCanvas from "./components/EarthCanvas";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
      colorStops={["#577870", "#1F97A6", "#127B99"]}
      blend={0.3}
      amplitude={0.5}
      speed={0.3}
     />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
  <img src="./assets/faris1.png" className="w-10 rounded-md" />
  <q>Every frame is a choice. Every cut, an intention.</q>
</div>
<h1 className="text-5xl font-bold mb-6">
  <ShinyText text="Hi I'm Madhujya" disabled={false} speed={3} className='custom-class' />
</h1>
<BlurText
  text="A Visual Artist and Post-Production Specialist crafting cinematic edits, motion graphics, and color grades that tell stories worth watching."
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="./assets/CV.pdf" 
                download="Madhujya_CV.pdf" 
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Madhujya"
              title="Visual Artist"
              handle="madhujya"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/faris.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

              <BlurText
                  text="I'm Madhujya — a Visual Artist, Video Editor, and AI Enthusiast crafting cinematic stories frame by frame. From color grading in DaVinci Resolve to motion graphics in After Effects, I turn raw footage into emotional experiences. Fuelled by creativity, precision, and a deep curiosity for where AI meets visual storytelling."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <ShinyText
                  text="Every cut is intentional. Every frame, a feeling."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

        </div>
       {/* WHAT I DO */}
<div className="mt-16 md:mt-24 lg:mt-16 md:mt-24 lg:mt-32" id="whatido">
  <h1 className="text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">What I Do</h1>
  <p className="text-base opacity-50 mb-8 md:mb-14" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My core creative disciplines</p>
  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
    {[
      { icon: "🎬", title: "Video Editing", desc: "Precision cutting and storytelling that transforms raw footage into compelling visual narratives. Every frame intentional, every cut purposeful.", tags: ["Narrative", "Pacing", "Storytelling"] },
      { icon: "✨", title: "Motion Graphics", desc: "Dynamic animations and visual elements that breathe life into ideas — from subtle UI motion to full cinematic title sequences.", tags: ["Animation", "Kinetic Type", "Compositing"] },
      { icon: "🎨", title: "Color Grading", desc: "The art of mood through color. Transforming flat footage into rich, immersive visual worlds that make viewers feel before they think.", tags: ["LUTs", "Colour Science", "Cinematic"] },
      { icon: "🖌️", title: "Graphic Design", desc: "From social media creatives to brand assets, delivering polished designs that feel modern, intentional, and impactful.", tags: ["Branding", "Social Media", "Visual Design"] },
    ].map((item, index) => (
      <div
        key={index}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={index * 100}
        data-aos-once="true"
        className="flex flex-col gap-4 p-6 border border-zinc-700 rounded-2xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300"
      >
        <span className="text-4xl">{item.icon}</span>
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {item.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-violet-500/30 text-violet-400 bg-violet-500/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
{/* WHAT I DO END */}
        <div className="tools mt-16 md:mt-24 lg:mt-16 md:mt-24 lg:mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools I Use</h1>
<p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Software I work with daily</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        {/* Proyek */}
        <div className="proyek mt-16 md:mt-24 lg:mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}


       {/* MY PROCESS */}
<div className="mt-16 md:mt-24 lg:mt-32" id="process">
  <h1 className="text-4xl font-bold mb-4 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">My Process</h1>
  <p className="text-base opacity-50 mb-8 md:mb-14 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">How I bring your vision to life</p>
  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
    {[
      { step: "01", title: "Discovery", desc: "Understanding your vision, audience, and the emotion you want to create. Every great project begins with listening." },
      { step: "02", title: "Assembly", desc: "Organising footage, building the rough cut, establishing the rhythm and pacing that will carry your story." },
      { step: "03", title: "Refinement", desc: "Motion graphics, sound integration, fine-tuning every transition and moment for maximum impact." },
      { step: "04", title: "Color & Deliver", desc: "Final color grade to set the mood, export in your required format — delivered clean and on time." },
    ].map((item, index) => (
      <div
        key={index}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={index * 150}
        data-aos-once="true"
        className="relative flex flex-col gap-4 p-6 border border-zinc-700 rounded-2xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300"
      >
        <span className="text-6xl font-bold text-violet-500/20 absolute top-4 right-4">{item.step}</span>
        <span className="text-sm text-violet-400 font-semibold">— Step {item.step}</span>
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
      </div>
    ))}
  </div>
</div>
{/* MY PROCESS END */}
        {/* Kontak */}
        {/* Kontak */}
<div className="kontak mt-16 md:mt-24 lg:mt-32 sm:p-10 p-0" id="contact">
  <h1
    className="text-4xl mb-2 font-bold text-center"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    Contact & Chat
  </h1>
  <p
    className="text-base/loose text-center mb-10 opacity-50"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="300"
    data-aos-once="true"
  >
    Have a project in mind?
  </p>

  <div className="flex flex-col xl:flex-row gap-10 overflow-hidden">

    {/* Left - Contact Form */}
    <div
      className="flex-[0.75] bg-zinc-800 rounded-2xl p-8"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <form
        action="https://formsubmit.co/madhujya418@gmail.com"
        method="POST"
        autoComplete="off"
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-white">Full Name</label>
          <input
            type="text"
            name="Name"
            placeholder="Input Name..."
            className="border border-zinc-500 p-3 rounded-lg bg-zinc-900 text-white outline-none"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-white">Email</label>
          <input
            type="email"
            name="Email"
            placeholder="Input Email..."
            className="border border-zinc-500 p-3 rounded-lg bg-zinc-900 text-white outline-none"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-white">Message</label>
          <textarea
            name="message"
            rows={7}
            placeholder="Message..."
            className="border border-zinc-500 p-3 rounded-lg bg-zinc-900 text-white outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="font-semibold bg-violet-600 hover:bg-violet-700 text-white p-4 px-6 rounded-full w-full transition-colors"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-8 pt-6 border-t border-zinc-700 flex flex-wrap gap-4 justify-center">
        <a href="https://www.instagram.com/lumenline9" target="_blank" className="text-sm text-zinc-400 hover:text-violet-400 transition-colors">Instagram</a>
        <a href="https://fiverr.com/madhurjya10" target="_blank" className="text-sm text-zinc-400 hover:text-violet-400 transition-colors">Fiverr</a>
        <a href="https://www.linkedin.com/in/madhujyaborah" target="_blank" className="text-sm text-zinc-400 hover:text-violet-400 transition-colors">LinkedIn</a>
      </div>
    </div>

    {/* Right - 3D Earth */}
    <div
      className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <EarthCanvas />
    </div>

  </div>
</div>
{/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App

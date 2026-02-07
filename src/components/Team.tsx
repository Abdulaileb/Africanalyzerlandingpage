import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';
import alexPhoto from '../assets/team/alex.webp';

export function Team() {
  return (
    <section id="team" className="relative py-20 px-6 lg:px-8 bg-gradient-to-b from-[#111827] to-[#0A0F1F]">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2D6BFF]/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00C2A8]/20 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            The Minds Behind{' '}
            <span className="bg-gradient-to-r from-[#2D6BFF] to-[#00C2A8] bg-clip-text text-transparent">
              Afric-Analyzer
            </span>
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            A passionate team of innovators dedicated to transforming African football analytics 
            through cutting-edge technology and data-driven insights.
          </p>
        </motion.div>

        {/* Founder Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative bg-gradient-to-br from-[#111827] to-[#1a1f35] rounded-2xl p-8 lg:p-12 border border-white/10 overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2D6BFF]/10 to-[#00C2A8]/10 blur-2xl opacity-50" />
            
            <div className="relative grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Founder Image - Clean with no borders or glows */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=faces"
                    alt="Abdulai Tamba Lbbie"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Founder Info */}
              <div className="space-y-6">
                <div>
                  {/* Simple label without background - inspired by "AGENT" */}
                  <p className="text-xs font-semibold text-[#6B7280] tracking-wider mb-3">
                    ★ FOUNDER & LEAD ENGINEER
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    Abdulai Tamba Lbbie
                  </h3>
                  <div className="flex items-center gap-3 mb-6">
                    <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
                    <SocialLink href="#" icon={<Github size={20} />} label="GitHub" />
                    <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
                    <SocialLink href="#" icon={<Mail size={20} />} label="Email" />
                  </div>
                </div>

                <div className="space-y-4 text-[#6B7280]">
                  <p className="leading-relaxed">
                    Abdulai is a visionary software engineer with a passion for leveraging technology 
                    to unlock the untapped potential of African football. With over 5 years of experience 
                    in data analytics and machine learning, he founded Afric-Analyzer to bridge the gap 
                    between African talent and global opportunities.
                  </p>
                  <p className="leading-relaxed">
                    His mission is to create the most comprehensive football analytics platform for Africa, 
                    empowering scouts, clubs, and players with data-driven insights that were previously 
                    inaccessible to the continent.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Skill text="AI & Machine Learning" />
                    <Skill text="Data Analytics" />
                    <Skill text="Full Stack Development" />
                    <Skill text="Cloud Architecture" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Team Member 1 */}
          <TeamMemberCard
            name="Chinedum Eke"
            role="Full Stack Developer"
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop&crop=faces"
            bio="Chinedum is a talented full stack developer specializing in building scalable web applications. With expertise in React, Node.js, and cloud technologies, he brings the Afric-Analyzer vision to life through elegant and performant code."
            skills={["React & TypeScript", "Node.js", "PostgreSQL", "AWS"]}
            socialLinks={{
              linkedin: "#",
              github: "#",
              twitter: "#"
            }}
          />

          {/* Team Member 2 */}
          <TeamMemberCard
            name="Alex Alison Sesay"
            role="Cybersecurity Analyst"
            // image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&crop=faces"
            image={alexPhoto}
            skills={["Penetration Testing", "Network Security", "Threat Analysis", "Compliance"]}
            socialLinks={{
              linkedin: "#",
              github: "#",
              twitter: "#"
            }}
            imageWidth={100}
            imageHeight={100}
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[#6B7280] mb-6">
            Want to join our mission to revolutionize African football analytics?
          </p>
          <a
            href="#email-capture"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D6BFF] to-[#00C2A8] hover:from-[#1E5AFF] hover:to-[#00B399] text-white rounded-lg font-semibold transition-all shadow-lg shadow-[#2D6BFF]/30"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Team Member Card Component - FIXED with separate image and text containers
interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

function TeamMemberCard({ name, role, image, bio, skills, socialLinks }: TeamMemberCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-[#111827] to-[#1a1f35] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all">
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity blur-xl from-[#2D6BFF] to-[#00C2A8]" />
      
      <div className="relative">
        {/* Image Container - Separate from text */}
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Container - Completely separate */}
        <div className="p-6 lg:p-8 space-y-4">
          {/* Name and Role */}
          <div>
            <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              {name}
            </h4>
            <p className="text-sm font-semibold text-[#6B7280] mb-4">
              {role}
            </p>
            <div className="flex items-center gap-2 mb-4">
              {socialLinks.linkedin && (
                <SocialLink href={socialLinks.linkedin} icon={<Linkedin size={18} />} label="LinkedIn" small />
              )}
              {socialLinks.github && (
                <SocialLink href={socialLinks.github} icon={<Github size={18} />} label="GitHub" small />
              )}
              {socialLinks.twitter && (
                <SocialLink href={socialLinks.twitter} icon={<Twitter size={18} />} label="Twitter" small />
              )}
            </div>
          </div>

          {/* Bio */}
          <p className="text-[#6B7280] leading-relaxed text-sm lg:text-base">
            {bio}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill, index) => (
              <Skill key={index} text={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Social Link Component
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  small?: boolean;
}

function SocialLink({ href, icon, label, small = false }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`${small ? 'w-8 h-8' : 'w-10 h-10'} flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#2D6BFF] text-[#6B7280] hover:text-[#2D6BFF] transition-all group-hover:scale-110`}
    >
      {icon}
    </a>
  );
}

// Skill Badge Component
function Skill({ text }: { text: string }) {
  return (
    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-white/80">
      {text}
    </span>
  );
}
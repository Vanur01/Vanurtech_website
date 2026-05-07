"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign, ClipboardList, Users, BarChart2, Sparkles } from "lucide-react";

const features = [
  {
    title: "GPS Attendance & Leave",
    description: "Employees mark attendance via GPS — no proxy, no fraud. Leave requests and approvals handled digitally in real time.",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: "Live Field Agent Tracking",
    description: "See every field agent's live location on a map. Monitor routes, visit history, and time spent at each location.",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    title: "Payroll Automation",
    description: "Auto-calculate salaries based on attendance, leaves, and deductions. Generate payslips and process payroll in minutes.",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    title: "Task & Visit Management",
    description: "Assign tasks to field agents, track completion status, and log customer visits with notes and photos.",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    title: "Team & Department Management",
    description: "Organize employees by teams, roles, and departments. Manage hierarchy, reporting lines, and access permissions.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Reports & Analytics",
    description: "Get detailed reports on attendance trends, field productivity, expense claims, and team performance metrics.",
    icon: <BarChart2 className="w-6 h-6" />,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-[#0A0014]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-8 mx-auto">
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-blue-300 text-xs sm:text-sm font-medium tracking-wide mb-0.5">Premium Capabilities</span>
            </div>
          </motion.div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white tracking-tight max-w-4xl mx-auto">
            Engineered for <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500">
              Workforce Excellence
            </span>
          </h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Every feature is purpose-built for businesses with field teams — from solar installers to FMCG distributors managing hundreds of agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-cyan-400/10 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative h-full p-8 rounded-4xl bg-white/2 hover:bg-white/5 border border-blue-500/10 group-hover:border-blue-500/30 backdrop-blur-xl transition-all duration-500 overflow-hidden text-left flex flex-col justify-start">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full group-hover:bg-blue-600/20 transition-all duration-500" />
                <div className="mb-5 sm:mb-8 inline-flex self-start p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:-translate-y-2 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

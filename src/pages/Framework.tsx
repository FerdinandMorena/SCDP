import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Wifi, Users } from "lucide-react";

const Framework = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: "Education",
      description:
        "Comprehensive digital literacy and skills training programs designed for rural contexts",
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      details: [
        "Digital literacy courses for all ages",
        "Technical skills training in coding, web design, and IT",
        "Certification programs aligned with industry standards",
        "Mentorship and continuous learning support",
      ],
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Fostering creative problem-solving and technological solutions within communities",
      color: "from-yellow-500 to-yellow-600",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      details: [
        "Innovation hubs in rural areas",
        "Hackathons and coding competitions",
        "Agri-tech and local business solutions",
        "Entrepreneurship incubation programs",
      ],
    },
    {
      icon: Wifi,
      title: "Access",
      description:
        "Ensuring equitable access to technology infrastructure and digital resources",
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      details: [
        "Community technology centers",
        "Device lending programs",
        "Internet connectivity initiatives",
        "Free educational resources and platforms",
      ],
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Building partnerships between communities, government, and private sector",
      color: "from-red-500 to-red-600",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      details: [
        "Public-private partnerships",
        "Community engagement programs",
        "Strategic stakeholder alliances",
        "Knowledge sharing networks",
      ],
    },
  ];

  return (
    <div>
      <section className="relative bg-gray-900 text-white min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {" "}
              <span
                style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800 }}
              >
                <span className="text-green-600">S</span>
                <span className="text-yellow-500">C</span>
                <span className="text-red-500">D</span>
                <span className="text-blue-600">P</span>
              </span>{" "}
              Strategic Framework
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Four foundational pillars driving sustainable community
              development
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Building Tomorrow's Digital Communities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our strategic framework is built on four interconnected pillars
              that work together to create lasting impact and sustainable
              development in rural communities across South Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${pillar.color}`}></div>
                <div className="p-8">
                  <div
                    className={`${pillar.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}
                  >
                    <pillar.icon className={`h-8 w-8 ${pillar.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{pillar.description}</p>
                  <div className="space-y-3">
                    {pillar.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start">
                        <div
                          className={`w-2 h-2 rounded-full ${pillar.iconColor.replace(
                            "text",
                            "bg"
                          )} mt-2 mr-3 flex-shrink-0`}
                        ></div>
                        <p className="text-gray-700">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              How Our Framework Works
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
              <div className="space-y-6 text-left">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Assessment
                    </h4>
                    <p className="text-gray-600">
                      We begin by understanding each community's unique needs,
                      challenges, and existing resources through comprehensive
                      assessments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Implementation
                    </h4>
                    <p className="text-gray-600">
                      We deploy tailored programs across all four pillars,
                      ensuring integrated support for sustainable development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Empowerment
                    </h4>
                    <p className="text-gray-600">
                      Communities take ownership of their digital transformation
                      with ongoing support and capacity building.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Sustainability
                    </h4>
                    <p className="text-gray-600">
                      We establish local leadership and systems that ensure
                      long-term success beyond our initial intervention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Framework;

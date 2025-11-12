import { motion } from "framer-motion";
import { Heart, TrendingUp, Users, Award, MapPin, Quote } from "lucide-react";

const Impact = () => {
  const statistics = [
    {
      icon: Users,
      number: "2,190+",
      label: "Lives Transformed",
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: MapPin,
      number: "50+",
      label: "Communities Reached",
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Award,
      number: "100+",
      label: "Certifications Issued",
      color: "from-yellow-500 to-yellow-600",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: TrendingUp,
      number: "95+",
      label: "Jobs Created",
      color: "from-red-500 to-red-600",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  const successStories = [
    {
      name: "Thandi Mthembu",
      location: "Eastern Cape",
      role: "Web Developer",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      story:
        "From never touching a computer to building websites for local businesses, SCDP changed my life completely. I now earn a sustainable income as a freelance web developer and mentor other women in my community.",
      achievement: "Now runs her own web development agency",
    },
    {
      name: "Sipho Ndlovu",
      location: "Limpopo",
      role: "Agri-Tech Entrepreneur",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      story:
        "The agri-tech training helped me modernize my farm. I now use smart farming apps to monitor crops and weather patterns. My yields have increased by 40% and I can now access better markets through digital platforms.",
      achievement: "Increased farm productivity by 40%",
    },
    {
      name: "Nomsa Khumalo",
      location: "KwaZulu-Natal",
      role: "Digital Entrepreneur",
      image:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400",
      story:
        "I started with basic computer training and now I run an online craft business selling traditional Zulu beadwork worldwide. The e-commerce training was invaluable. I employ five women from my village.",
      achievement: "Created jobs for 5 community members",
    },
    {
      name: "Lesedi Motaung",
      location: "Free State",
      role: "Tech Trainer",
      image:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400",
      story:
        "After completing the coding bootcamp, I realized I wanted to give back. I now work as a community tech trainer, teaching others the skills that transformed my life. Technology truly has the power to uplift communities.",
      achievement: "Trained 200+ community members",
    },
  ];

  return (
    <div>
      <section className="relative bg-gray-900 text-white min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2132')",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Measuring success through transformed lives and empowered
              communities
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Impact By The Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real change measured through tangible outcomes and community
              transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all"
              >
                <div
                  className={`${stat.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}
                >
                  <stat.icon className={`h-8 w-8 ${stat.iconColor}`} />
                </div>
                <div className="text-center">
                  <div
                    className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the inspiring individuals whose lives have been transformed
              through our programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <Quote className="h-8 w-8 text-green-600 mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {story.name}
                      </h3>
                      <p className="text-sm text-gray-600">{story.role}</p>
                      <p className="text-sm text-gray-500 flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {story.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">{story.story}</p>
                  <div className="bg-green-50 border-l-4 border-green-600 p-3 rounded">
                    <p className="text-sm font-semibold text-green-800">
                      {story.achievement}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Community Impact Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <div className="text-5xl font-bold text-blue-600 mb-3">85%</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Employment Rate
                </h3>
                <p className="text-gray-600">
                  Of graduates are employed or self-employed within 6 months
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <div className="text-5xl font-bold text-green-600 mb-3">
                  40%
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Income Increase
                </h3>
                <p className="text-gray-600">
                  Average income increase for program participants
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl">
                <div className="text-5xl font-bold text-yellow-600 mb-3">
                  90%
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Satisfaction Rate
                </h3>
                <p className="text-gray-600">
                  Participants would recommend our programs to others
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Support Our Mission
            </h2>
            <p className="text-xl mb-8">
              Your contribution helps us reach more communities and transform
              more lives. Every donation makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                Donate Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
                Become a Sponsor
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Impact;

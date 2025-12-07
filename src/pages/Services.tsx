import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Sprout, TrendingUp, Wifi, Users, Code, Laptop, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Tech Skills Training',
      description: 'Comprehensive digital literacy and technical skills development programs tailored for rural learners.',
      features: [
        'Basic computer literacy',
        'Microsoft Office Suite training',
        'Digital communication tools',
        'Online safety and security',
        'Typing and productivity skills',
      ],
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Sprout,
      title: 'Agri-Tech Solutions',
      description: 'Innovative agricultural technology solutions to enhance farming practices and increase productivity.',
      features: [
        'Smart farming techniques',
        'Crop monitoring systems',
        'Weather prediction tools',
        'Market access platforms',
        'Agricultural data analytics',
      ],
      color: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: TrendingUp,
      title: 'Entrepreneurship Development',
      description: 'Business development and entrepreneurial support programs to foster economic growth in communities.',
      features: [
        'Business planning workshops',
        'Financial literacy training',
        'Marketing and branding',
        'E-commerce setup',
        'Startup mentorship programs',
      ],
      color: 'from-yellow-500 to-yellow-600',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      icon: Wifi,
      title: 'Digital Inclusion',
      description: 'Ensuring equitable access to technology and digital resources for all community members.',
      features: [
        'Community technology centers',
        'Free internet access points',
        'Device lending programs',
        'Accessibility support',
        'Digital resource libraries',
      ],
      color: 'from-red-500 to-red-600',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
    },
    {
      icon: Code,
      title: 'Coding & Web Development',
      description: 'Professional coding bootcamps and web development courses for aspiring developers.',
      features: [
        'HTML, CSS, JavaScript',
        'React and modern frameworks',
        'Backend development',
        'Mobile app development',
        'Portfolio building',
      ],
      color: 'from-indigo-500 to-indigo-600',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      icon: Users,
      title: 'Community Tech Hubs',
      description: 'Establishing technology centers that serve as learning and innovation spaces.',
      features: [
        'Computer labs',
        'Collaborative workspaces',
        'Networking events',
        'Tech meetups',
        'Innovation workshops',
      ],
      color: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      icon: Laptop,
      title: 'Digital Literacy Programs',
      description: 'Foundational digital skills training for seniors and complete beginners.',
      features: [
        'Introduction to computers',
        'Internet basics',
        'Email and communication',
        'Social media literacy',
        'Online banking safety',
      ],
      color: 'from-teal-500 to-teal-600',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      icon: Globe,
      title: 'Digital Content Creation',
      description: 'Training in creating and managing digital content for personal and professional growth.',
      features: [
        'Graphic design basics',
        'Video editing',
        'Social media content',
        'Photography skills',
        'Online presence building',
      ],
      color: 'from-orange-500 to-orange-600',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <div>
      <section className="relative bg-gray-900 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070')" }}></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive solutions empowering communities through technology and education
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
              Empowering Through Innovation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse range of services is designed to meet the unique needs of rural communities, providing pathways to digital literacy, economic opportunity, and sustainable development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <div className={`${service.iconBg} w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who have transformed their lives through our programs. Whether you're an individual, organization, or community leader, we're here to support your digital journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 inline-flex items-center justify-center">
                Contact Us
              </Link>
              <Link to="/" className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105 inline-flex items-center justify-center">
                View Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

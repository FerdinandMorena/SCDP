import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Users, Handshake, Award, Mail, ArrowRight } from 'lucide-react';

const Stakeholders = () => {
  const partnerTypes = [
    {
      icon: Building2,
      title: 'Corporate Partners',
      description: 'Collaborate with us to fulfill your CSI objectives while making meaningful impact in rural communities.',
      benefits: [
        'Brand visibility in community programs',
        'Tax benefits through CSI initiatives',
        'Employee volunteer opportunities',
        'Measurable social impact reporting',
      ],
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Users,
      title: 'Government Agencies',
      description: 'Partner with us to extend digital transformation initiatives to underserved communities.',
      benefits: [
        'Alignment with national digital strategy',
        'Community-level implementation expertise',
        'Transparent reporting and monitoring',
        'Sustainable program models',
      ],
      color: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: Handshake,
      title: 'NGOs & Foundations',
      description: 'Join forces to amplify impact and reach more communities with digital education.',
      benefits: [
        'Shared resources and expertise',
        'Collaborative program development',
        'Network expansion opportunities',
        'Joint funding applications',
      ],
      color: 'from-yellow-500 to-yellow-600',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      icon: Award,
      title: 'Educational Institutions',
      description: 'Collaborate on research, curriculum development, and student volunteer programs.',
      benefits: [
        'Research collaboration opportunities',
        'Student internship placements',
        'Curriculum co-development',
        'Community service projects',
      ],
      color: 'from-red-500 to-red-600',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
    },
  ];

  const currentPartners = [
    'Department of Communications and Digital Technologies',
    'South African Rural Development Agency',
    'TechForGood Foundation',
    'Digital Future SA',
    'Community Empowerment Network',
    'Innovation Africa Initiative',
  ];

  return (
    <div>
      <section className="relative bg-gray-900 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070')" }}></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Stakeholders & Partners</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Together we can create lasting change and empower communities across South Africa
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
              Partnership Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in the power of collaboration. Whether you're a corporation, government agency, NGO, or educational institution, there are meaningful ways to partner with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${partner.color}`}></div>
                <div className="p-8">
                  <div className={`${partner.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <partner.icon className={`h-8 w-8 ${partner.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{partner.title}</h3>
                  <p className="text-gray-600 mb-6">{partner.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Partnership Benefits:</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="text-green-600 mr-2 font-bold">✓</span>
                          {benefit}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Current Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We're proud to collaborate with leading organizations committed to digital inclusion and community development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <Handshake className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800">{partner}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ways to Collaborate
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose the collaboration model that best fits your organization's goals and resources.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Financial Support</h3>
                <p className="text-gray-600">Sponsor programs, scholarships, or infrastructure development in specific communities.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Resource Sharing</h3>
                <p className="text-gray-600">Contribute equipment, software licenses, or training materials to support our programs.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Expertise & Mentorship</h3>
                <p className="text-gray-600">Share your team's expertise through workshops, mentorship, or volunteer programs.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl mb-8">
              Let's work together to create lasting impact in South African communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Partner With Us
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all transform hover:scale-105 inline-flex items-center justify-center">
                Download Partnership Prospectus
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Stakeholders;

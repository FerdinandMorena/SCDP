import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Rural Digital Literacy Initiative',
      location: 'Eastern Cape Province',
      date: '2023 - Ongoing',
      status: 'Active',
      participants: '450+ learners',
      description: 'A comprehensive digital literacy program bringing basic computer skills and internet training to five rural communities in the Eastern Cape.',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260',
      outcomes: [
        '450 adults trained in basic computer skills',
        '3 community technology centers established',
        '85% of participants now use digital banking',
      ],
    },
    {
      title: 'Youth Coding Bootcamp',
      location: 'Limpopo Province',
      date: '2023',
      status: 'Completed',
      participants: '120 youth',
      description: 'An intensive 12-week coding bootcamp teaching web development skills to rural youth aged 18-25.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260',
      outcomes: [
        '120 youth trained in web development',
        '45 participants now employed in tech',
        '30 freelance developers created',
      ],
    },
    {
      title: 'Agri-Tech Smart Farming',
      location: 'KwaZulu-Natal',
      date: '2022 - 2023',
      status: 'Completed',
      participants: '200 farmers',
      description: 'Introducing smart farming technologies and mobile apps to help smallholder farmers improve crop yields and access markets.',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260',
      outcomes: [
        '200 farmers adopted smart farming tech',
        '40% increase in crop yields',
        'Market access improved for 85% of participants',
      ],
    },
    {
      title: 'Women in Tech Program',
      location: 'North West Province',
      date: '2023 - Ongoing',
      status: 'Active',
      participants: '180 women',
      description: 'Empowering rural women with digital skills, entrepreneurship training, and access to technology resources.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260',
      outcomes: [
        '180 women trained',
        '25 tech startups launched',
        '50+ women now working remotely',
      ],
    },
    {
      title: 'Community Tech Hub Network',
      location: 'Mpumalanga Province',
      date: '2022 - Ongoing',
      status: 'Active',
      participants: '8 communities',
      description: 'Building a network of community-run technology centers providing free internet access, training, and support.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260',
      outcomes: [
        '8 tech hubs established',
        '1,200+ community members served monthly',
        '150 workshops conducted',
      ],
    },
    {
      title: 'Digital Entrepreneurship Academy',
      location: 'Free State Province',
      date: '2023',
      status: 'Completed',
      participants: '90 entrepreneurs',
      description: 'Training rural entrepreneurs in e-commerce, digital marketing, and online business management.',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260',
      outcomes: [
        '90 entrepreneurs trained',
        '40 online businesses launched',
        '60% revenue increase for participants',
      ],
    },
  ];

  return (
    <div>
      <section className="relative bg-gray-900 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073')" }}></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Transforming communities through impactful digital initiatives across South Africa
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
              Making a Difference Across South Africa
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our projects span across provinces, reaching rural communities with tailored programs that address local needs while building national digital capacity.
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1 h-64 lg:h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          project.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-green-600" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-blue-600" />
                        {project.date}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-yellow-600" />
                        {project.participants}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        Key Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start">
                            <span className="text-green-600 mr-2 font-bold">✓</span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Collective Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">2,190+</div>
                <div className="text-gray-600">Total Participants</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-gray-600">Provinces Reached</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-yellow-600 mb-2">11</div>
                <div className="text-gray-600">Tech Hubs Created</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">95+</div>
                <div className="text-gray-600">New Jobs Created</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

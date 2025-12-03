import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <div>
      <section className="relative bg-gray-900 text-white min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')",
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
              About{" "}
              <span
                style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800 }}
              >
                <span className="text-green-600">S</span>
                <span className="text-yellow-500">C</span>
                <span className="text-red-500">D</span>
                <span className="text-blue-600">P</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Bridging the digital divide and transforming rural communities
              across South Africa
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                The Smart Community Development Platform was born from a vision
                to democratize access to technology and digital education in
                South Africa's rural communities. We recognized that while urban
                areas rapidly embraced digital transformation, rural communities
                were being left behind.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Since our inception, we've been committed to creating
                sustainable pathways for rural youth and adults to acquire
                digital skills, fostering innovation, and building partnerships
                that create lasting change.
              </p>
              <p className="text-lg text-gray-600">
                Through our comprehensive approach combining education,
                technology access, and community engagement, we're not just
                teaching skills—we're building futures and transforming entire
                communities.
              </p>
              <img src="/NewLogo.jpg" alt="" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white p-3 rounded-lg">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Excellence
                    </h3>
                    <p className="text-gray-600">
                      Committed to delivering world-class digital education and
                      training programs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Community First
                    </h3>
                    <p className="text-gray-600">
                      Every decision we make prioritizes the needs and growth of
                      our communities
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                To empower rural South African communities through accessible,
                high-quality digital education and innovative technology
                solutions that create sustainable economic opportunities and
                bridge the digital divide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600">
                A South Africa where every rural community has equal access to
                digital opportunities, enabling them to participate fully in the
                digital economy and drive innovation from their local contexts.
              </p>
            </motion.div>
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
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Empowerment",
                  description:
                    "We believe in enabling communities to take control of their digital futures",
                  color: "border-green-600",
                },
                {
                  title: "Innovation",
                  description:
                    "We embrace creative solutions to address unique community challenges",
                  color: "border-yellow-600",
                },
                {
                  title: "Inclusivity",
                  description:
                    "We ensure everyone has access to opportunities regardless of background",
                  color: "border-blue-600",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`border-t-4 ${value.color} p-6 bg-gray-50 rounded-lg`}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

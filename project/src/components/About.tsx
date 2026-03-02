const About = () => {
  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Alphamatica
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="reveal">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
              <span className="text-2xl font-bold text-white">ALPHAMATICA 2K26</span> is an interdepartmental technical and literary fest that celebrates the perfect fusion of analytical thinking and communication excellence.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
              Divided into two dynamic domains—<span className="text-blue-400 font-semibold">MATHEMATICA</span> and <span className="text-purple-400 font-semibold">ALPHABETICA</span>—this fest brings together the brightest minds to compete, collaborate, and showcase their skills in logic, problem-solving, debate, and creative expression.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Join us for an unforgettable experience of innovation, leadership, and excellence where students push boundaries, challenge conventions, and emerge as tomorrow's leaders.
            </p>
          </div>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { title: 'Innovation', icon: '💡' },
            { title: 'Excellence', icon: '🏆' },
            { title: 'Leadership', icon: '👑' },
            { title: 'Competition', icon: '🎯' }
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

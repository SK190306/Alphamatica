import { ExternalLink, QrCode } from 'lucide-react';

const Registration = () => {
  return (
    <section id="registration" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Registration
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="reveal">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Join the Ultimate Fest Experience
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Register now to participate in ALPHAMATICA 2K26 and showcase your talents in logic, mathematics, communication, and creativity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="[Google Form Link]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
              >
                Register via Google Form
                <ExternalLink size={20} className="ml-2" />
              </a>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center justify-center mb-4">
                <QrCode className="text-blue-400 mr-2" size={24} />
                <h4 className="text-xl font-semibold text-white">Quick Registration</h4>
              </div>
              <div className="bg-white/10 rounded-lg p-8 inline-block">
                <div className="w-48 h-48 bg-white/20 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400 text-sm">[QR Code Placeholder]</p>
                </div>
              </div>
              <p className="text-gray-400 mt-4">Scan to register instantly</p>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>For queries, contact: [contact@alphamatica.edu]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;

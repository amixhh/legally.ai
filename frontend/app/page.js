import Image from "next/image";
import AuthStatus from "./components/AuthStatus";
import ScrollButton from "./components/ScrollButton";

export default function Home() {
  return ( 
    <div className="min-h-screen bg-gradient-to-br from-[#accbee] to-[#e7f0fd] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Elegant floating elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#accbee]/30 to-[#e7f0fd]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#e7f0fd]/30 to-[#accbee]/20 rounded-full blur-3xl animate-float-medium"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#accbee_1px,transparent_1px),linear-gradient(to_bottom,#accbee_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.15]"></div>
      </div>

      {/* Navigation */}
      <div className="w-full fixed top-0 left-0 right-0 px-4 py-6 z-50">
        <nav className="max-w-7xl mx-auto bg-white/40 backdrop-blur-xl rounded-2xl shadow-lg shadow-gray-200/30 border border-white/50">
          <div className="px-8 py-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-2xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text hover:scale-105 transition-all duration-300">Legally AI</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full">Home</a>
                <a href="#features" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full">Features</a>
                <a href="#privacy" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full">Privacy</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
                <a href="#login" className="ml-8 px-6 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20 hover:scale-105">Login</a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tight relative group animate-pop-in">
            <span className="block relative z-10 transition-colors duration-300 group-hover:text-gray-800">Made For</span>
            <span className="block mt-2 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 text-transparent bg-clip-text relative z-10 transition-colors duration-300">Billions!</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed relative z-10 transition-colors duration-300 hover:text-gray-800">
            Revolutionizing Legal Access with AI-Powered Precision and Instant Expertise
          </p>
          <div className="mt-10">
            <a href="/login" className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/20 hover:scale-105 border border-transparent relative z-20">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 text-transparent bg-clip-text mb-6 animate-pop-in">
              Powerful Features for Seamless Legal Assistance
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-pop-in-delayed-1">
              Unlock Smarter Legal Solutions with LegallyAI
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 animate-pop-in-delayed-2">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 2H5C3.89 2 3 2.89 3 4V20C3 21.11 3.89 22 5 22H19C20.11 22 21 21.11 21 20V4C21 2.89 20.11 2 19 2M19 20H5V4H19V20M17 6H7V8H17V6M17 10H7V12H17V10M13 14H7V16H13V14Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Legal Doc Summarization</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Streamlining the review of complex legal texts by extracting key insights quickly and efficiently.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 animate-pop-in-delayed-2">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Legal Advice & Case Analysis</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Utilize case data of over 15,000 Supreme Court Case Documents to predict outcomes and generate structured legal explanations.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 animate-pop-in-delayed-2">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21,8H3V6H21M9,13H21V11H9M9,18H21V16H9M4,13H7V18H4V13Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Intelligent Legal Query System</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Delivering precise answers to legal questions by referencing the Indian Constitution, IPC, CrPC, and other statutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 animate-pop-in">
              Why Choose <span className="bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">Legally AI</span>?
            </h2>
          </div>
          
          <div className="space-y-8">
            {/* Reason Cards */}
            <div className="group bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-white hover:shadow-2xl hover:shadow-[#accbee]/20 transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-[#accbee]/10 animate-pop-in-delayed-1">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#accbee] to-[#e7f0fd] rounded-2xl flex items-center justify-center flex-shrink-0 relative group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8 text-gray-900 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#accbee]/20 to-[#e7f0fd]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2b4c7d] transition-colors duration-300">Expert-Trained on 15,000+ Supreme Court Cases</h3>
                  <p className="mt-3 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Built for precision, our AI delivers constitutionally sound insights.</p>
                </div>
              </div>
            </div>

            <div className="group bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-white hover:shadow-2xl hover:shadow-[#accbee]/20 transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-[#accbee]/10 animate-pop-in-delayed-1">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#accbee] to-[#e7f0fd] rounded-2xl flex items-center justify-center flex-shrink-0 relative group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8 text-gray-900 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#accbee]/20 to-[#e7f0fd]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2b4c7d] transition-colors duration-300">Trusted & Transparent</h3>
                  <p className="mt-3 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">We rely on verified Supreme Court judgments, ensuring accuracy and credibility.</p>
                </div>
              </div>
            </div>

            <div className="group bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-white hover:shadow-2xl hover:shadow-[#accbee]/20 transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-[#accbee]/10 animate-pop-in-delayed-1">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#accbee] to-[#e7f0fd] rounded-2xl flex items-center justify-center flex-shrink-0 relative group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8 text-gray-900 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#accbee]/20 to-[#e7f0fd]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2b4c7d] transition-colors duration-300">Contextual Legal Reasoning</h3>
                  <p className="mt-3 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Designed for Indian constitutional law, our AI provides in-depth, precedent-based responses, not just surface-level summaries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-8">
              <a href="mailto:contact@legally.ai" className="text-gray-600 hover:text-gray-900 transition-all duration-300">
                <span className="font-medium">LegallyAI@gmail.com</span>
              </a>
              <div className="flex items-center space-x-6">
                <a href="https://twitter.com/legallyai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-300">
                  Twitter
                </a>
                <a href="https://linkedin.com/company/legallyai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-300">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-500">© 2025 Legally AI</span>
              <a href="/privacy" className="text-gray-600 hover:text-gray-900 transition-all duration-300">
                Privacy
              </a>
              <a href="/terms" className="text-gray-600 hover:text-gray-900 transition-all duration-300">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

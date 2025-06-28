import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "MentorMatch | 1:1 Growth Sessions with Top Industry Experts" },
    { name: "description", content: "Skip years of trial & error. Get personalized guidance from vetted mentors in tech, business, and design. Book your first session today!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Animated Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <SparklesIcon className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-gray-800">MentorMatch</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="font-medium text-gray-600 hover:text-blue-600 transition">Features</a>
            <a href="#testimonials" className="font-medium text-gray-600 hover:text-blue-600 transition">Success Stories</a>
            <a href="#pricing" className="font-medium text-gray-600 hover:text-blue-600 transition">Pricing</a>
          </div>
          <div className="flex space-x-4">
            <Link to="/login" className="hidden md:block px-4 py-2 font-medium text-gray-600 hover:text-blue-600 transition">Log in</Link>
            <Link to="/register" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animation */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block px-4 py-2 mb-6 bg-blue-100 rounded-full">
              <span className="text-blue-600 font-semibold">🚀 Join 10,000+ professionals</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Skip the Learning Curve</span><br />
              With Expert 1:1 Mentorship
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
              Get personalized guidance from top professionals in tech, business, and design. 
              <span className="font-semibold text-blue-600"> Average career boost: 2.5 years faster growth.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Find Your Mentor →
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full transition-all">
                Become a Mentor
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-gray-600">500+ mentors online now</span>
              </div>
              <div className="flex items-center">
                <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-gray-600">4.9/5 (2,300+ reviews)</span>
              </div>
            </div>
          </div>
          
          {/* Floating mentor cards */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-2xl bg-white shadow-xl p-4 rotate-12 hidden lg:block">
            <div className="bg-blue-100 rounded-lg h-full flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-3"></div>
                <h4 className="font-bold text-gray-800">Mark S.</h4>
                <p className="text-sm text-gray-600">Senior PM @ Google</p>
                <div className="mt-2 flex justify-center space-x-1">
                  {[1,2,3,4,5].map((i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 -left-20 w-56 h-56 rounded-2xl bg-white shadow-xl p-4 -rotate-6 hidden lg:block">
            <div className="bg-indigo-100 rounded-lg h-full flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-14 h-14 bg-indigo-600 rounded-full mx-auto mb-3"></div>
                <h4 className="font-bold text-gray-800">Sarah L.</h4>
                <p className="text-sm text-gray-600">UX Lead @ Airbnb</p>
                <div className="mt-2 flex justify-center space-x-1">
                  {[1,2,3,4,5].map((i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-8">Trusted by professionals at</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-70">
            {['Google', 'Microsoft', 'Airbnb', 'Netflix', 'Spotify'].map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-700">{company}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How MentorMatch Works</h2>
            <p className="text-xl text-gray-600">Your fast track to career success in 3 simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ProfileIcon />}
              title="1. Create Your Profile"
              description="Tell us your goals and we'll match you with ideal mentors"
              highlightColor="from-blue-500 to-blue-400"
            />
            <FeatureCard 
              icon={<MatchIcon />}
              title="2. Find Your Match"
              description="Browse vetted experts or get personalized recommendations"
              highlightColor="from-purple-500 to-purple-400"
            />
            <FeatureCard 
              icon={<GrowIcon />}
              title="3. Grow Faster"
              description="1:1 sessions, actionable feedback, and measurable progress"
              highlightColor="from-indigo-500 to-indigo-400"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Success Stories</h2>
            <p className="text-xl text-gray-600">Don't take our word for it - hear from our community</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="My mentor helped me negotiate a $30k salary increase and land a senior role at FAANG within 6 months. Best investment ever!" 
              author="Jessica T."
              role="Senior Software Engineer"
              avatarColor="bg-pink-500"
              rating={5}
            />
            <TestimonialCard 
              quote="As a mentor, I get to give back while staying sharp. The structured sessions make it rewarding for both parties." 
              author="David K."
              role="Product Director"
              avatarColor="bg-blue-500"
              rating={5}
            />
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3">Ready for your breakthrough?</h3>
                  <p className="text-blue-100">Join thousands who've accelerated their careers with personalized mentorship.</p>
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <SparklesIcon className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold">MentorMatch</span>
              </div>
              <p className="text-gray-400">Accelerating careers through expert mentorship since 2023.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <TwitterIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <LinkedInIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <InstagramIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2023 MentorMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component: Feature Card
function FeatureCard({ icon, title, description, highlightColor }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  highlightColor: string
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
      <div className={`w-14 h-14 bg-gradient-to-r ${highlightColor} rounded-xl flex items-center justify-center mb-6 text-white group-hover:rotate-6 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Component: Testimonial Card
function TestimonialCard({ quote, author, role, avatarColor, rating }: { 
  quote: string, 
  author: string,
  role: string,
  avatarColor: string,
  rating: number
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex mb-6">
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-lg text-gray-700 mb-6">"{quote}"</blockquote>
      <div className="flex items-center">
        <div className={`w-12 h-12 ${avatarColor} rounded-full mr-4`}></div>
        <div>
          <h4 className="font-bold text-gray-900">{author}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}

// Icons
function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ProfileIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function MatchIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function GrowIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
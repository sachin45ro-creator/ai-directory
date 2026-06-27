import React from 'react';

const aiTools = [
  { name: 'Gemini', developer: 'Google', description: 'Exceptional for coding assistance, logic, and processing massive amounts of text or file context at once.', link: 'https://gemini.google.com' },
  { name: 'DeepSeek R1', developer: 'DeepSeek', description: 'An incredibly powerful open-weights reasoning model specializing in complex math, logic, and deep code debugging.', link: 'https://deepseek.com' },
  { name: 'ChatGPT / GPT-4o', developer: 'OpenAI', description: 'An excellent all-rounder model great for general conversation, creative writing, brainstorms, and fast answers.', link: 'https://chatgpt.com' },
  { name: 'Claude Sonnet', developer: 'Anthropic', description: 'Highly accurate model renowned for its natural conversational tone, writing clarity, and beautiful frontend UI generation.', link: 'https://claude.ai' },
  { name: 'Midjourney', developer: 'Midjourney Inc.', description: 'The current gold standard for creating stunning, highly detailed cinematic digital art and realistic images via text prompts.', link: 'https://midjourney.com' },
  { name: 'v0 by Vercel', developer: 'Vercel', description: 'An AI-powered user interface companion. Type what layout you want, and it instantly builds modern React/Tailwind frontend components.', link: 'https://v0.dev' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-indigo-600">PureAI Directory</h1>
          <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-500 font-medium">100% Free & Ad-Free</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl text-gray-900">
            Find the perfect AI tool instantly.
          </h2>
          <p className="text-lg text-gray-600">
            A clean, clutter-free index of top-tier AI models and systems to help you build, create, or learn.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiTools.map((tool) => (
            <div key={tool.name} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{tool.name}</h3>
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    {tool.developer}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {tool.description}
                </p>
              </div>
              <a 
                href={tool.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full text-center block bg-gray-900 text-white font-medium text-sm py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-8 mt-20 border-t border-gray-200 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} PureAI Directory. Built for simplicity.
      </footer>
    </div>
  );
}
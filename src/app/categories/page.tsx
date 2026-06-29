 'use client';
import React from 'react';

const marketCategories = [
  { id: 'multimodal', name: 'Multimodal / Chat Ecosystems', count: '3 Tools', description: 'General-purpose reasoning engines, long-context writing tools, and interactive chatbots.', color: 'from-amber-500 to-orange-600' },
  { id: 'design', name: 'Design & Visual Media', count: '2 Tools', description: 'Text-to-image workflows, creative graphic generators, and marketing asset designs.', color: 'from-pink-500 to-rose-600' },
  { id: 'video', name: 'Video Production Engines', count: '2 Tools', description: 'Cinematic scene creators, narrative timeline editors, and automated AI avatar generation.', color: 'from-purple-500 to-indigo-600' },
  { id: 'development', name: 'Tech & Code Generation', count: '2 Tools', description: 'AI-native programming environments, autocomplete assistants, and dynamic component rendering.', color: 'from-blue-500 to-cyan-600' },
  { id: 'research', name: 'Research & Workflow Automation', count: '2 Tools', description: 'Fact-checked search algorithms, cross-app workflows, and dynamic information aggregators.', color: 'from-emerald-500 to-teal-600' },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">AI Market Categories</h1>
            <p className="text-gray-500 text-sm">Select a category to view active models, versions, ratings, and subscription costs.</p>
          </div>
          <a href="/" className="text-sm font-medium text-blue-600 hover:underline">&larr; Back to Home</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {marketCategories.map((cat) => (
            <a 
              key={cat.id} 
              href={`/categories/${cat.id}`}
              className="group block bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r ${cat.color} text-white`}>
                  {cat.count}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{cat.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{cat.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
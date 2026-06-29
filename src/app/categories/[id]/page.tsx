 'use client';
import React from 'react';
import { useParams } from 'next/navigation';

const toolsDatabase: Record<string, any[]> = {
  multimodal: [
    { name: 'ChatGPT', developer: 'OpenAI', version: 'GPT-4o', date: 'May 2024', rating: '4.9/5', pricing: 'Free Tier / $20/mo Plus', usage: 'All-purpose logic, multimodal data processing, and asset generation.' },
    { name: 'Claude', developer: 'Anthropic', version: 'Claude 3.5 Sonnet', date: 'June 2024', rating: '4.8/5', pricing: 'Free Tier / $20/mo Pro', usage: 'Long-context text synthesis, advanced code reasoning, and multi-file mapping.' },
    { name: 'Google Gemini', developer: 'Google', version: 'Gemini 1.5 Pro', date: 'May 2024', rating: '4.6/5', pricing: 'Free Tier / $20/mo Advanced', usage: 'Workspace account native handling, audio/video sequence insight summaries.' }
  ],
  design: [
    { name: 'Midjourney', developer: 'Midjourney Inc.', version: 'v6 Alpha', date: 'Dec 2023', rating: '4.8/5', pricing: 'Paid Only (Starts $10/mo)', usage: 'High-contrast stylized creative artwork generation.' },
    { name: 'DALL·E 3', developer: 'OpenAI', version: 'v3.0', date: 'Oct 2023', rating: '4.5/5', pricing: 'Free on Microsoft Copilot / Paid in ChatGPT Plus', usage: 'Clean, accurate text-to-image prompt interpretation.' }
  ],
  video: [
    { name: 'Sora 2', developer: 'OpenAI', version: 'v2.0', date: 'Feb 2025', rating: '4.7/5', pricing: 'Paid Only ($8/mo Base)', usage: 'Cinematic, hyper-realistic physics narrative short video clips.' },
    { name: 'Veo', developer: 'Google', version: 'v1.0', date: 'May 2024', rating: '4.6/5', pricing: 'Free Trial / $19.99/mo Base', usage: 'Smooth lighting tracking and distortion-free tracking camera pans.' }
  ],
  development: [
    { name: 'Cursor', developer: 'Anysphere', version: 'v0.45', date: 'Jan 2025', rating: '4.9/5', pricing: 'Free Tier / $20/mo Pro', usage: 'Complete project-wide context AI codebase workspace indexing.' },
    { name: 'v0 by Vercel', developer: 'Vercel', version: 'Production v2', date: 'Aug 2024', rating: '4.8/5', pricing: 'Free Credits / $20/mo Pro', usage: 'Instant copy-paste React standard and Tailwind component code output.' }
  ],
  research: [
    { name: 'Perplexity', developer: 'Perplexity AI', version: 'Pro Research', date: '2024', rating: '4.8/5', pricing: 'Free Tier / $20/mo Premium', usage: 'Inline structural verification index with accurate real-time source web tracking.' },
    { name: 'NotebookLM', developer: 'Google', version: 'Production', date: 'Sept 2024', rating: '4.7/5', pricing: '100% Free', usage: 'Turns deep collections of manuals or documents into personalized audio podcast summaries.' }
  ]
};

export default function CategoryDetailPage() {
  const params = useParams();
  const categoryId = params?.id as string;
  const tools = toolsDatabase[categoryId] || [];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold capitalize text-gray-900">{categoryId} Tool Registry</h1>
          <a href="/categories" className="text-sm text-blue-600 hover:underline">&larr; Back to Categories</a>
        </div>

        {tools.length === 0 ? (
          <p className="text-gray-500">No registered engines found in this section category setup yet.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {tools.map((tool, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{tool.name}</h2>
                    <p className="text-xs text-gray-400">Developer: {tool.developer} &bull; Model Build: {tool.version}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-700">Released: {tool.date}</span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-yellow-50 text-yellow-700 border border-yellow-200">Rating: {tool.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed"><strong className="text-gray-900">Primary Core Use:</strong> {tool.usage}</p>
                <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Pricing Architecture</span>
                  <span className="text-sm font-bold text-indigo-600">{tool.pricing}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
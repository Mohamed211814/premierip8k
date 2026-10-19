import React from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Blog',
  description: '',
  canonical: '/blog',
});

export default function BlogPage() {
  return (
    <div className="min-h-[50vh] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Empty blog infrastructure */}
      </div>
    </div>
  );
}

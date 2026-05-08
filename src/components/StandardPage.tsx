import React from 'react';
import { PageContainer } from './PageContainer';

interface StandardPageProps {
  pageNumber: number;
  title: string;
  children: React.ReactNode;
}

export function StandardPage({ pageNumber, title, children }: StandardPageProps) {
  return (
    <PageContainer pageNumber={pageNumber}>
      <div className="flex flex-col h-full px-[20mm] py-[30mm]">
        <h2 className="text-4xl text-regal-gold border-b-2 border-slate-100 pb-4 mb-8 font-serif">
          {title}
        </h2>
        <div className="flex-grow flex flex-col gap-6 text-sm text-justify leading-relaxed">
          {children}
        </div>
      </div>
    </PageContainer>
  );
}

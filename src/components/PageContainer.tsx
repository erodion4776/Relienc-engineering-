import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  pageNumber?: number;
  hideFooter?: boolean;
  className?: string;
  bgWhite?: boolean;
}

export function PageContainer({ children, pageNumber, hideFooter = false, className = "", bgWhite = true }: PageContainerProps) {
  return (
    <div className={`print-page ${bgWhite ? 'bg-white' : ''} w-[210mm] h-[297mm] mx-auto my-8 shadow-page relative flex flex-col ${className}`}>
      {children}
      {!hideFooter && pageNumber !== undefined && (
        <div className="absolute bottom-[20mm] left-[20mm] right-[20mm] border-t border-slate-200 pt-2 flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest font-sans">
          <span>Reliable Systems Nig. Ltd.</span>
          <span>Page {String(pageNumber).padStart(2, '0')}</span>
        </div>
      )}
      {!hideFooter && pageNumber !== undefined && (
        <div className="absolute top-[20mm] right-[20mm] text-[100px] leading-none font-bold text-slate-50 font-sans -z-10 select-none">
          {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
        </div>
      )}
    </div>
  );
}

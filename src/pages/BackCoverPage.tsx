import { PageContainer } from "../components/PageContainer";
import { companyDetails } from "../data/company";

export default function BackCoverPage() {
  return (
    <PageContainer hideFooter bgWhite={false} className="bg-slate-50 text-corporate-navy justify-center items-center text-center">
      <h1 className="text-5xl font-serif tracking-wide mb-6">
        {companyDetails.name}
      </h1>
      <div className="w-[80px] h-1 bg-corporate-navy mx-auto mb-6"></div>
      <p className="text-regal-gold text-xl tracking-[0.2em] font-sans font-bold">
        TRUSTED • EFFICIENT • SECURE
      </p>
      
      <div className="absolute bottom-[40mm] w-full text-center text-xs text-slate-400 uppercase tracking-widest font-sans">
        <p>© {companyDetails.name} All Rights Reserved.</p>
        <p className="mt-2">RC {companyDetails.rcNumber}</p>
      </div>
    </PageContainer>
  );
}

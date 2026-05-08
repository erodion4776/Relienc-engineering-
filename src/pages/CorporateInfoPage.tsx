import { PageContainer } from "../components/PageContainer";
import { companyDetails } from "../data/company";

export default function CorporateInfoPage() {
  return (
    <PageContainer pageNumber={2}>
      <div className="flex flex-col h-full px-[20mm] py-[30mm]">
        <div className="font-bold text-corporate-navy text-2xl border-l-[6px] border-regal-gold pl-4 mb-12 font-sans tracking-wide">
          {companyDetails.name}
        </div>
        <h2 className="text-4xl text-regal-gold border-b-2 border-slate-100 pb-4 mb-12 font-serif">
          Corporate Information
        </h2>
        
        <table className="w-full border-collapse mt-8 font-sans text-sm">
          <tbody>
            <tr className="border-b border-slate-200">
              <td className="py-6 font-bold text-corporate-navy font-sans uppercase tracking-wider text-xs w-1/3">Registered Name</td>
              <td className="py-6">{companyDetails.name}</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-6 font-bold text-corporate-navy font-sans uppercase tracking-wider text-xs">RC Number</td>
              <td className="py-6">{companyDetails.rcNumber}</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-6 font-bold text-corporate-navy font-sans uppercase tracking-wider text-xs">Date of Registration</td>
              <td className="py-6">{companyDetails.incorporationDate}</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-6 font-bold text-corporate-navy font-sans uppercase tracking-wider text-xs">Registered Address</td>
              <td className="py-6">{companyDetails.addressParams.registered}</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-6 font-bold text-corporate-navy font-sans uppercase tracking-wider text-xs">Operations Address</td>
              <td className="py-6">{companyDetails.addressParams.operations}</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-6 font-bold text-corporate-navy font-sans uppercase tracking-wider text-xs">Email</td>
              <td className="py-6">{companyDetails.email}</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-6 font-bold text-corporate-navy font-sans uppercase tracking-wider text-xs">Status</td>
              <td className="py-6 font-bold text-green-700">{companyDetails.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
}

import { StandardPage } from "../components/StandardPage";

export default function OrganizationalStructurePage() {
  return (
    <StandardPage pageNumber={9} title="Organizational Structure">
      <p>
        Reliable Systems Nig. Ltd. employs a flat, highly responsive organizational matrix. This deliberate architectural choice eradicates bureaucratic inertia, empowering division leads to make rapid, secure decisions that directly accelerate project timelines.
      </p>

      <div className="mt-8 relative">
        {/* Abstract hierarchical visualization */}
        <div className="border border-slate-200 rounded-xl bg-white p-6 mb-6 text-center">
          <h4 className="font-bold text-corporate-navy text-lg">Board of Directors & Executive Management</h4>
          <p className="text-xs text-slate-500 mt-1">Strategic Oversight & Financial Approvals</p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-1 h-8 bg-slate-300"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="border-t-[4px] border-regal-gold bg-white p-5 shadow-sm rounded-b-lg">
            <h4 className="font-bold text-corporate-navy mb-2">Procurement & Sourcing</h4>
            <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1">
              <li>OEM Negotiation & Vetting</li>
              <li>Tender Management</li>
              <li>Price Optimization Analysis</li>
            </ul>
          </div>
          
          <div className="border-t-[4px] border-corporate-navy bg-white p-5 shadow-sm rounded-b-lg">
            <h4 className="font-bold text-corporate-navy mb-2">Contracts & Execution</h4>
            <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1">
              <li>Project Management (PMP)</li>
              <li>Site Engineering Oversight</li>
              <li>Technical Implementation</li>
            </ul>
          </div>

          <div className="border-t-[4px] border-corporate-navy bg-white p-5 shadow-sm rounded-b-lg">
            <h4 className="font-bold text-corporate-navy mb-2">Logistics & Supply Chain</h4>
            <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1">
              <li>Freight & Customs Clearing</li>
              <li>Interstate Transport Logistics</li>
              <li>Warehouse Operations</li>
            </ul>
          </div>

          <div className="border-t-[4px] border-regal-gold bg-white p-5 shadow-sm rounded-b-lg">
            <h4 className="font-bold text-corporate-navy mb-2">QA & Compliance</h4>
            <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1">
              <li>Product Verification</li>
              <li>HSE Enforcement</li>
              <li>Regulatory Auditing</li>
            </ul>
          </div>
        </div>
      </div>
    </StandardPage>
  );
}

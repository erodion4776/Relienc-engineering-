import { StandardPage } from "../components/StandardPage";

export default function FinancialCapacityPage() {
  return (
    <StandardPage pageNumber={20} title="Financial Capacity & Solvency">
      <p>
        A procurement or contracting firm is only as reliable as its balance sheet. Reliable Systems Nig. Ltd. differentiates itself drastically from middle-tier "envelope-passing" contractors through our deep, audited financial bedrock. We possess the monetary agility to execute aggressively.
      </p>

      <div className="mt-8 space-y-6">
        <div className="bg-white border-l-[6px] border-regal-gold p-6 shadow-sm">
          <h4 className="font-bold text-corporate-navy text-lg mb-2">Independent Funding Capabilities</h4>
          <p className="text-sm text-slate-700">
            For major confirmed orders from blue-chip corporations and trusted government tiers, we retain the liquid capital to self-fund the initial procurement phases without demanding crippling upstream mobilization percentages from the client. This dramatically accelerates the kick-off process.
          </p>
        </div>

        <div className="bg-white border-l-[6px] border-corporate-navy p-6 shadow-sm">
          <h4 className="font-bold text-corporate-navy text-lg mb-2">Prime Banking Relationships</h4>
          <p className="text-sm text-slate-700">
            We maintain extremely strong, active credit facilities with tier-one Nigerian banks. Our pristine credit rating allows us rapid access to Advance Payment Guarantees (APG), Bid Securities, and robust Letters of Credit (LCs) for heavy international importations, avoiding bureaucratic friction.
          </p>
        </div>

        <div className="bg-white border-l-[6px] border-slate-400 p-6 shadow-sm">
          <h4 className="font-bold text-corporate-navy text-lg mb-2">Transparent Taxation</h4>
          <p className="text-sm text-slate-700">
            Our financial architecture is flawlessly clean. We possess up-to-date Tax Clearance Certificates (TCC) and seamlessly adhere to all VAT and Withholding Tax regulatory remittance requirements. Clients never face auxiliary legal risk due to our internal financial structures.
          </p>
        </div>
      </div>
    </StandardPage>
  );
}

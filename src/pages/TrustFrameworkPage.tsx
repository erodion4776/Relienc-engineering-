import { StandardPage } from "../components/StandardPage";

export default function TrustFrameworkPage() {
  return (
    <StandardPage pageNumber={8} title="The Trust Framework">
      <p>
        In a marketplace often characterized by uncertainty and fluctuating standards, Reliable Systems Nig. Ltd. rigidly adheres to a proprietary "Trust Framework"—a systematic architecture designed to completely de-risk the procurement and contracting process for our clients.
      </p>
      
      <div className="bg-slate-50 border border-slate-200 mt-6 rounded-lg p-8 space-y-6">
        <div>
          <h4 className="font-bold text-corporate-navy text-lg flex items-center mb-2">
            <span className="bg-regal-gold text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-xs">1</span>
            Verified Legal & Financial Status
          </h4>
          <p className="text-slate-600 pl-9">
            We are a fully registered entity (RC 7045741) completely audited and compliant with Nigerian tax matrices. We possess the deep liquid capital to initiate and handle large-scale procurements without perpetually requiring crippling upfront mobilization fees.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-corporate-navy text-lg flex items-center mb-2">
            <span className="bg-regal-gold text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-xs">2</span>
            Direct Manufacturer Relationships (DMR)
          </h4>
          <p className="text-slate-600 pl-9">
            We bypass mid-level brokers whenever feasible. Our procurement team initiates direct dialogue with national and international OEMs (Original Equipment Manufacturers), securing authentic warranties and cutting bottom-line costs for our end clients.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-corporate-navy text-lg flex items-center mb-2">
            <span className="bg-regal-gold text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-xs">3</span>
            Agile Logistics Architecture
          </h4>
          <p className="text-slate-600 pl-9">
            Our established networks linking the coastal hub of Lagos to our registered base in Benin ensure that port clearance, warehousing, and interstate freight movement occur with absolutely minimal friction and zero artificial downtime.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-corporate-navy text-lg flex items-center mb-2">
            <span className="bg-regal-gold text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 text-xs">4</span>
            Transparent Reporting Milestones
          </h4>
          <p className="text-slate-600 pl-9">
            Trust requires visibility. Clients receive scheduled, real-time photographic and documentary updates throughout the lifecycle of their contract, from factory floor boarding to final site delivery and installation.
          </p>
        </div>
      </div>
    </StandardPage>
  );
}

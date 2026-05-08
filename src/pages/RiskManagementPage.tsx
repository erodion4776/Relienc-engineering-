import { StandardPage } from "../components/StandardPage";

export default function RiskManagementPage() {
  return (
    <StandardPage pageNumber={17} title="Risk Management">
      <p>
        A core reason major corporations and government entities partner with Reliable Systems Nig. Ltd. is our exceptional capacity to absorb, mitigate, and neutralize risks inherent in complex supply chains and large-scale contracting.
      </p>

      <h3 className="font-serif text-2xl text-corporate-navy mt-10 mb-6">Our Mitigation Strategies</h3>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h4 className="font-bold text-corporate-navy mb-2">Financial Risk</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Fluctuating exchange rates (FX) are the primary disruptor of Nigerian procurement. We mitigate this through rapid execution matrices, secured forward-pricing agreements with local OEMs, and maintaining sufficient cash reserves to execute purchases immediately upon contract award, locking in quoted prices.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h4 className="font-bold text-corporate-navy mb-2">Transit Risk</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            The condition of inland road networks poses severe threats to delicate technical equipment. We counter this by over-specifying crating materials, utilizing air-ride suspension logistics vehicles where necessary, and securing comprehensive Goods-In-Transit (GIT) insurance that fully protects the client's financial exposure.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h4 className="font-bold text-corporate-navy mb-2">Counterfeit Risk</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Counterfeit industrial goods can cause catastrophic system failures. We neutralize this entirely through our rigorous Phase 1 Quality Assurance protocols, exclusively purchasing either directly from the manufacturer or tier-one authorized primary distributors.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h4 className="font-bold text-corporate-navy mb-2">Regulatory/Compliance Risk</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Unexpected port holds or tax disputes cause massive delays. Our dedicated compliance officers ensure all shipping documentation (Form M, PAAR, SONCAP) is flawlessly generated far in advance of cargo arrival, ensuring immediate clearing capability.
          </p>
        </div>
      </div>
    </StandardPage>
  );
}

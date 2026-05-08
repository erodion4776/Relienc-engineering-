import { StandardPage } from "../components/StandardPage";

export default function ProcurementPage() {
  return (
    <StandardPage pageNumber={10} title="General Procurement Division">
      <p>
        The core circulatory system of our business is the General Procurement Division. We have meticulously developed a globally conscious, locally integrated sourcing mechanism capable of locating, evaluating, and purchasing complex arrays of goods requested by our corporate and government partners.
      </p>

      <h3 className="font-serif text-2xl text-corporate-navy mt-6 mb-4">Strategic Sourcing Capabilities</h3>
      
      <div className="space-y-6">
        <div className="flex">
          <div className="flex-shrink-0 w-12 text-regal-gold font-bold text-2xl font-serif">I.</div>
          <div>
            <h4 className="font-bold text-corporate-navy">Industrial & Heavy Machinery</h4>
            <p className="text-slate-600 text-sm mt-1">Sourcing of generators, earth-moving components, specialized manufacturing equipment, and industrial spare parts mapped strictly to client engineering specifications.</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0 w-12 text-regal-gold font-bold text-2xl font-serif">II.</div>
          <div>
            <h4 className="font-bold text-corporate-navy">IT Infrastructure & Office Electronics</h4>
            <p className="text-slate-600 text-sm mt-1">Bulk procurement of enterprise-grade servers, high-performance workstations, networking equipment, and modern smart-office ergonomic furniture.</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0 w-12 text-regal-gold font-bold text-2xl font-serif">III.</div>
          <div>
            <h4 className="font-bold text-corporate-navy">Medical & Safety Equipment</h4>
            <p className="text-slate-600 text-sm mt-1">Supply of CE/FDA certified medical consumables, clinical laboratory apparatus, and high-tier Personal Protective Equipment (PPE) for the oil, gas, and construction sectors.</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0 w-12 text-regal-gold font-bold text-2xl font-serif">IV.</div>
          <div>
            <h4 className="font-bold text-corporate-navy">Consumables & Operational Requisites</h4>
            <p className="text-slate-600 text-sm mt-1">Ongoing supply chain management for day-to-day corporate consumables, ensuring facility managers never experience inventory blackout.</p>
          </div>
        </div>
      </div>
      
      <p className="mt-6 bg-slate-100 p-4 rounded text-sm italic text-corporate-navy border-l-4 border-corporate-navy">
        * Every procurement request undergoes our proprietary 3-point verification analysis: Price Validation, Authenticity Check, and Lead-Time Optimization.
      </p>
    </StandardPage>
  );
}

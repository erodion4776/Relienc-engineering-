import { StandardPage } from "../components/StandardPage";

export default function MissionVisionPage() {
  return (
    <StandardPage pageNumber={6} title="Mission, Vision & Strategic Objectives">
      <div className="mt-4 space-y-8">
        <div>
          <h3 className="text-2xl font-serif text-corporate-navy mb-3">Our Vision</h3>
          <p className="text-base leading-relaxed text-slate-700 bg-white p-5 border border-slate-100 shadow-sm rounded-lg">
            To be the most trusted, agile, and sought-after partner for general procurement and diverse contracting services in Nigeria, globally recognized for our unwavering, uncompromising commitment to supreme quality and rapid, accurate execution.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-serif text-corporate-navy mb-3">Our Mission</h3>
          <p className="text-base leading-relaxed text-slate-700 bg-white p-5 border border-slate-100 shadow-sm rounded-lg">
            To sustainably provide high-value, turn-key solutions through strategic global and local sourcing, innovative logistics frameworks, and stringent ethical business practices, ensuring that every client tangibly experiences "Reliable Systems" for their business ecosystem.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-serif text-corporate-navy mb-3 border-b border-slate-200 pb-2">Strategic Objectives</h3>
          <ul className="list-disc pl-6 space-y-3 text-slate-700 text-sm">
            <li><strong>Operational Excellence:</strong> To achieve a 99.9% on-time, in-full (OTIF) delivery metric across all procurement mandates.</li>
            <li><strong>Vendor Partnership:</strong> To continually expand our curated network of tier-one global OEMs and local manufacturers.</li>
            <li><strong>Sustainable Growth:</strong> To double our market share in the B2B and public sector contracting space through referral-driven, verifiable performance.</li>
            <li><strong>Human Capital:</strong> To continuously train our personnel in the latest supply chain, HSE, and project management methodologies.</li>
          </ul>
        </div>
      </div>
    </StandardPage>
  );
}

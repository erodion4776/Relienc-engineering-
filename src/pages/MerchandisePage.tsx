import { StandardPage } from "../components/StandardPage";

export default function MerchandisePage() {
  return (
    <StandardPage pageNumber={14} title="General Merchandise & Trading">
      <p>
        Complementing our specialized procurement division, our General Merchandise arm facilitates the high-volume wholesale trading and bulk distribution of diverse commercial commodities. This division acts as a formidable market aggregator, allowing smaller distributors and large corporate buyers to access scale-driven pricing points.
      </p>

      <h3 className="font-serif text-2xl text-corporate-navy mt-8 mb-6">Trading Portfolio Strategy</h3>

      <div className="bg-slate-50 p-6 border-l-4 border-corporate-navy mb-8">
        <p className="italic text-corporate-navy text-lg font-serif">
          "We do not merely trade goods; we trade certainty. Our buyers know that if Reliable Systems Nig. Ltd. verifies a commodity, the quality is guaranteed and the quantity is absolute."
        </p>
      </div>

      <p className="mb-4">Our trading operations focus on:</p>

      <ul className="space-y-4">
        <li className="flex items-start">
          <div className="h-2 w-2 rounded-full bg-regal-gold mt-2 mr-3 shrink-0"></div>
          <div>
            <span className="font-bold text-slate-800">Agricultural Commodities & Processed Goods:</span> Facilitating bulk movements of non-perishables and semi-processed goods through the Nigerian hinterland to the coastal markets.
          </div>
        </li>
        <li className="flex items-start">
          <div className="h-2 w-2 rounded-full bg-regal-gold mt-2 mr-3 shrink-0"></div>
          <div>
            <span className="font-bold text-slate-800">Construction Materials:</span> Wholesale supply of steel, cement, and high-grade finishing materials to tier-two construction firms and developers.
          </div>
        </li>
        <li className="flex items-start">
          <div className="h-2 w-2 rounded-full bg-regal-gold mt-2 mr-3 shrink-0"></div>
          <div>
            <span className="font-bold text-slate-800">Corporate Branding & Promotional Merchandise:</span> Sourcing and delivering thousands of customized, high-quality promotional items for nationwide corporate marketing campaigns.
          </div>
        </li>
      </ul>

      <p className="mt-8">
        By utilizing our core logistics framework, we remove the severe artificial inflation frequently caused by inefficient middlemen in the Nigerian trading sector.
      </p>
    </StandardPage>
  );
}

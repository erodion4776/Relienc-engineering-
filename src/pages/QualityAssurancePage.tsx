import { StandardPage } from "../components/StandardPage";
import { CheckSquare } from "lucide-react";

export default function QualityAssurancePage() {
  return (
    <StandardPage pageNumber={15} title="Quality Assurance">
      <p>
        In an environment where substandard materials and counterfeit goods proliferate, Reliable Systems Nig. Ltd. acts as an impenetrable firewall for our clients. We have instituted a draconian, non-malleable Quality Assurance philosophy.
      </p>

      <h3 className="font-serif text-2xl text-corporate-navy mt-10 mb-6">The 3-Step Inspection Policy</h3>

      <div className="bg-white border border-slate-200">
        <div className="border-b border-slate-200 p-6 flex">
          <div className="mr-6 bg-slate-100 p-4 rounded-full self-start">
            <CheckSquare className="w-8 h-8 text-regal-gold" />
          </div>
          <div>
            <h4 className="font-bold text-corporate-navy text-lg mb-2">Phase 1: Source Verification (Pre-Purchase)</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Before a purchase order is issued to a manufacturer or vendor, we subject them to rigorous DD (Due Diligence). This includes verifying their ISO certifications, cross-referencing OEM authenticity codes, and analyzing historical defect rates. We do not gamble with unvetted suppliers.
            </p>
          </div>
        </div>

        <div className="border-b border-slate-200 p-6 flex">
          <div className="mr-6 bg-slate-100 p-4 rounded-full self-start">
            <CheckSquare className="w-8 h-8 text-regal-gold" />
          </div>
          <div>
            <h4 className="font-bold text-corporate-navy text-lg mb-2">Phase 2: Post-Production / Pre-Shipment</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              If goods are manufactured to specification, our agents or designated third-party inspectors physically verify the cargo against the bill of quantities before it is loaded onto shipping vessels or interstate transport. We confirm batch numbers, expiration dates (where applicable), and physical integrity.
            </p>
          </div>
        </div>

        <div className="p-6 flex">
          <div className="mr-6 bg-slate-100 p-4 rounded-full self-start">
            <CheckSquare className="w-8 h-8 text-regal-gold" />
          </div>
          <div>
            <h4 className="font-bold text-corporate-navy text-lg mb-2">Phase 3: Delivery Site Acceptance</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Upon arrival at the client's facility, our technical team conducts a joint inspection with the client's receiving department. Goods are only considered "delivered" when the client formally signs off that the exact technical specifications have been met to the letter.
            </p>
          </div>
        </div>
      </div>
    </StandardPage>
  );
}

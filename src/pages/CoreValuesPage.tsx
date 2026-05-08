import { StandardPage } from "../components/StandardPage";
import { Shield, Clock, Award, CheckCircle } from "lucide-react";

export default function CoreValuesPage() {
  return (
    <StandardPage pageNumber={7} title="Core Values">
      <p className="mb-8">
        At Reliable Systems Nig. Ltd., our core values are not merely corporate slogans; they are the fundamental non-negotiable metrics by which we evaluate our decisions, our partnerships, and our personnel.
      </p>

      <div className="grid grid-cols-2 gap-8 mt-4">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-transform hover:-translate-y-1">
          <Shield className="w-10 h-10 text-regal-gold mb-4" />
          <h4 className="font-serif text-xl font-bold text-corporate-navy mb-2">Integrity</h4>
          <p className="text-sm text-slate-600">
            We maintain the highest ethical standards in all our dealings. Transparency is our baseline. We never compromise our moral compass for short-term financial gain.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-transform hover:-translate-y-1">
          <Clock className="w-10 h-10 text-regal-gold mb-4" />
          <h4 className="font-serif text-xl font-bold text-corporate-navy mb-2">Speed & Punctuality</h4>
          <p className="text-sm text-slate-600">
            We deliver on time, every time. Our name is a testament to our punctuality. We understand that in modern business, time is the most expensive commodity.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-transform hover:-translate-y-1">
          <Award className="w-10 h-10 text-regal-gold mb-4" />
          <h4 className="font-serif text-xl font-bold text-corporate-navy mb-2">Uncompromising Quality</h4>
          <p className="text-sm text-slate-600">
            We do not compromise on the stringent specifications of goods or services provided. Every item procured and every contract executed is optimized for durability.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-transform hover:-translate-y-1">
          <CheckCircle className="w-10 h-10 text-regal-gold mb-4" />
          <h4 className="font-serif text-xl font-bold text-corporate-navy mb-2">Total Accountability</h4>
          <p className="text-sm text-slate-600">
            We take full, unequivocal responsibility for our entire supply chain and all project outcomes. When challenges arise, we provide immediate solutions, not excuses.
          </p>
        </div>
      </div>
    </StandardPage>
  );
}

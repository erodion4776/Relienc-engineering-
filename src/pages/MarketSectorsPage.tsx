import { StandardPage } from "../components/StandardPage";
import { Building2, Landmark, Droplets, Briefcase } from "lucide-react";

export default function MarketSectorsPage() {
  return (
    <StandardPage pageNumber={19} title="Market Sectors Served">
      <p>
        The sheer agility of Reliable Systems Nig. Ltd. allows us to execute seamlessly across vastly different economic topographies. We adapt our specific compliance procedures, technical vernacular, and logistical speeds to match the exact demands of the following major sectors:
      </p>

      <div className="grid grid-cols-1 gap-4 mt-6">
        
        <div className="flex border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mr-5 shrink-0 pt-1">
            <Building2 className="w-10 h-10 text-regal-gold" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg text-corporate-navy mb-1">Private Corporate Enterprises</h4>
            <p className="text-sm text-slate-600">
              For multinationals, telecommunications giants, and leading financial institutions, we supply premium IT infrastructure, high-end ergonomic office setups, and execute specialized facility upgrades. Corporate entities demand aesthetic perfection and minimal downtime; our execution reflects this.
            </p>
          </div>
        </div>

        <div className="flex border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mr-5 shrink-0 pt-1">
            <Landmark className="w-10 h-10 text-regal-gold" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg text-corporate-navy mb-1">Public Sector & Government</h4>
            <p className="text-sm text-slate-600">
              Operating with full constitutional and tax compliance, we execute state and federal supply contracts. We frequently source and deliver educational equipment, medical supplies for public clinics, and maintenance apparatus for public works parastatals, ensuring maximum taxpayer value.
            </p>
          </div>
        </div>

        <div className="flex border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mr-5 shrink-0 pt-1">
            <Droplets className="w-10 h-10 text-regal-gold" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg text-corporate-navy mb-1">Oil, Gas & Energy</h4>
            <p className="text-sm text-slate-600">
              The energy sector operates under unforgiving conditions. We supply ruggedized industrial machinery, safety-critical PPE, and heavy-duty mechanical consumables. Our logistics chain is hardened to deliver successfully to remote sites within the Niger Delta and offshore command centers.
            </p>
          </div>
        </div>

        <div className="flex border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mr-5 shrink-0 pt-1">
            <Briefcase className="w-10 h-10 text-regal-gold" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg text-corporate-navy mb-1">NGOs & Development Agencies</h4>
            <p className="text-sm text-slate-600">
              We rapidly deploy relief materials, medical kits, and logistical vehicles to support the critical field operations of non-governmental organizations. We understand that in this sector, delays are measured not in currency, but in human impact.
            </p>
          </div>
        </div>

      </div>
    </StandardPage>
  );
}

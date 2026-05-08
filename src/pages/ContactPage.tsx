import { StandardPage } from "../components/StandardPage";
import { companyDetails } from "../data/company";
import { MapPin, Phone, Mail, Building } from "lucide-react";

export default function ContactPage() {
  return (
    <StandardPage pageNumber={23} title="Contact Details">
      <p className="mb-10 text-lg">
        We invite prospective clients to initiate formal dialogue. Our commercial team is primed to decode complex briefs into actionable, heavily optimized supply scenarios.
      </p>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <div className="grid grid-cols-2 gap-y-12">
          
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-start">
              <div className="bg-slate-100 p-3 rounded-full mr-4 text-corporate-navy">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-widest uppercase text-slate-400 mb-1">Registered Address</h4>
                <p className="font-serif text-lg text-corporate-navy pr-4">
                  {companyDetails.addressParams.registered}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="flex items-start">
              <div className="bg-slate-100 p-3 rounded-full mr-4 text-corporate-navy">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-widest uppercase text-slate-400 mb-1">Lagos Operations Address</h4>
                <p className="font-serif text-lg text-corporate-navy pr-4">
                  {companyDetails.addressParams.operations}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="flex items-start">
              <div className="bg-slate-100 p-3 rounded-full mr-4 text-corporate-navy">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-widest uppercase text-slate-400 mb-1">Direct Telephone</h4>
                <p className="font-serif text-2xl font-bold text-corporate-navy">
                  {companyDetails.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="flex items-start">
              <div className="bg-slate-100 p-3 rounded-full mr-4 text-corporate-navy">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-widest uppercase text-slate-400 mb-1">Electronic Mail</h4>
                <p className="font-serif text-xl font-bold text-corporate-navy">
                  {companyDetails.email}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className="mt-12 text-center text-slate-500 text-sm">
        <p>Our official operational hours span Monday through Friday, 08:00 to 17:00 WAT.</p>
        <p className="mt-2">Formal tender requests and Request for Quotations (RFQs) should be directed strictly to our official email address.</p>
      </div>

    </StandardPage>
  );
}

import { StandardPage } from "../components/StandardPage";

export default function TechnicalServicesPage() {
  return (
    <StandardPage pageNumber={13} title="Technical Services & Facility Maintenance">
      <p>
        To protect and extend the lifecycle of our clients' critical physical assets, Reliable Systems Nig. Ltd. provides robust Technical Services and Facility Maintenance solutions. We transition clients from a posture of costly reactive repairs to highly efficient preventative maintenance.
      </p>

      <h3 className="font-serif text-2xl text-corporate-navy mt-8 mb-4">Core Competencies</h3>

      <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-6">
        <div>
          <h4 className="font-bold text-corporate-navy uppercase tracking-wider text-xs mb-2 border-b-2 border-regal-gold inline-block pb-1">Power Infrastructure</h4>
          <p className="text-sm text-slate-600 mt-2">
            Routine servicing, overhaul, and emergency repair of high-kVA diesel generation units. Implementation of hybrid energy solutions (solar/inverter matrix) and maintenance of specialized electrical panels to ensure 99% uptime for corporate headquarters and operational sites.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-corporate-navy uppercase tracking-wider text-xs mb-2 border-b-2 border-regal-gold inline-block pb-1">HVAC Systems</h4>
          <p className="text-sm text-slate-600 mt-2">
            Comprehensive maintenance of industrial air conditioning, ventilation, and deep heating systems. We ensure optimal air quality standards are maintained while aggressively reducing unnecessary energy draw.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-corporate-navy uppercase tracking-wider text-xs mb-2 border-b-2 border-regal-gold inline-block pb-1">Civil & Structural Works</h4>
          <p className="text-sm text-slate-600 mt-2">
            Execution of corporate office partitioning, plumbing system overhauls, exterior facade maintenance, and localized civil construction requirements within larger facility ecosystems. 
          </p>
        </div>

        <div>
          <h4 className="font-bold text-corporate-navy uppercase tracking-wider text-xs mb-2 border-b-2 border-regal-gold inline-block pb-1">Service Level Agreements</h4>
          <p className="text-sm text-slate-600 mt-2">
            We offer deeply customized post-installation SLAs. Our rapid-response teams are stationed across Lagos and Benin, guaranteeing ultra-low mean time to repair (MTTR) metrics for our retained clients.
          </p>
        </div>
      </div>
    </StandardPage>
  );
}

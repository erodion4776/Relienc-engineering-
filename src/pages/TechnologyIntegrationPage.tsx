import { StandardPage } from "../components/StandardPage";

export default function TechnologyIntegrationPage() {
  return (
    <StandardPage pageNumber={21} title="Technology & Digital Integration">
      <p>
        We do not rely on analog methods for complex modern logistics. Reliable Systems Nig. Ltd. deeply integrates severe technological oversight into every phase of our pipeline, guaranteeing predictive efficiency rather than reactive chaos.
      </p>

      <h3 className="font-serif text-2xl text-corporate-navy mt-10 mb-6">Digital Capabilities</h3>

      <div className="grid grid-cols-2 gap-6">
        <div className="border border-slate-200 p-6 rounded bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-regal-gold"></div>
          <h4 className="font-bold text-corporate-navy mt-2 mb-3">Enterprise Resource Planning (ERP)</h4>
          <p className="text-xs text-slate-600">
            Internal operations are governed by localized ERP integration, synchronizing our procurement data, warehouse inventories, and accounting streams in real-time. This prevents fatal logistical overlaps or inventory miscounts.
          </p>
        </div>

        <div className="border border-slate-200 p-6 rounded bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-regal-gold"></div>
          <h4 className="font-bold text-corporate-navy mt-2 mb-3">Real-Time Fleet Tracking</h4>
          <p className="text-xs text-slate-600">
            Through strategic GPS syndication, we maintain God's-eye visibility over our critical inland freight movements. If a transport unit deviates from a mandated safe corridor, we know instantly and trigger protocols.
          </p>
        </div>

        <div className="border border-slate-200 p-6 rounded bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-regal-gold"></div>
          <h4 className="font-bold text-corporate-navy mt-2 mb-3">Cloud-Secure Documentation</h4>
          <p className="text-xs text-slate-600">
            Every invoice, airway bill, customs manifest, and signed client-delivery note is instantly digitized to end-to-end encrypted cloud storage. Clients can request duplicate documentation years after contract closure within minutes.
          </p>
        </div>

        <div className="border border-slate-200 p-6 rounded bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-regal-gold"></div>
          <h4 className="font-bold text-corporate-navy mt-2 mb-3">Digital Procurement Sync</h4>
          <p className="text-xs text-slate-600">
            For specific retained clients, we map our re-order catalogs directly to their digital purchasing interfaces, allowing facility managers to trigger resupply chains with a single secure click.
          </p>
        </div>
      </div>
    </StandardPage>
  );
}

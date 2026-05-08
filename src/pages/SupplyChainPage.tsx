import { StandardPage } from "../components/StandardPage";

export default function SupplyChainPage() {
  return (
    <StandardPage pageNumber={11} title="Supply Chain & Logistics Excellence">
      <p>
        Procuring the right item is only half the equation; delivering it flawlessly to the destination is where Reliable Systems Nig. Ltd. distinctly outpaces the competition. Our logistics infrastructure is entirely hardened against the typical disruptions found in emerging markets.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 border border-slate-200">
          <h4 className="font-bold text-corporate-navy uppercase tracking-wider text-sm mb-3">Freight & Shipping</h4>
          <p className="text-sm text-slate-600">
            Through sustained partnerships with tier-one global freight forwarders and rigorous in-house customs clearing experts, we dramatically compress the time goods spend in transit and at the ports. We handle all import documentation, sea/air manifesting, and terminal protocols.
          </p>
        </div>

        <div className="bg-white p-6 border border-slate-200">
          <h4 className="font-bold text-corporate-navy uppercase tracking-wider text-sm mb-3">Last-Mile Execution</h4>
          <p className="text-sm text-slate-600">
            Our inland transport grid, operating primarily outward from Lagos and Benin, utilizes deeply vetted transport syndicates equipped with goods-in-transit (GIT) insurance. We guarantee the structural integrity of every delivery, whether to a corporate tower in VI or an isolated rig site in the Delta.
          </p>
        </div>
      </div>

      <h3 className="font-serif text-2xl text-corporate-navy mt-8 mb-4">Inventory & Warehouse Management</h3>
      <p>
        For clients requiring phased deliveries or long-term supply agreements, Reliable Systems provides secure warehousing solutions. We employ strict climate control parameters where necessary, and rigorously apply First-In-First-Out (FIFO) or Just-In-Time (JIT) methodologies based precisely on the client's operational heartbeat.
      </p>

    </StandardPage>
  );
}

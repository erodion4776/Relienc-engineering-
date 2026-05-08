import { StandardPage } from "../components/StandardPage";

export default function ContractingPage() {
  return (
    <StandardPage pageNumber={12} title="General Contracting">
      <p>
        Moving beyond the simple provision of goods, Reliable Systems Nig. Ltd. offers comprehensive general contracting services. We assume central point-of-contact responsibility for complex projects, orchestrating various technical vendors, labor forces, and supply streams into a single, cohesive execution strategy.
      </p>

      <h3 className="font-serif text-2xl text-corporate-navy mt-8 mb-4">Project Management Methodology</h3>
      
      <p>
        Every contract we undertake is mapped through our bespoke project lifecyle framework:
      </p>

      <div className="mt-6 space-y-4">
        <div className="border border-slate-200 p-4 bg-white flex items-center">
          <div className="w-12 h-12 bg-corporate-navy text-white flex items-center justify-center font-bold text-xl mr-4 shrink-0">01</div>
          <div>
            <h4 className="font-bold text-regal-gold border-b border-slate-100 pb-1 mb-2">Diagnostic Scoping</h4>
            <p className="text-sm">Rigorous analysis of the brief, engineering blueprints, and site realities to eliminate fatal assumptions before mobilization.</p>
          </div>
        </div>

        <div className="border border-slate-200 p-4 bg-white flex items-center">
          <div className="w-12 h-12 bg-corporate-navy text-white flex items-center justify-center font-bold text-xl mr-4 shrink-0">02</div>
          <div>
            <h4 className="font-bold text-regal-gold border-b border-slate-100 pb-1 mb-2">Resource Allocation Matrix</h4>
            <p className="text-sm">Matching the exact technical manpower and material quality required to the budget, ensuring zero compromise on structural or functional integrity.</p>
          </div>
        </div>

        <div className="border border-slate-200 p-4 bg-white flex items-center">
          <div className="w-12 h-12 bg-corporate-navy text-white flex items-center justify-center font-bold text-xl mr-4 shrink-0">03</div>
          <div>
            <h4 className="font-bold text-regal-gold border-b border-slate-100 pb-1 mb-2">Active Execution & Gantt Tracking</h4>
            <p className="text-sm">Deployment of resources with militaristic precision, tracked daily against critical path milestones to preempt delays.</p>
          </div>
        </div>

        <div className="border border-slate-200 p-4 bg-white flex items-center">
          <div className="w-12 h-12 bg-corporate-navy text-white flex items-center justify-center font-bold text-xl mr-4 shrink-0">04</div>
          <div>
            <h4 className="font-bold text-regal-gold border-b border-slate-100 pb-1 mb-2">Turnover & De-briefing</h4>
            <p className="text-sm">Formal handover of the completed project, accompanied by exhaustive documentation, warranties, and a strategic review for continuous improvement.</p>
          </div>
        </div>
      </div>
    </StandardPage>
  );
}

import { StandardPage } from "../components/StandardPage";

export default function HsePolicyPage() {
  return (
    <StandardPage pageNumber={16} title="Health, Safety, and Environment (HSE)">
      <p>
        Reliable Systems Nig. Ltd. fiercely protects the well-being of its employees, its clients, and the operational environments in which it functions. Our Health, Safety, and Environment (HSE) policy is actively enforced to achieve a perpetual target of Zero Accidents, Zero Incidents, and Zero Environmental Transgressions.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <h4 className="font-serif text-xl border-l-[4px] border-corporate-navy pl-3 mb-2 text-corporate-navy">Occupational Health & Safety</h4>
          <p className="text-sm text-slate-600">
            We mandate total compliance with both national safety regulations and international best practices (such as OSHA guidelines). Every contractor, driver, and site engineer operating under our banner undergoes strictly documented safety briefings. Full Personal Protective Equipment (PPE) is non-negotiable on all active sites and warehouses.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xl border-l-[4px] border-regal-gold pl-3 mb-2 text-corporate-navy">Environmental Stewardship</h4>
          <p className="text-sm text-slate-600">
            We recognize the fragility of the Nigerian ecosystem. Our logistics algorithms are optimized to reduce carbon expenditure by minimizing deadhead truck mileage. Furthermore, in our contracting division, we enforce strict, compliant waste disposal methodologies, ensuring that industrial byproducts, mechanical fluids, and construction debris are never illegally dumped.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xl border-l-[4px] border-corporate-navy pl-3 mb-2 text-corporate-navy">Continuous Safety Auditing</h4>
          <p className="text-sm text-slate-600">
            Our HSE Officers perform unannounced randomized audits across all active logistics routes, warehouses, and contracting sites. Any breach of HSE protocol results in immediate cessation of work until absolute compliance is restored. We believe safety is a prerequisite to work, not merely a byproduct of it.
          </p>
        </div>
      </div>
    </StandardPage>
  );
}

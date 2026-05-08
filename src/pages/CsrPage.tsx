import { StandardPage } from "../components/StandardPage";

export default function CsrPage() {
  return (
    <StandardPage pageNumber={22} title="Corporate Social Responsibility & Impact">
      <p>
        At Reliable Systems Nig. Ltd., our definition of commercial success is intrinsically linked with the socioeconomic elevation of the communities in which we operate, specifically across our established corridors in Lagos and Edo State. Our CSR is not a marketing afterthought; it is structurally embedded into our corporate identity.
      </p>

      <div className="mt-10 mb-8 border-l-[3px] border-regal-gold pl-6 py-2">
        <h3 className="font-serif text-2xl text-corporate-navy mb-2">Local Community Employment Parity</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Whenever we engage in intensive general contracting operations, we enforce a strict mandate prioritizing the hiring of qualified semi-skilled labor native to that immediate locality. By purposefully injecting payroll into the immediate environment, we ensure our presence leaves a lasting positive economic footprint.
        </p>
      </div>

      <div className="mt-8 border-l-[3px] border-corporate-navy pl-6 py-2">
        <h3 className="font-serif text-2xl text-corporate-navy mb-2">Vocational Skill Transfer</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Nigeria suffers not from a lack of manpower, but a deficit of specialized technical training. We consistently cycle localized apprentices under the direct supervision of our elite site engineers and procurement specialists. These individuals exit our projects with drastically improved, marketable industrial skill sets.
        </p>
      </div>

      <div className="mt-8 border-l-[3px] border-slate-400 pl-6 py-2">
        <h3 className="font-serif text-2xl text-corporate-navy mb-2">Direct Local Trade Symbiosis</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          While we globally source complex technical apparatus, we ruthlessly prioritize certified indigenous Nigerian manufacturers for massive bulk commodities (e.g., specific construction aggregates, basic protective wear). This fortifies the internal Nigerian supply chain base.
        </p>
      </div>
    </StandardPage>
  );
}

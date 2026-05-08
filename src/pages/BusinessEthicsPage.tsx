import { StandardPage } from "../components/StandardPage";

export default function BusinessEthicsPage() {
  return (
    <StandardPage pageNumber={18} title="Business Ethics & Governance">
      <p>
        At Reliable Systems Nig. Ltd., our corporate governance architecture demands absolute moral clarity and legal compliance. We operate structurally under the premise that a compromised contract is intrinsically a failed contract, regardless of margins.
      </p>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-xl font-bold font-serif text-corporate-navy border-b border-regal-gold pb-2 mb-3">Zero-Tolerance Anti-Corruption Policy</h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            We strictly enforce a draconian anti-bribery and anti-corruption protocol that explicitly forbids the offering, soliciting, or acceptance of undocumented financial inducements. Our operations are fully compliant with Nigerian anti-graft laws (including EFCC and ICPC mandates) and international treaties mapped to equivalent standards like the UK Bribery Act. Our personnel are routinely audited against these metrics.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold font-serif text-corporate-navy border-b border-regal-gold pb-2 mb-3">Transparency in Tendering</h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            When participating in public or private sector procurement bidding, our tender documents contain zero hidden clauses. Our BoQs (Bills of Quantities) are meticulously exact. We do not engage in predatory pricing models designed to secure contracts via underbidding, only to subsequently extort the client via aggressive change orders.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold font-serif text-corporate-navy border-b border-regal-gold pb-2 mb-3">Confidentiality & Data Integrity</h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            In our capacity as a structural partner, we often handle highly sensitive client blueprints, inner financial architecture, and operational vulnerabilities. Every tier of our organization operates under strict, legally binding Non-Disclosure Agreements (NDAs). Client data is heavily siloed and protected against industrial espionage or careless exposure.
          </p>
        </div>
      </div>
    </StandardPage>
  );
}

import { StandardPage } from "../components/StandardPage";

export default function ExecutiveStatementPage() {
  return (
    <StandardPage pageNumber={4} title="Executive Statement">
      <div className="bg-slate-50 p-8 border-l-[8px] border-corporate-navy mb-6 rounded-r-lg">
        <p className="font-serif text-2xl italic leading-relaxed text-corporate-navy">
          "Our Name is Our Promise."
        </p>
      </div>
      <p>
        When we founded Reliable Systems Nig. Ltd., we did so with a singular goal: to redefine the meaning of reliability in the Nigerian business landscape. We understand that in procurement and general contracting, delays and poor quality are not just inconveniences—they are tangible costs to your business.
      </p>
      <p>
        We have built a strategic framework that prioritizes the client's operational needs above all else. By removing the traditional complexities and opacities of the supply chain, we offer a seamless, end-to-end experience that allows our partners to focus on their core objectives while we handle the rigorous logistics of quality delivery.
      </p>
      <p>
        Our leadership team brings decades of combined experience in project management, supply chain optimization, and corporate governance. This expertise is deployed on every project, ensuring that our execution is flawless and our communication transparent.
      </p>
      <p>
        Your trust is the foundation of our progressive growth, and we are fiercely committed to earning it, preserving it, and validating it with every single contract we execute.
      </p>
      <div className="mt-12 text-right">
        <p className="font-serif font-bold text-xl text-corporate-navy">— The Management Team</p>
        <p className="text-sm uppercase tracking-widest text-slate-500 mt-2">Reliable Systems Nig. Ltd.</p>
      </div>
    </StandardPage>
  );
}

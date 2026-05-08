import { StandardPage } from "../components/StandardPage";

export default function CompanyHistoryPage() {
  return (
    <StandardPage pageNumber={5} title="Company History & Philosophy">
      <p>
        Reliable Systems Nig. Ltd. (RC 7045741) is a multifaceted indigenous company incorporated under the laws of the Federal Republic of Nigeria. Since our inception, we have rapidly positioned ourselves as a premier provider of general merchandise, supplies, and comprehensive integrated contract services.
      </p>
      <p>
        With an active corporate status and full, audited compliance with the Corporate Affairs Commission (CAC) and all relevant allied regulatory bodies, we operate with paramount financial transparency and professional rigor. Our operations strategically span across major Nigerian economic hubs, including our registered base in Benin and our operational headquarters in Lagos. This geographic spread enables us to seamlessly serve a highly diverse and demanding range of clients, from private multinational corporations to critical government parastatals.
      </p>
      <h3 className="font-serif text-2xl text-corporate-navy mt-6 mb-2">Our Operating Philosophy</h3>
      <p>
        Our operational philosophy is built on the tenet of "Anticipatory Servicing." We do not merely react to purchase orders or tender documents; we proactively analyze our clients' operational environments to foresee potential supply chain bottlenecks or project risks, neutralizing them before they impact the critical path.
      </p>
      <p>
        Furthermore, we believe that true contracting excellence is achieved not just through aggressive pricing, but through the uncompromising total cost of ownership. By supplying the highest grade of materials and deploying the most competent technical manpower, we ensure that the lifecycle of our supplies and projects significantly outlasts industry averages, delivering profound long-term value to our clients.
      </p>
    </StandardPage>
  );
}

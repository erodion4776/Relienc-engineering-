import { PageContainer } from "../components/PageContainer";

export default function TocPage() {
  const contents = [
    { page: "04", title: "Executive Statement" },
    { page: "05", title: "Company History & Philosophy" },
    { page: "06", title: "Mission, Vision & Strategic Objectives" },
    { page: "07", title: "Core Values" },
    { page: "08", title: "The Trust Framework" },
    { page: "09", title: "Organizational Structure" },
    { page: "10", title: "General Procurement Division" },
    { page: "11", title: "Supply Chain & Logistics Excellence" },
    { page: "12", title: "General Contracting" },
    { page: "13", title: "Technical Services & Facility Maintenance" },
    { page: "14", title: "General Merchandise" },
    { page: "15", title: "Quality Assurance" },
    { page: "16", title: "Health, Safety, and Environment (HSE)" },
    { page: "17", title: "Risk Management" },
    { page: "18", title: "Business Ethics & Governance" },
    { page: "19", title: "Market Sectors Served" },
    { page: "20", title: "Financial Capacity & Solvency" },
    { page: "21", title: "Technology & Digital Integration" },
    { page: "22", title: "Corporate Social Responsibility (CSR)" },
    { page: "23", title: "Contact Information" }
  ];

  return (
    <PageContainer pageNumber={3}>
      <div className="flex flex-col h-full px-[20mm] py-[30mm]">
        <h2 className="text-4xl text-regal-gold border-b-2 border-slate-100 pb-4 mb-6 font-serif">
          Table of Contents
        </h2>
        <ul className="flex flex-col gap-2.5 text-base font-sans mt-2">
          {contents.map((item, index) => (
            <li key={index} className="flex border-b border-dashed border-slate-300 pb-1.5 items-end">
              <span className="font-bold text-corporate-navy mr-4 tracking-wider">{item.page}.</span>
              <span className="text-slate-700 flex-grow">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageContainer>
  );
}

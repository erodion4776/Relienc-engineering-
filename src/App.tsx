/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Printer, AlertCircle } from "lucide-react";
import { useState } from "react";
import CoverPage from "./pages/CoverPage";
import CorporateInfoPage from "./pages/CorporateInfoPage";
import TocPage from "./pages/TocPage";
import ExecutiveStatementPage from "./pages/ExecutiveStatementPage";
import CompanyHistoryPage from "./pages/CompanyHistoryPage";
import MissionVisionPage from "./pages/MissionVisionPage";
import CoreValuesPage from "./pages/CoreValuesPage";
import TrustFrameworkPage from "./pages/TrustFrameworkPage";
import OrganizationalStructurePage from "./pages/OrganizationalStructurePage";
import ProcurementPage from "./pages/ProcurementPage";
import SupplyChainPage from "./pages/SupplyChainPage";
import ContractingPage from "./pages/ContractingPage";
import TechnicalServicesPage from "./pages/TechnicalServicesPage";
import MerchandisePage from "./pages/MerchandisePage";
import QualityAssurancePage from "./pages/QualityAssurancePage";
import HsePolicyPage from "./pages/HsePolicyPage";
import RiskManagementPage from "./pages/RiskManagementPage";
import BusinessEthicsPage from "./pages/BusinessEthicsPage";
import MarketSectorsPage from "./pages/MarketSectorsPage";
import FinancialCapacityPage from "./pages/FinancialCapacityPage";
import TechnologyIntegrationPage from "./pages/TechnologyIntegrationPage";
import CsrPage from "./pages/CsrPage";
import ContactPage from "./pages/ContactPage";
import BackCoverPage from "./pages/BackCoverPage";

export default function App() {
  const [showHint, setShowHint] = useState(false);

  const handlePrint = () => {
    try {
      window.print();
    } catch (e) {
      console.error("Print blocked by iframe restrictions", e);
    }
    
    // Always show hint because in some iframes window.print silently does nothing
    setShowHint(true);
    setTimeout(() => setShowHint(false), 8000);
  };

  return (
    <div className="bg-slate-100 min-h-screen py-8 overflow-x-auto print:py-0 print:bg-white flex flex-col items-center select-text">
      <div className="no-print fixed bottom-8 right-8 flex flex-col items-end z-50">
        {showHint && (
          <div className="animate-in fade-in slide-in-from-bottom-5 bg-white border-l-4 border-regal-gold text-slate-800 text-sm p-4 rounded shadow-2xl mb-4 max-w-sm">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-regal-gold mr-3 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-corporate-navy mb-1">Print dialog not appearing?</p>
                <p>Because you are in a preview window, your browser might block printing. Please click the <strong>Open in New Tab</strong> button (the square with an arrow) at the very top right of this screen, then try printing again.</p>
              </div>
            </div>
          </div>
        )}
        <button 
          onClick={handlePrint}
          className="bg-corporate-navy hover:bg-slate-800 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-105 flex items-center justify-center group"
        >
          <Printer className="w-6 h-6 mr-0 group-hover:mr-2 transition-all" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium">Download as PDF</span>
        </button>
      </div>

      <div className="flex flex-col items-center w-full min-w-[210mm] print:w-[210mm]">
        <CoverPage />
        <CorporateInfoPage />
        <TocPage />
        <ExecutiveStatementPage />
        <CompanyHistoryPage />
        <MissionVisionPage />
        <CoreValuesPage />
        <TrustFrameworkPage />
        <OrganizationalStructurePage />
        <ProcurementPage />
        <SupplyChainPage />
        <ContractingPage />
        <TechnicalServicesPage />
        <MerchandisePage />
        <QualityAssurancePage />
        <HsePolicyPage />
        <RiskManagementPage />
        <BusinessEthicsPage />
        <MarketSectorsPage />
        <FinancialCapacityPage />
        <TechnologyIntegrationPage />
        <CsrPage />
        <ContactPage />
        <BackCoverPage />
      </div>
    </div>
  );
}


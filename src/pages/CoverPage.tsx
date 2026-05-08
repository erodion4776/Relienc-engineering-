import { PageContainer } from "../components/PageContainer";

export default function CoverPage() {
  return (
    <PageContainer hideFooter bgWhite={false} className="bg-corporate-navy text-white justify-center items-center text-center">
      <div className="w-[100px] h-2 bg-regal-gold mx-auto mb-12"></div>
      <h1 className="text-6xl font-serif text-white tracking-wide leading-tight mb-8">
        RELIABLE SYSTEMS<br />NIG. LTD.
      </h1>
      <p className="text-regal-gold text-2xl tracking-[0.2em] font-sans">
        EXCELLENCE • INTEGRITY • DELIVERY
      </p>
      <div className="w-[100px] h-2 bg-regal-gold mx-auto mt-12 mb-20"></div>
      
      <div className="mt-8 font-sans">
        <p className="text-lg tracking-widest font-semibold mb-2">CORPORATE PROFILE</p>
        <p className="text-sm opacity-60">RC Number: 7045741</p>
      </div>
    </PageContainer>
  );
}

import CodeGround from "./CodeGround";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";


const CodeLayout = () => {
  

  return (
    <div className="grid md:grid-cols-4  min-h-screen">
      <div className="md:col-span-3  ">
        <CodeGround />
      </div>
      <div className="flex flex-row  md:flex-col ">
        <InputSection />
        <OutputSection />
      </div>
    </div>
  );
};

export default CodeLayout;

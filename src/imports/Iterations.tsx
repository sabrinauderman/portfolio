import imgImage from "@/assets/1ccf328d47a940a01db3f50a3f1c1be445c5c239.png";
import imgImage1 from "@/assets/9485a0016410605ce824e62572d37418cbfccffd.png";
import imgImage2 from "@/assets/20a379ffec9ca19a23eda1b0b849e110149f3ab1.png";
import imgImage3 from "@/assets/9485a0016410605ce824e62572d37418cbfccffd.png";

function ImageImage() {
  return (
    <div className="aspect-[509.29998779296875/314.0199890136719] flex-[1_0_0] min-h-px min-w-px relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[2.31%] max-w-none top-0 w-[95.37%]" src={imgImage1} />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="absolute inset-0 rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[rgba(35,36,41,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['false:Normal',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232429] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['false:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232429] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}

export default function Iterations() {
  return (
    <div className="content-stretch flex items-start justify-between pr-[0.01px] py-[40px] relative size-full" data-name="Iterations">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Header">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[126px]" data-name="Title">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col font-['false:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232429] text-[16px] whitespace-nowrap">
              <p className="leading-[24px]">KEY ITERATIONS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[64px] items-start justify-center min-h-px min-w-px relative" data-name="Body">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Copy">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#b87673] text-white font-semibold text-lg">
                1
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
              <ContainerText text="“What does involvement mean?”" />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
              <ContainerText1 text="Tooltips, clearer labels, and custom input fields clarified project expectations." />
            </div>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[16px] relative rounded-[8px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-[525.3px]" data-name="Background+Shadow">
            <div className="aspect-[509.29998779296875/314.0199890136719] flex-[1_0_0] min-h-px min-w-px relative" data-name="image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[2.31%] max-w-none top-0 w-[95.37%]" src={imgImage} />
              </div>
            </div>
            <Border />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Copy">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#b87673] text-white font-semibold text-lg">
                2
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
              <ContainerText text="“Projects are everywhere. What's what?”" />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
              <ContainerText1 text="Navigation was cleaned up, preview cards simplified, and dashboards reorganized." />
            </div>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[16px] relative rounded-[8px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-[525.3px]" data-name="Background+Shadow">
            <ImageImage />
            <Border />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Copy">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#b87673] text-white font-semibold text-lg">
                3
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
              <ContainerText text="“Can I revise my feedback?”" />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
              <ContainerText1 text="We added progressive task states and editable feedback loops." />
            </div>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[16px] relative rounded-[8px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-[525.3px]" data-name="Background+Shadow">
            <div className="aspect-[509.29998779296875/314.0199890136719] flex-[1_0_0] min-h-px min-w-px relative" data-name="image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[2.31%] max-w-none top-0 w-[95.37%]" src={imgImage2} />
              </div>
            </div>
            <Border />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Copy">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#b87673] text-white font-semibold text-lg">
                4
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
              <ContainerText text="“Why is this match 92%?”" />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
              <ContainerText1 text="Match breakdowns were added for transparency." />
            </div>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[16px] relative rounded-[8px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] shrink-0 w-[525.3px]" data-name="Background+Shadow">
            <div className="aspect-[509.29998779296875/314.0199890136719] flex-[1_0_0] min-h-px min-w-px relative" data-name="image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[2.31%] max-w-none top-0 w-[95.37%]" src={imgImage3} />
              </div>
            </div>
            <Border />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dbdee4] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}


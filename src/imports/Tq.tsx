import clsx from "clsx";
import svgPaths from "./svg-m7e82vg1i0";
type Container2Props = {
  additionalClassNames?: string;
};

function Container2({ children, additionalClassNames = "" }: React.PropsWithChildren<Container2Props>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[1073px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("h-[32px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Menlo:Regular',sans-serif] leading-[16px] left-[43.5px] not-italic text-[#66758a] text-[12px] text-center top-0 whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M9 3L3 9" id="Vector" stroke="var(--stroke-0, #66758A)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 3L9 9" id="Vector_2" stroke="var(--stroke-0, #66758A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="h-[16px] relative shrink-0 w-[12px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[6px] not-italic text-[#0a0a0a] text-[12px] text-center top-px whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-[1073px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#131720] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <Wrapper>
      <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #66758A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </Wrapper>
  );
}

function Container() {
  return (
    <Wrapper1 additionalClassNames="bg-[#0b64f4] rounded-[16777200px] size-[32px]">
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Icon">
            <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </Wrapper1>
  );
}

export default function Tq() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start pt-[32px] px-[24px] relative size-full" data-name="TQ">
      <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Heading 1">
          <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#131720] text-[30px] tracking-[0.3955px]">Create Tracking Update</p>
        </div>
        <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#66758a] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Fill in the details below to create a new tracking update</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] h-[888px] items-start relative shrink-0 w-full" data-name="Container">
        <div className="h-[66px] relative shrink-0 w-[1123px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute bg-white border border-[#e0e5eb] border-solid h-[66px] left-0 rounded-[10px] top-0 w-[1123px]" data-name="Button">
              <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[16px] top-[16px] w-[176.773px]" data-name="Container">
                <Container />
                <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[66.5px] not-italic text-[#131720] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Basic Information</p>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center justify-center left-[1085px] size-[20px] top-[22px]" data-name="Container">
                <Icon />
              </div>
              <div className="absolute h-[24px] left-[504.58px] top-[20px] w-[111.836px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[56.5px] not-italic text-[#4a5568] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Context Create</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[66px] relative shrink-0 w-[1123px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute bg-white content-stretch flex h-[66px] items-center justify-between left-0 px-[17px] py-px rounded-[10px] top-0 w-[1123px]" data-name="Button">
              <div aria-hidden="true" className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <Container1 additionalClassNames="w-[96.391px]">
                <Container />
                <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[26px] not-italic text-[#131720] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Details</p>
                  </div>
                </div>
              </Container1>
              <Wrapper1 additionalClassNames="size-[20px]">
                <Icon />
              </Wrapper1>
            </div>
          </div>
        </div>
        <div className="h-[741px] relative shrink-0 w-[1123px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute bg-white content-stretch flex flex-col h-[651px] items-start left-0 p-px rounded-[10px] top-[74px] w-[1123px]" data-name="Container">
              <div aria-hidden="true" className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <div className="h-[655px] relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative size-full">
                  <div className="content-stretch flex flex-col gap-[10px] h-[78px] items-start relative shrink-0 w-full" data-name="Container">
                    <LabelText text="Events" />
                    <Container2 additionalClassNames="bg-white">
                      <div className="absolute bg-white content-stretch flex gap-[8px] h-[30px] items-center left-[13px] px-[13px] py-px rounded-[8px] top-[9px] w-[188px]" data-name="Button">
                        <div aria-hidden="true" className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <TextText text="🎮" />
                        <div className="h-[16px] relative shrink-0 w-[126px]" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <p className="-translate-x-1/2 absolute font-['Menlo:Regular',sans-serif] leading-[16px] left-[61px] not-italic text-[#66758a] text-[12px] text-center top-0 w-[130px]">elemente_upgraded</p>
                          </div>
                        </div>
                        <Icon1 />
                      </div>
                    </Container2>
                  </div>
                  <div className="content-stretch flex flex-col gap-[10px] h-[78px] items-start relative shrink-0 w-full" data-name="Container">
                    <LabelText text="Attributes" />
                    <Container2 additionalClassNames="bg-[#fcfbf8]">
                      <div className="absolute h-[30px] left-[13px] top-[9px] w-[401.844px]" data-name="Container">
                        <div className="absolute bg-white content-stretch flex gap-[8px] h-[30px] items-center left-0 px-[13px] py-px rounded-[8px] top-0 w-[162px]" data-name="Button">
                          <div aria-hidden="true" className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <TextText text="✏️" />
                          <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="-translate-x-1/2 absolute font-['Menlo:Regular',sans-serif] leading-[16px] left-[47px] not-italic text-[#66758a] text-[12px] text-center top-0 whitespace-nowrap">new_attribute</p>
                            </div>
                          </div>
                          <Icon1 />
                        </div>
                        <div className="absolute bg-white content-stretch flex gap-[8px] h-[30px] items-center left-[169.45px] px-[13px] py-px rounded-[8px] top-0 w-[152.695px]" data-name="Button">
                          <div aria-hidden="true" className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <TextText text="🎮" />
                          <TextText1 text="player_level" />
                          <Icon1 />
                        </div>
                        <div className="absolute bg-white content-stretch flex gap-[8px] h-[30px] items-center left-[330.15px] px-[13px] py-px rounded-[8px] top-0 w-[152.695px]" data-name="Button">
                          <div aria-hidden="true" className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <TextText text="🎮" />
                          <TextText1 text="level_number" />
                          <Icon1 />
                        </div>
                      </div>
                    </Container2>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[16px] h-[381px] items-start pt-[25px] relative shrink-0 w-full" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[#e0e5eb] border-solid border-t inset-0 pointer-events-none" />
                        <div className="h-[150px] relative shrink-0 w-[1073px]" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
                            <LabelText text="Explanation" />
                            <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[1073px]" data-name="Text Area">
                              <div className="overflow-clip rounded-[inherit] size-full">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[8px] relative size-full">
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(19,23,32,0.5)] tracking-[-0.1504px] whitespace-nowrap">Add context or details about this tracking update...</p>
                                </div>
                              </div>
                              <div aria-hidden="true" className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                            </div>
                          </div>
                        </div>
                        <div className="h-[190px] relative shrink-0 w-[1073px]" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <div className="absolute h-[20px] left-0 top-0 w-[1073px]" data-name="Label">
                              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#131720] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Attached Files</p>
                            </div>
                            <div className="absolute content-stretch flex flex-col h-[160px] items-start left-0 pb-[2px] pt-[34px] px-[34px] rounded-[10px] top-[30px] w-[1073px]" data-name="Container">
                              <div aria-hidden="true" className="absolute border-2 border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
                              <div className="content-stretch flex flex-col gap-[8px] h-[92px] items-center relative shrink-0 w-full" data-name="Container">
                                <div className="bg-[#f5f7fa] flex-[1_0_0] min-h-px min-w-px relative rounded-[16777200px] w-[44px]" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
                                    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                                      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
                                        <div className="absolute inset-[-0.83px_-7.14%]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
                                            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #66758A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
                                        <div className="absolute inset-[-7.14%_-0.83px]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 13.3333">
                                            <path d="M0.833333 0.833333V12.5" id="Vector" stroke="var(--stroke-0, #66758A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[40px] relative shrink-0 w-[269.641px]" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                                    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                                      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[135px] not-italic text-[#131720] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Drag and drop files here, or click to select</p>
                                    </div>
                                    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
                                      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[135.25px] not-italic text-[#66758a] text-[12px] text-center top-px whitespace-nowrap">Support for images, PDFs, and documents</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex h-[40px] items-start justify-end relative shrink-0 w-full" data-name="Container">
                        <div className="bg-[#0b64f4] h-[40px] relative rounded-[8px] shrink-0 w-[188.523px]" data-name="Button">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[94.5px] not-italic text-[14px] text-center text-white top-[10.5px] tracking-[-0.1504px] whitespace-nowrap">Create Tracking Update</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white content-stretch flex h-[66px] items-center justify-between left-0 px-[17px] py-px rounded-[10px] top-0 w-[1123px]" data-name="Button">
              <div aria-hidden="true" className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <Container1 additionalClassNames="w-[190.5px]">
                <Container />
                <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[73px] not-italic text-[#131720] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">{`Events & Attributes`}</p>
                  </div>
                </div>
              </Container1>
              <Wrapper1 additionalClassNames="size-[20px]">
                <Wrapper>
                  <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #66758A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </Wrapper>
              </Wrapper1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
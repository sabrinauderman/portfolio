import clsx from "clsx";
import svgPaths from "./svg-uyb7z1o4ks";
type Container2Props = {
  additionalClassNames?: string;
};

function Container2({ children, additionalClassNames = "" }: React.PropsWithChildren<Container2Props>) {
  return (
    <div className={clsx("h-[32px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">{children}</div>
    </div>
  );
}
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("relative w-[1073px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">{children}</div>
    </div>
  );
}
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

function Label({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[20px] relative shrink-0 w-[1073px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#131720] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{children}</p>
      </div>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type TextInputTextProps = {
  text: string;
};

function TextInputText({ text }: TextInputTextProps) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[1073px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#171717] text-[14px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function DetailsContextCreate() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start pt-[32px] px-[24px] relative size-full" data-name="Details - Context Create">
      <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Heading 1">
          <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#131720] text-[30px] tracking-[0.3955px]">Create Tracking Update</p>
        </div>
        <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#66758a] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Fill in the details below to create a new tracking update</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] h-[516px] items-start relative shrink-0 w-full" data-name="Container">
        <div className="h-[66px] relative shrink-0 w-[1123px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute bg-white border border-[#e0e5eb] border-solid h-[66px] left-0 rounded-[10px] top-0 w-[1123px]" data-name="Button">
              <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[16px] top-[16px] w-[176.773px]" data-name="Container">
                <Container additionalClassNames="bg-[#0b64f4] rounded-[16777200px] size-[32px]">
                  <div className="relative shrink-0 size-[16px]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Icon">
                        <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                    </svg>
                  </div>
                </Container>
                <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[66.5px] not-italic text-[#131720] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Basic Information</p>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center justify-center left-[1085px] size-[20px] top-[22px]" data-name="Container">
                <Icon>
                  <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #66758A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </Icon>
              </div>
              <div className="absolute h-[24px] left-[504.58px] top-[20px] w-[111.836px]" data-name="Container">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[56.5px] not-italic text-[#4a5568] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Context: Create</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1123px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute bg-white content-stretch flex flex-col h-[278px] items-start left-0 p-px rounded-[10px] top-[74px] w-[1123px]" data-name="Container">
              <div aria-hidden="true" className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <div className="h-[276px] relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[24px] items-start pl-[24px] py-[24px] relative size-full">
                  <Container1 additionalClassNames="h-[70px] shrink-0">
                    <Label>
                      <span className="leading-[20px]">{`Context Name `}</span>
                      <span className="leading-[20px] text-[#dc2828]">*</span>
                    </Label>
                    <TextInputText text="New Context" />
                  </Container1>
                  <Container1 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                    <Label>
                      <span className="leading-[20px]">{`Context Description `}</span>
                      <span className="leading-[20px] text-[#dc2828]">*</span>
                    </Label>
                    <TextInputText text="New Context Description" />
                  </Container1>
                  <div className="h-[40px] relative shrink-0 w-[1073px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end relative size-full">
                      <div className="bg-[#0b64f4] h-[40px] relative rounded-[8px] shrink-0 w-[91.563px]" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[46px] not-italic text-[14px] text-center text-white top-[10.5px] tracking-[-0.1504px] whitespace-nowrap">Continue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white content-stretch flex h-[66px] items-center justify-between left-0 px-[17px] py-px rounded-[10px] top-0 w-[1123px]" data-name="Button">
              <div aria-hidden="true" className="absolute border border-[#0b64f4] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
              <Container2 additionalClassNames="w-[96.391px]">
                <Container additionalClassNames="bg-[#0b64f4] rounded-[16777200px] size-[32px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.1504px] whitespace-nowrap">2</p>
                </Container>
                <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[26px] not-italic text-[#131720] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Details</p>
                  </div>
                </div>
              </Container2>
              <Container additionalClassNames="size-[20px]">
                <Icon>
                  <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #66758A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </Icon>
              </Container>
            </div>
          </div>
        </div>
        <div className="h-[66px] relative shrink-0 w-[1123px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute bg-[#f5f7fa] content-stretch flex h-[66px] items-center justify-between left-0 opacity-60 px-[17px] py-px rounded-[10px] top-0 w-[1123px]" data-name="Button">
              <div aria-hidden="true" className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <Container2 additionalClassNames="w-[190.5px]">
                <Container additionalClassNames="bg-[#e0e5eb] rounded-[16777200px] size-[32px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#66758a] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">3</p>
                </Container>
                <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[73px] not-italic text-[#66758a] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">{`Events & Attributes`}</p>
                  </div>
                </div>
              </Container2>
              <div className="shrink-0 size-[20px]" data-name="Container" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
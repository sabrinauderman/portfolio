import clsx from "clsx";
import svgPaths from "./svg-xiuottjrqe";
import imgText from "@/assets/73278865dc6a2cc9a03fd1463d7b140d53ca4241.png";
import imgText1 from "@/assets/bb0622bf516e104c0fcfd037c7c8c1c7e0e0159b.png";

function Container1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[32px] relative shrink-0 w-[190.5px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[70px] relative shrink-0 w-[1073px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
        {children}
      </div>
    </div>
  );
}

function Button1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f9fbfc] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[1073px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[156px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        {children}
      </svg>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div
      className={clsx(
        "relative rounded-[16777200px] shrink-0 size-[32px]",
        additionalClassNames,
      )}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("relative shrink-0 w-[1073px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        {children}
      </div>
    </div>
  );
}

function Text({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames="h-[16px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#66758a] text-[12px] top-px tracking-[0.6px] uppercase whitespace-nowrap">
        {children}
      </p>
    </Wrapper1>
  );
}

function Label({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames="h-[20px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#131720] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">
        {children}
      </p>
    </Wrapper1>
  );
}

function Button({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f9fbfc] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full">
      <div
        aria-hidden="true"
        className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames="h-[20px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#131720] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">
        {children}
      </p>
    </Wrapper1>
  );
}
type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
  return (
    <Wrapper2 additionalClassNames="bg-[#e0e5eb]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#66758a] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">
        {text}
      </p>
    </Wrapper2>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#66758a] text-[12px] top-px whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#131720] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
type TextInputTextProps = {
  text: string;
};

function TextInputText({ text }: TextInputTextProps) {
  return (
    <div className="bg-[#f9fbfc] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[1073px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#171717] text-[14px] tracking-[-0.1504px] whitespace-nowrap">
            {text}
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </div>
  );
}

function TextImage() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[32px]">
      <img
        alt=""
        className="privacy-blur absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
        src={imgText1}
      />
    </div>
  );
}
type LabelText1Props = {
  text: string;
};

function LabelText1({ text }: LabelText1Props) {
  return (
    <Wrapper>
      <span className="leading-[20px]">{text}</span>
      <span className="leading-[20px] text-[#dc2828]">{` `}</span>
    </Wrapper>
  );
}

function Icon() {
  return (
    <Wrapper3>
      <g id="Icon" opacity="0.5">
        <path
          d="M4 6L8 10L12 6"
          id="Vector"
          stroke="var(--stroke-0, #131720)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
    </Wrapper3>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
  blurName?: boolean;
};

function TextText({
  text,
  additionalClassNames = "",
  blurName,
}: TextTextProps) {
  return (
    <div
      className={clsx(
        "content-stretch flex items-center justify-between relative shrink-0",
        additionalClassNames,
      )}
    >
      <p
        className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#131720] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap ${blurName ? "privacy-blur" : ""}`}
      >
        {text}
      </p>
    </div>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <Wrapper>
      <span className="leading-[20px]">{text}</span>
      <span className="leading-[20px] text-[#dc2828]">{` *`}</span>
    </Wrapper>
  );
}

export default function BasicInfoContextCreate() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-name="Basic Info - Context Create"
    >
      <div
        className="bg-[#f9fbfc] h-[1858px] relative shrink-0 w-full"
        data-name="T0"
      >
        <div className="content-stretch flex flex-col gap-[32px] items-start pt-[32px] px-[24px] relative size-full">
          <div
            className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full"
            data-name="Container"
          >
            <div
              className="content-stretch flex h-[36px] items-start relative shrink-0 w-full"
              data-name="Heading 1"
            >
              <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#131720] text-[30px] tracking-[0.3955px]">
                Create Tracking Update
              </p>
            </div>
            <div
              className="h-[24px] relative shrink-0 w-full"
              data-name="Paragraph"
            >
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#66758a] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">
                Fill in the details below to create a new tracking update
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[16px] h-[1694px] items-start relative shrink-0 w-full"
            data-name="Container"
          >
            <div
              className="h-[1256px] relative shrink-0 w-[1123px]"
              data-name="Container"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <div
                  className="absolute bg-white content-stretch flex flex-col h-[1170px] items-start left-0 p-px rounded-[10px] top-[74px] w-[1123px]"
                  data-name="Container"
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]"
                  />
                  <div
                    className="h-[1168px] relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div className="content-stretch flex flex-col gap-[24px] items-start pl-[24px] py-[24px] relative size-full">
                      <Container>
                        <LabelText text="Game" />
                        <Button1>
                          <Wrapper4>
                            <div className="content-stretch flex items-center justify-between relative shrink-0 w-[156px]">
                              <div
                                className="relative rounded-[20px] shrink-0 size-[32px]"
                                data-name="Text"
                              >
                                <img
                                  alt=""
                                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
                                  src={imgText}
                                />
                              </div>
                              <TextText
                                text="Mini Ants Empire"
                                additionalClassNames="w-[117px]"
                              />
                            </div>
                          </Wrapper4>
                          <Icon />
                        </Button1>
                      </Container>
                      <div className="relative shrink-0">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative">
                          <div
                            className="content-stretch flex flex-col gap-[10px] h-[70px] items-start relative shrink-0 w-[524px]"
                            data-name="Container"
                          >
                            <LabelText1 text="Dev Assignee" />
                            <Button>
                              <Wrapper4>
                                <div className="content-stretch flex items-center relative shrink-0 w-[156px]">
                                  <TextImage />
                                  <TextText
                                    text="Taoufik Kibba"
                                    additionalClassNames="w-[104px]"
                                    blurName={true}
                                  />
                                </div>
                              </Wrapper4>
                              <Icon />
                            </Button>
                          </div>
                          <div
                            className="content-stretch flex flex-col gap-[10px] h-[70px] items-start relative shrink-0 w-[524px]"
                            data-name="Container"
                          >
                            <LabelText1 text="QA Assignee" />
                            <Button>
                              <Wrapper4>
                                <div className="content-stretch flex items-center relative shrink-0 w-[156px]">
                                  <TextImage />
                                  <TextText
                                    text="Taoufik Kibba"
                                    additionalClassNames="w-[104px]"
                                    blurName={true}
                                  />
                                </div>
                              </Wrapper4>
                              <Icon />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Container>
                        <Label>{`Planned Version `}</Label>
                        <TextInputText text="3.1.0" />
                      </Container>
                      <Container>
                        <Label>Priority</Label>
                        <Button1>
                          <div
                            className="bg-[#fee2e2] h-[20px] relative rounded-[8px] shrink-0 w-[77.141px]"
                            data-name="Text"
                          >
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] py-[2px] relative size-full">
                              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#dc2828] text-[12px] text-center whitespace-nowrap">
                                0 - Critical
                              </p>
                            </div>
                          </div>
                          <Icon />
                        </Button1>
                      </Container>
                      <div
                        className="flex-[1_0_0] min-h-px min-w-px relative w-[1073px]"
                        data-name="Container"
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <div
                            className="absolute h-[20px] left-0 top-0 w-[1073px]"
                            data-name="Label"
                          >
                            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#131720] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">
                              <span className="leading-[20px]">{`Update Type `}</span>
                              <span className="leading-[20px] text-[#dc2828]">
                                *
                              </span>
                            </p>
                          </div>
                          <div
                            className="absolute content-stretch flex flex-col gap-[8px] h-[100px] items-start left-0 top-[30px] w-[1073px]"
                            data-name="Container"
                          >
                            <Text>Event</Text>
                            <div
                              className="flex-[1_0_0] min-h-px min-w-px relative w-[1073px]"
                              data-name="Container"
                            >
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <div
                                  className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[76px] items-start left-0 pb-[2px] pt-[18px] px-[18px] rounded-[10px] top-0 w-[349.664px]"
                                  data-name="Button"
                                >
                                  <div
                                    aria-hidden="true"
                                    className="absolute border-2 border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]"
                                  />
                                  <ContainerText text="Event: Create" />
                                  <ContainerText1 text="Create a new event with attributes and triggers" />
                                </div>
                                <div
                                  className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[76px] items-start left-[361.66px] pb-[2px] pt-[18px] px-[18px] rounded-[10px] top-0 w-[349.664px]"
                                  data-name="Button"
                                >
                                  <div
                                    aria-hidden="true"
                                    className="absolute border-2 border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]"
                                  />
                                  <ContainerText text="Event: Edit" />
                                  <ContainerText1 text="Add/remove attributes or modify triggers" />
                                </div>
                                <div
                                  className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[76px] items-start left-[723.33px] pb-[2px] pt-[18px] px-[18px] rounded-[10px] top-0 w-[349.664px]"
                                  data-name="Button"
                                >
                                  <div
                                    aria-hidden="true"
                                    className="absolute border-2 border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]"
                                  />
                                  <ContainerText text="Event: Archive" />
                                  <ContainerText1 text="Archive and stop tracking an event" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute content-stretch flex flex-col gap-[8px] h-[100px] items-start left-0 top-[156px] w-[1073px]"
                            data-name="Container"
                          >
                            <Text>{`Quality & Fixes`}</Text>
                            <div
                              className="flex-[1_0_0] min-h-px min-w-px relative w-[1073px]"
                              data-name="Container"
                            >
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <div
                                  className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[76px] items-start left-0 pb-[2px] pt-[18px] px-[18px] rounded-[10px] top-0 w-[349.664px]"
                                  data-name="Button"
                                >
                                  <div
                                    aria-hidden="true"
                                    className="absolute border-2 border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]"
                                  />
                                  <ContainerText text="DQA - Existing Systems" />
                                  <ContainerText1 text="Data quality assurance for current tracking" />
                                </div>
                                <div
                                  className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[76px] items-start left-[361.66px] pb-[2px] pt-[18px] px-[18px] rounded-[10px] top-0 w-[349.664px]"
                                  data-name="Button"
                                >
                                  <div
                                    aria-hidden="true"
                                    className="absolute border-2 border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]"
                                  />
                                  <ContainerText text="Bug Fix" />
                                  <ContainerText1 text="Fix tracking implementation issues" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute content-stretch flex flex-col gap-[8px] h-[116px] items-start left-0 top-[282px] w-[1073px]"
                            data-name="Container"
                          >
                            <Wrapper1 additionalClassNames="h-[16px]">
                              <div
                                className="absolute h-[16px] left-0 top-0 w-[62.25px]"
                                data-name="Text"
                              >
                                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#66758a] text-[12px] top-px tracking-[0.6px] uppercase whitespace-nowrap">
                                  Context
                                </p>
                              </div>
                              <div
                                className="absolute content-stretch flex flex-col items-start left-[68.25px] size-[14px] top-px"
                                data-name="Container"
                              >
                                <div
                                  className="h-[14px] overflow-clip relative shrink-0 w-full"
                                  data-name="Icon"
                                >
                                  <div
                                    className="absolute inset-[8.33%]"
                                    data-name="Vector"
                                  >
                                    <div className="absolute inset-[-5%]">
                                      <svg
                                        className="block size-full"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 12.8333 12.8333"
                                      >
                                        <path
                                          d={svgPaths.p13f5b400}
                                          id="Vector"
                                          stroke="var(--stroke-0, #66758A)"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="1.16667"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div
                                    className="absolute bottom-[33.33%] left-1/2 right-1/2 top-1/2"
                                    data-name="Vector"
                                  >
                                    <div className="absolute inset-[-25%_-0.58px]">
                                      <svg
                                        className="block size-full"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 1.16667 3.5"
                                      >
                                        <path
                                          d="M0.583333 2.91667V0.583333"
                                          id="Vector"
                                          stroke="var(--stroke-0, #66758A)"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="1.16667"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div
                                    className="absolute bottom-[66.67%] left-1/2 right-[49.96%] top-[33.33%]"
                                    data-name="Vector"
                                  >
                                    <div className="absolute inset-[-0.58px]">
                                      <svg
                                        className="block size-full"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 1.1725 1.16667"
                                      >
                                        <path
                                          d="M0.583333 0.583333H0.589167"
                                          id="Vector"
                                          stroke="var(--stroke-0, #66758A)"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="1.16667"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Wrapper1>
                            <div
                              className="flex-[1_0_0] min-h-px min-w-px relative w-[1073px]"
                              data-name="Container"
                            >
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <div
                                  className="absolute bg-[#f0f7ff] content-stretch flex flex-col gap-[4px] h-[92px] items-start left-0 pb-[2px] pt-[18px] px-[18px] rounded-[10px] top-0 w-[349.664px]"
                                  data-name="Button"
                                >
                                  <div
                                    aria-hidden="true"
                                    className="absolute border-2 border-[#0b64f4] border-solid inset-0 pointer-events-none rounded-[10px]"
                                  />
                                  <ContainerText text="Context: Create" />
                                  <div
                                    className="h-[32px] relative shrink-0 w-full"
                                    data-name="Container"
                                  >
                                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#66758a] text-[12px] top-px w-[262px]">
                                      Create a new feature context with events
                                      and attributes
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[92px] items-start left-[361.66px] pb-[2px] pt-[26px] px-[18px] rounded-[10px] top-0 w-[349.664px]"
                                  data-name="Button"
                                >
                                  <div
                                    aria-hidden="true"
                                    className="absolute border-2 border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]"
                                  />
                                  <ContainerText text="Context: Edit" />
                                  <ContainerText1 text="Modify existing feature or global context" />
                                </div>
                                <div
                                  className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[92px] items-start left-[723.33px] pb-[2px] pt-[26px] px-[18px] rounded-[10px] top-0 w-[349.664px]"
                                  data-name="Button"
                                >
                                  <div
                                    aria-hidden="true"
                                    className="absolute border-2 border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]"
                                  />
                                  <ContainerText text="Context: Archive" />
                                  <ContainerText1 text="Archive and remove a context from tracking" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Container>
                        <Wrapper>
                          <span className="leading-[20px]">{`Update Reason `}</span>
                          <span className="leading-[20px] text-[#dc2828]">
                            *
                          </span>
                        </Wrapper>
                        <TextInputText text="Create New Context" />
                      </Container>
                      <Container>
                        <LabelText text="Group" />
                        <Button1>
                          <div
                            className="h-[20px] relative shrink-0 w-[25.148px]"
                            data-name="Text"
                          >
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[13px] not-italic text-[#131720] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">
                                Ads
                              </p>
                            </div>
                          </div>
                          <Icon />
                        </Button1>
                      </Container>
                      <Container>
                        <LabelText text="Source" />
                        <Button1>
                          <div
                            className="h-[20px] relative shrink-0 w-[93.266px]"
                            data-name="Text"
                          >
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[47px] not-italic text-[#131720] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">
                                Game Custom
                              </p>
                            </div>
                          </div>
                          <Icon />
                        </Button1>
                      </Container>
                      <div
                        className="h-[40px] relative shrink-0 w-[1073px]"
                        data-name="Container"
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end relative size-full">
                          <div
                            className="bg-[#0b64f4] h-[40px] relative rounded-[8px] shrink-0 w-[91.563px]"
                            data-name="Button"
                          >
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[46px] not-italic text-[14px] text-center text-white top-[10.5px] tracking-[-0.1504px] whitespace-nowrap">
                                Continue
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bg-white border border-[#e0e5eb] border-solid h-[66px] left-0 rounded-[10px] top-0 w-[1123px]"
                  data-name="Button"
                >
                  <div
                    className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[16px] top-[16px] w-[176.773px]"
                    data-name="Container"
                  >
                    <Wrapper2 additionalClassNames="bg-[#0b64f4]">
                      <Wrapper3>
                        <g id="Icon">
                          <path
                            d={svgPaths.p39be50}
                            id="Vector"
                            stroke="var(--stroke-0, white)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                        </g>
                      </Wrapper3>
                    </Wrapper2>
                    <div
                      className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative"
                      data-name="Text"
                    >
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[66.5px] not-italic text-[#131720] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">
                          Basic Information
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute content-stretch flex items-center justify-center left-[1085px] size-[20px] top-[22px]"
                    data-name="Container"
                  >
                    <div
                      className="relative shrink-0 size-[20px]"
                      data-name="Icon"
                    >
                      <svg
                        className="absolute block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 20 20"
                      >
                        <g id="Icon">
                          <path
                            d="M5 7.5L10 12.5L15 7.5"
                            id="Vector"
                            stroke="var(--stroke-0, #66758A)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.66667"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="absolute h-[24px] left-[504.58px] top-[20px] w-[111.836px]"
                    data-name="Container"
                  >
                    <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[56.5px] not-italic text-[#4a5568] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">
                      Context: Create
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-[66px] relative shrink-0 w-[1123px]"
              data-name="Container"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <div
                  className="absolute bg-[#f5f7fa] content-stretch flex h-[66px] items-center justify-between left-0 opacity-60 px-[17px] py-px rounded-[10px] top-0 w-[1123px]"
                  data-name="Button"
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]"
                  />
                  <Container1>
                    <ContainerText2 text="2" />
                    <div
                      className="h-[24px] relative shrink-0 w-[118px]"
                      data-name="Text"
                    >
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[23px] not-italic text-[#66758a] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">
                          Details
                        </p>
                      </div>
                    </div>
                  </Container1>
                  <div className="shrink-0 size-[20px]" data-name="Container" />
                </div>
              </div>
            </div>
            <div
              className="h-[66px] relative shrink-0 w-[1123px]"
              data-name="Container"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <div
                  className="absolute bg-[#f5f7fa] content-stretch flex h-[66px] items-center justify-between left-0 opacity-60 px-[17px] py-px rounded-[10px] top-0 w-[1123px]"
                  data-name="Button"
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#e0e5eb] border-solid inset-0 pointer-events-none rounded-[10px]"
                  />
                  <Container1>
                    <ContainerText2 text="3" />
                    <div
                      className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative"
                      data-name="Text"
                    >
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[73px] not-italic text-[#66758a] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">{`Events & Attributes`}</p>
                      </div>
                    </div>
                  </Container1>
                  <div className="shrink-0 size-[20px]" data-name="Container" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

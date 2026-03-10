import React from "react";

import clsx from "clsx";
import svgPaths from "./svg-l0buoxfa1f";
import imgSabrina from "@/assets/f91297a2be5d7c5447fd32ef8243483fe0075623.png";
import imgText from "@/assets/bb0622bf516e104c0fcfd037c7c8c1c7e0e0159b.png";

function Container4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="content-stretch flex flex-col items-start pb-[16px] pt-[8px] px-[16px] relative size-full">
        {children}
      </div>
    </div>
  );
}

function Container3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="content-stretch flex flex-col items-start pb-[11.98px] pt-[3.25px] relative size-full">
        {children}
      </div>
    </div>
  );
}

function Container2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="content-stretch flex flex-col gap-[0.75px] items-start pt-[3.25px] relative size-full">
        {children}
      </div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div
      className={clsx(
        "content-stretch flex flex-col items-start relative shrink-0 w-full",
        additionalClassNames,
      )}
    >
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[16px] w-full">
        {children}
      </div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div
      className={clsx(
        "max-w-[1334px] relative rounded-[16px] shrink-0",
        additionalClassNames,
      )}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] pb-[6.7px] pt-[6.71px] relative">
        {children}
      </div>
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
    <div className={clsx("size-[24px]", additionalClassNames)}>
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        {children}
      </div>
    </div>
  );
}

function Heading3Button({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[16px] relative w-full">
        {children}
      </div>
    </Wrapper1>
  );
}

function Container1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[21px] py-[8px] relative w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <Wrapper2 additionalClassNames={additionalClassNames}>
      <g id="SVG">{children}</g>
    </Wrapper2>
  );
}
type Row19Props = {
  additionalClassNames?: string;
};

function Row19({ additionalClassNames = "" }: Row19Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <DataText text="resource_receive" additionalClassNames="w-[154.85px]" />
      <DataText
        text="6bb99c7b3394070b129a6ac1af6d9ded"
        additionalClassNames="w-[302.88px]"
      />
      <DataText text="07:22:48.418" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
      />
      <DataText text="3.0.0" additionalClassNames="w-[105.09px]" />
      <DataText text="building_level_up" additionalClassNames="w-[271.53px]" />
      <DataText
        text="building.upgrade_c1_resource1_1_quantity"
        additionalClassNames="w-[335.19px]"
      />
    </div>
  );
}
type Row18Props = {
  additionalClassNames?: string;
};

function Row18({ additionalClassNames = "" }: Row18Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <Text2 text="resource_receive" additionalClassNames="w-[154.85px]" />
      <Text2
        text="6bb99c7b3394070b129a6ac1af6d9ded"
        additionalClassNames="w-[302.88px]"
      />
      <Text2 text="07:22:49.350" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
      />
      <Text2 text="3.0.0" additionalClassNames="w-[105.09px]" />
      <Text2 text="building_level_up" additionalClassNames="w-[271.53px]" />
      <Text2
        text="building.upgrade_c1_resource1_1_quantity"
        additionalClassNames="w-[335.19px]"
      />
    </div>
  );
}
type Row17Props = {
  additionalClassNames?: string;
};

function Row17({ additionalClassNames = "" }: Row17Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <Text2 text="resource_spend" additionalClassNames="w-[154.85px]" />
      <Text2
        text="6bb99c7b3394070b129a6ac1af6d9ded"
        additionalClassNames="w-[302.88px]"
      />
      <Text2 text="07:22:49.350" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
      />
      <Text2 text="3.0.0" additionalClassNames="w-[105.09px]" />
      <Text2
        text="building_c1_resource1_1_quantity"
        additionalClassNames="w-[271.53px]"
      />
      <Text2 text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type Row16Props = {
  additionalClassNames?: string;
};

function Row16({ additionalClassNames = "" }: Row16Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <DataText text="resource_receive" additionalClassNames="w-[154.85px]" />
      <DataText
        text="6bb99c7b3394070b129a6ac1af6d9ded"
        additionalClassNames="w-[302.88px]"
      />
      <DataText text="07:22:49.350" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
      />
      <DataText text="3.0.0" additionalClassNames="w-[105.09px]" />
      <DataText text="building_level_up" additionalClassNames="w-[271.53px]" />
      <DataText
        text="building.upgrade_c1_resource1_1_quantity"
        additionalClassNames="w-[335.19px]"
      />
    </div>
  );
}
type Row15Props = {
  additionalClassNames?: string;
};

function Row15({ additionalClassNames = "" }: Row15Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <DataText text="resource_spend" additionalClassNames="w-[154.85px]" />
      <DataText
        text="6bb99c7b3394070b129a6ac1af6d9ded"
        additionalClassNames="w-[302.88px]"
      />
      <DataText text="07:22:49.350" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
      />
      <DataText text="3.0.0" additionalClassNames="w-[105.09px]" />
      <DataText
        text="building_c1_resource1_1_quantity"
        additionalClassNames="w-[271.53px]"
      />
      <DataText text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type Row14Props = {
  additionalClassNames?: string;
};

function Row14({ additionalClassNames = "" }: Row14Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <DataText text="resource_receive" additionalClassNames="w-[154.85px]" />
      <DataText
        text="6bb99c7b3394070b129a6ac1af6d9ded"
        additionalClassNames="w-[302.88px]"
      />
      <DataText text="07:22:49.350" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
      />
      <DataText text="3.0.0" additionalClassNames="w-[105.09px]" />
      <DataText text="building_level_up" additionalClassNames="w-[271.53px]" />
      <DataText
        text="building.upgrade_c1_resource1_1_quantity"
        additionalClassNames="w-[335.19px]"
      />
    </div>
  );
}
type Row13Props = {
  additionalClassNames?: string;
};

function Row13({ additionalClassNames = "" }: Row13Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <DataText text="resource_spend" additionalClassNames="w-[154.85px]" />
      <DataText
        text="6bb99c7b3394070b129a6ac1af6d9ded"
        additionalClassNames="w-[302.88px]"
      />
      <DataText text="07:22:49.350" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
      />
      <DataText text="3.0.0" additionalClassNames="w-[105.09px]" />
      <DataText
        text="building_c1_resource1_1_quantity"
        additionalClassNames="w-[271.53px]"
      />
      <DataText text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type Row12Props = {
  additionalClassNames?: string;
};

function Row12({ additionalClassNames = "" }: Row12Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <DataText text="resource_receive" additionalClassNames="w-[154.85px]" />
      <DataText
        text="9475f1c3debda03ee3607561b910f292"
        additionalClassNames="w-[302.88px]"
      />
      <DataText text="08:16:06.592" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
      />
      <DataText text="3.0.0" additionalClassNames="w-[105.09px]" />
      <DataText
        text="building_decomposition"
        additionalClassNames="w-[271.53px]"
      />
      <DataText text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type Row11Props = {
  additionalClassNames?: string;
};

function Row11({ additionalClassNames = "" }: Row11Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <Text2 text="resource_receive" additionalClassNames="w-[154.85px]" />
      <Text2
        text="9475f1c3debda03ee3607561b910f292"
        additionalClassNames="w-[302.88px]"
      />
      <Text2 text="08:16:09.261" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
      />
      <Text2 text="3.0.0" additionalClassNames="w-[105.09px]" />
      <Text2
        text="building_decomposition"
        additionalClassNames="w-[271.53px]"
      />
      <Text2 text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type Row10Props = {
  additionalClassNames?: string;
};

function Row10({ additionalClassNames = "" }: Row10Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <DataText text="resource_receive" additionalClassNames="w-[154.85px]" />
      <DataText
        text="9475f1c3debda03ee3607561b910f292"
        additionalClassNames="w-[302.88px]"
      />
      <DataText text="08:16:13.837" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
      />
      <DataText text="3.0.0" additionalClassNames="w-[105.09px]" />
      <DataText
        text="building_decomposition"
        additionalClassNames="w-[271.53px]"
      />
      <DataText text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type Row9Props = {
  additionalClassNames?: string;
};

function Row9({ additionalClassNames = "" }: Row9Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <DataText text="resource_receive" additionalClassNames="w-[154.85px]" />
      <DataText
        text="9475f1c3debda03ee3607561b910f292"
        additionalClassNames="w-[302.88px]"
      />
      <DataText text="08:16:13.837" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
      />
      <DataText text="3.0.0" additionalClassNames="w-[105.09px]" />
      <DataText
        text="building_decomposition"
        additionalClassNames="w-[271.53px]"
      />
      <DataText text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type Data4Props = {
  additionalClassNames?: string;
};

function Data4({ additionalClassNames = "" }: Data4Props) {
  return (
    <div
      className={clsx(
        "content-stretch flex flex-col items-start px-[16px] relative shrink-0 w-[271.53px]",
        additionalClassNames,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="max-w-[1302px] relative rounded-[16px] shrink-0">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(211,47,47,0.7)] border-solid inset-0 pointer-events-none rounded-[16px]"
        />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] pb-[6.71px] pt-[6.7px] px-px relative">
          <ContainerText4 text="No data" />
        </div>
      </div>
    </div>
  );
}
type Row8Props = {
  additionalClassNames?: string;
};

function Row8({ additionalClassNames = "" }: Row8Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <DataText text="resource_receive" additionalClassNames="w-[154.85px]" />
      <DataText
        text="9475f1c3debda03ee3607561b910f292"
        additionalClassNames="w-[302.88px]"
      />
      <DataText text="08:17:03.744" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
      />
      <DataText text="3.0.0" additionalClassNames="w-[105.09px]" />
      <DataText
        text="building_decomposition"
        additionalClassNames="w-[271.53px]"
      />
      <DataText text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type Row7Props = {
  additionalClassNames?: string;
};

function Row7({ additionalClassNames = "" }: Row7Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <DataText text="resource_receive" additionalClassNames="w-[154.85px]" />
      <DataText
        text="9475f1c3debda03ee3607561b910f292"
        additionalClassNames="w-[302.88px]"
      />
      <DataText text="08:17:04.965" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
      />
      <DataText text="3.0.0" additionalClassNames="w-[105.09px]" />
      <DataText
        text="building_decomposition"
        additionalClassNames="w-[271.53px]"
      />
      <DataText text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[21.02px] pt-[20.01px] px-[16px] relative shrink-0 w-[271.53px]">
      <div
        aria-hidden="true"
        className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="max-w-[1302px] relative rounded-[16px] shrink-0">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(211,47,47,0.7)] border-solid inset-0 pointer-events-none rounded-[16px]"
        />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] pb-[6.7px] pt-[6.71px] px-px relative">
          <ContainerText4 text="No data" />
        </div>
      </div>
    </div>
  );
}
type ContainerText4Props = {
  text: string;
};

function ContainerText4({ text }: ContainerText4Props) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip px-[11px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d32f2f] text-[13px] whitespace-nowrap">
          <p className="leading-[18.59px]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type Row6Props = {
  additionalClassNames?: string;
};

function Row6({ additionalClassNames = "" }: Row6Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <Text2 text="resource_receive" additionalClassNames="w-[154.85px]" />
      <Text2
        text="9475f1c3debda03ee3607561b910f292"
        additionalClassNames="w-[302.88px]"
      />
      <Text2 text="08:17:44.575" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
      />
      <Text2 text="3.0.0" additionalClassNames="w-[105.09px]" />
      <Text2
        text="building_decomposition"
        additionalClassNames="w-[271.53px]"
      />
      <Text2 text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type Row5Props = {
  additionalClassNames?: string;
};

function Row5({ additionalClassNames = "" }: Row5Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <DataText text="resource_receive" additionalClassNames="w-[154.85px]" />
      <DataText
        text="9475f1c3debda03ee3607561b910f292"
        additionalClassNames="w-[302.88px]"
      />
      <DataText text="08:17:49.865" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
      />
      <DataText text="3.0.0" additionalClassNames="w-[105.09px]" />
      <DataText
        text="building_decomposition"
        additionalClassNames="w-[271.53px]"
      />
      <DataText text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type Row4Props = {
  additionalClassNames?: string;
};

function Row4({ additionalClassNames = "" }: Row4Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <Text2 text="resource_receive" additionalClassNames="w-[154.85px]" />
      <Text2
        text="9475f1c3debda03ee3607561b910f292"
        additionalClassNames="w-[302.88px]"
      />
      <Text2 text="08:17:54.590" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
      />
      <Text2 text="3.0.0" additionalClassNames="w-[105.09px]" />
      <Text2
        text="building_decomposition"
        additionalClassNames="w-[271.53px]"
      />
      <Text2 text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type Row3Props = {
  additionalClassNames?: string;
};

function Row3({ additionalClassNames = "" }: Row3Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <DataText text="resource_receive" additionalClassNames="w-[154.85px]" />
      <DataText
        text="9475f1c3debda03ee3607561b910f292"
        additionalClassNames="w-[302.88px]"
      />
      <DataText text="08:17:54.590" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
      />
      <DataText text="3.0.0" additionalClassNames="w-[105.09px]" />
      <DataText
        text="building_decomposition"
        additionalClassNames="w-[271.53px]"
      />
      <DataText text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type Row2Props = {
  additionalClassNames?: string;
};

function Row2({ additionalClassNames = "" }: Row2Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <DataText text="resource_receive" additionalClassNames="w-[154.85px]" />
      <DataText
        text="9475f1c3debda03ee3607561b910f292"
        additionalClassNames="w-[302.88px]"
      />
      <DataText text="08:18:16.528" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
      />
      <DataText text="3.0.0" additionalClassNames="w-[105.09px]" />
      <DataText
        text="building_decomposition"
        additionalClassNames="w-[271.53px]"
      />
      <DataText text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type Row1Props = {
  additionalClassNames?: string;
};

function Row1({ additionalClassNames = "" }: Row1Props) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <Text2 text="resource_receive" additionalClassNames="w-[154.85px]" />
      <Text2
        text="9475f1c3debda03ee3607561b910f292"
        additionalClassNames="w-[302.88px]"
      />
      <Text2 text="08:18:16.528" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
      />
      <Text2 text="3.0.0" additionalClassNames="w-[105.09px]" />
      <Text2
        text="building_decomposition"
        additionalClassNames="w-[271.53px]"
      />
      <Text2 text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type RowProps = {
  additionalClassNames?: string;
};

function Row({ additionalClassNames = "" }: RowProps) {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <DataText text="resource_receive" additionalClassNames="w-[154.85px]" />
      <DataText
        text="9475f1c3debda03ee3607561b910f292"
        additionalClassNames="w-[302.88px]"
      />
      <DataText text="08:18:16.528" additionalClassNames="w-[116.9px]" />
      <Data2
        text="madbox.idle-"
        text1="ants-2"
        additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
      />
      <DataText text="3.0.0" additionalClassNames="w-[105.09px]" />
      <DataText
        text="building_decomposition"
        additionalClassNames="w-[271.53px]"
      />
      <DataText text="currencies.food" additionalClassNames="w-[335.19px]" />
    </div>
  );
}
type Data2Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Data2({ text, text1, additionalClassNames = "" }: Data2Props) {
  return (
    <div
      className={clsx(
        "content-stretch flex flex-col items-start px-[16px] relative shrink-0",
        additionalClassNames,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[20.02px] not-italic relative shrink-0 text-[#252c32] text-[14px] whitespace-nowrap">
        <p className="mb-0">{text}</p>
        <p>{text1}</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[21.42px] pt-[20.41px] px-[16px] relative shrink-0 w-[99.55px]">
      <div
        aria-hidden="true"
        className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
      />
      <Wrapper3 additionalClassNames="bg-[#9c27b0]">
        <ContainerText1 text="string" />
      </Wrapper3>
    </div>
  );
}
type Text4Props = {
  text: string;
  additionalClassNames?: string;
};

function Text4({ text, additionalClassNames = "" }: Text4Props) {
  return (
    <div
      className={clsx(
        "content-stretch flex flex-col items-start pb-[27.18px] pt-[25.65px] px-[16px] relative shrink-0",
        additionalClassNames,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[14px] whitespace-nowrap">
        <p className="leading-[20.02px]">{text}</p>
      </div>
    </div>
  );
}
type Text3Props = {
  text: string;
  additionalClassNames?: string;
};

function Text3({ text, additionalClassNames = "" }: Text3Props) {
  return (
    <div
      className={clsx(
        "content-stretch flex flex-col items-start pb-[27.17px] pt-[25.66px] px-[16px] relative shrink-0",
        additionalClassNames,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[14px] whitespace-nowrap">
        <p className="leading-[20.02px]">{text}</p>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <div
      className={clsx(
        "content-stretch flex flex-col items-start pb-[26.78px] pt-[25.25px] px-[16px] relative shrink-0",
        additionalClassNames,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[14px] whitespace-nowrap">
        <p className="leading-[20.02px]">{text}</p>
      </div>
    </div>
  );
}
type DataTextProps = {
  text: string;
  additionalClassNames?: string;
};

function DataText({ text, additionalClassNames = "" }: DataTextProps) {
  return (
    <div
      className={clsx(
        "content-stretch flex flex-col items-start pb-[26.77px] pt-[25.26px] px-[16px] relative shrink-0",
        additionalClassNames,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[14px] whitespace-nowrap">
        <p className="leading-[20.02px]">{text}</p>
      </div>
    </div>
  );
}
type DataProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Data({ text, text1, additionalClassNames = "" }: DataProps) {
  return (
    <div
      className={clsx(
        "content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[16px] relative shrink-0",
        additionalClassNames,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[12px] whitespace-nowrap">
        <p className="leading-[19.92px]">{text}</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[12px] whitespace-nowrap">
        <p className="leading-[19.92px]">{text1}</p>
      </div>
    </div>
  );
}
type CellProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Cell({ text, text1, additionalClassNames = "" }: CellProps) {
  return (
    <div
      className={clsx(
        "bg-white content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[16px] shrink-0 sticky top-0",
        additionalClassNames,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#252c32] text-[14px] whitespace-nowrap">
        <p className="mb-0">{text}</p>
        <p>{text1}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={additionalClassNames}>
      <div
        aria-hidden="true"
        className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <Text1
      text={text}
      additionalClassNames={clsx(
        "bg-white content-stretch flex flex-col items-start pb-[29.25px] pt-[27.75px] px-[16px] shrink-0 sticky top-0",
        additionalClassNames,
      )}
    />
  );
}
type CellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function CellText({ text, additionalClassNames = "" }: CellTextProps) {
  return (
    <Text1
      text={text}
      additionalClassNames={clsx(
        "bg-white content-stretch flex flex-col items-start pb-[5px] pt-[4px] px-[8px] shrink-0 sticky top-0",
        additionalClassNames,
      )}
    />
  );
}

function Svg1() {
  return (
    <Wrapper additionalClassNames="relative shrink-0">
      <path
        d={svgPaths.p3053c630}
        fill="var(--fill-0, black)"
        fillOpacity="0.54"
        id="Vector"
      />
    </Wrapper>
  );
}
type ContainerText3Props = {
  text: string;
};

function ContainerText3({ text }: ContainerText3Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[16px] w-full">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}
type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[14px] w-full">
        <p className="leading-[20.02px]">{text}</p>
      </div>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[18.59px]">{text}</p>
      </div>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
  blurName?: boolean;
};

function ContainerText({ text, blurName }: ContainerTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div
        className={`flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[14px] whitespace-nowrap ${blurName ? "privacy-blur" : ""}`}
      >
        <p className="leading-[20.02px]">{text}</p>
      </div>
    </div>
  );
}
type TabTextProps = {
  text: string;
};

function TabText({ text }: TabTextProps) {
  return (
    <div className="max-w-[360px] min-h-[48px] min-w-[90px] relative self-stretch shrink-0">
      <div className="flex flex-col items-center justify-center max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-full items-center justify-center max-w-[inherit] min-h-[inherit] min-w-[inherit] px-[16px] py-[12px] relative">
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] text-center uppercase whitespace-nowrap">
            <p className="leading-[17.5px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type SvgProps = {
  additionalClassNames?: string;
};

function Svg({ additionalClassNames = "" }: SvgProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path
        d="M7 10L12 15L17 10H7Z"
        fill="var(--fill-0, black)"
        fillOpacity="0.54"
        id="Vector"
      />
    </Wrapper>
  );
}

export default function Container() {
  return (
    <div
      className="bg-white content-stretch flex isolate items-start relative size-full"
      data-name="Container"
    >
      <div
        className="h-full min-w-[82px] relative shrink-0 w-[82px] z-[2]"
        data-name="VerticalBorder"
      >
        <div className="content-stretch flex flex-col items-start min-w-[inherit] overflow-clip pr-px relative rounded-[inherit] size-full">
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-row items-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[20px] pr-[21px] py-[32px] relative w-full">
                <div
                  className="content-stretch flex items-center justify-center p-[8px] relative rounded-[20px] shrink-0"
                  data-name="Button"
                >
                  <Wrapper additionalClassNames="relative shrink-0">
                    <path
                      d={svgPaths.p1d821780}
                      fill="var(--fill-0, black)"
                      fillOpacity="0.54"
                      id="Vector"
                    />
                  </Wrapper>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[64px] relative w-full">
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-name="Container"
              >
                <Container1>
                  <div
                    className="content-stretch flex items-center justify-center p-[8px] relative rounded-[20px] shrink-0"
                    data-name="Button"
                  >
                    <div
                      className="aspect-[24/24] content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                      data-name="business-intelligence-icon.svg"
                    >
                      <div
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]"
                        data-name="business-intelligence-icon.svg fill"
                      >
                        <div
                          className="overflow-clip relative shrink-0 size-[24px]"
                          data-name="business-intelligence-icon.svg"
                        >
                          <div
                            className="absolute contents inset-[0_0.82%]"
                            data-name="Group"
                          >
                            <div
                              className="absolute inset-[0_0.82%]"
                              data-name="Group"
                            >
                              <svg
                                className="absolute block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 23.6072 24"
                              >
                                <g id="Group">
                                  <path
                                    d={svgPaths.p15678600}
                                    fill="var(--fill-0, black)"
                                    id="Vector"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container1>
                <Container1>
                  <div
                    className="content-stretch flex items-center justify-center p-[8px] relative rounded-[20px] shrink-0"
                    data-name="Button"
                  >
                    <div
                      className="aspect-[24/24] content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                      data-name="joystick.svg"
                    >
                      <div
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]"
                        data-name="joystick.svg fill"
                      >
                        <Wrapper2 additionalClassNames="relative shrink-0">
                          <g clipPath="url(#clip0_20_8441)" id="joystick.svg">
                            <path
                              d={svgPaths.pe978800}
                              fill="var(--fill-0, black)"
                              id="Vector"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_20_8441">
                              <rect fill="white" height="24" width="24" />
                            </clipPath>
                          </defs>
                        </Wrapper2>
                      </div>
                    </div>
                  </div>
                </Container1>
                <Container1>
                  <div
                    className="content-stretch flex items-center justify-center p-[8px] relative rounded-[20px] shrink-0"
                    data-name="Button"
                  >
                    <div
                      className="aspect-[24/24] content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                      data-name="shuttle.svg"
                    >
                      <div
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]"
                        data-name="shuttle.svg fill"
                      >
                        <Wrapper2 additionalClassNames="relative shrink-0">
                          <g clipPath="url(#clip0_20_8427)" id="shuttle.svg">
                            <path
                              d={svgPaths.p260f680}
                              fill="var(--fill-0, black)"
                              id="Vector"
                            />
                            <path
                              d={svgPaths.p348a13f0}
                              fill="var(--fill-0, black)"
                              id="Vector_2"
                            />
                            <path
                              d={svgPaths.p4b42400}
                              fill="var(--fill-0, black)"
                              id="Vector_3"
                            />
                            <path
                              d={svgPaths.p59d7680}
                              fill="var(--fill-0, black)"
                              id="Vector_4"
                            />
                            <path
                              d={svgPaths.p22261280}
                              fill="var(--fill-0, black)"
                              id="Vector_5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_20_8427">
                              <rect fill="white" height="24" width="24" />
                            </clipPath>
                          </defs>
                        </Wrapper2>
                      </div>
                    </div>
                  </div>
                </Container1>
                <Container1>
                  <div
                    className="content-stretch flex items-center justify-center p-[8px] relative rounded-[20px] shrink-0"
                    data-name="Button"
                  >
                    <div
                      className="aspect-[24/24] content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                      data-name="data-center.svg"
                    >
                      <div
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]"
                        data-name="data-center.svg fill"
                      >
                        <Wrapper2 additionalClassNames="relative shrink-0">
                          <g id="data-center.svg">
                            <path
                              d={svgPaths.p364ab6c0}
                              fill="var(--fill-0, black)"
                              id="Vector"
                            />
                          </g>
                        </Wrapper2>
                      </div>
                    </div>
                  </div>
                </Container1>
                <Container1>
                  <div
                    className="content-stretch flex items-center justify-center p-[8px] relative rounded-[20px] shrink-0"
                    data-name="Button"
                  >
                    <div
                      className="aspect-[24/24] content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                      data-name="settings.svg"
                    >
                      <div
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]"
                        data-name="settings.svg fill"
                      >
                        <Wrapper2 additionalClassNames="relative shrink-0">
                          <g clipPath="url(#clip0_20_8437)" id="settings.svg">
                            <path
                              d={svgPaths.p32fbe000}
                              fill="var(--fill-0, black)"
                              id="Vector"
                            />
                            <path
                              d={svgPaths.p3003b200}
                              fill="var(--fill-0, black)"
                              id="Vector_2"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_20_8437">
                              <rect fill="white" height="24" width="24" />
                            </clipPath>
                          </defs>
                        </Wrapper2>
                      </div>
                    </div>
                  </div>
                </Container1>
                <Container1>
                  <div
                    className="content-stretch flex items-center justify-center p-[8px] relative rounded-[20px] shrink-0"
                    data-name="Button"
                  >
                    <div
                      className="aspect-[24/24] content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                      data-name="user.svg"
                    >
                      <div
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]"
                        data-name="user.svg fill"
                      >
                        <Wrapper2 additionalClassNames="relative shrink-0">
                          <g id="user.svg">
                            <path
                              d={svgPaths.p36a4cec0}
                              fill="var(--fill-0, black)"
                              id="Vector"
                            />
                            <path
                              d={svgPaths.p95ae600}
                              fill="var(--fill-0, black)"
                              id="Vector_2"
                            />
                          </g>
                        </Wrapper2>
                      </div>
                    </div>
                  </div>
                </Container1>
                <Container1>
                  <div
                    className="content-stretch flex items-center justify-center p-[8px] relative rounded-[20px] shrink-0"
                    data-name="Button"
                  >
                    <div
                      className="aspect-[24/24] content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                      data-name="admin-with-cogwheels.svg"
                    >
                      <div
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]"
                        data-name="admin-with-cogwheels.svg fill"
                      >
                        <div
                          className="overflow-clip relative shrink-0 size-[24px]"
                          data-name="admin-with-cogwheels.svg"
                        >
                          <div
                            className="absolute inset-[0_5.45%]"
                            data-name="Group"
                          >
                            <svg
                              className="absolute block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 21.3861 24"
                            >
                              <g id="Group">
                                <path
                                  d={svgPaths.p1fef0380}
                                  fill="var(--fill-0, black)"
                                  id="Vector"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container1>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border-[#f5f5f5] border-r border-solid inset-0 pointer-events-none"
        />
      </div>
      <div
        className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-auto relative z-[1]"
        data-name="Container"
      >
        <div
          className="bg-[#f9fbfc] content-stretch flex flex-col items-start pb-px relative shrink-0 w-full"
          data-name="Header"
        >
          <div
            aria-hidden="true"
            className="absolute border-[#f5f5f5] border-b border-solid inset-0 pointer-events-none"
          />
          <Wrapper1>
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-h-[inherit] px-[32px] relative w-full">
              <div
                className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative"
                data-name="Container"
              >
                <div
                  className="content-stretch flex h-[50px] items-center relative shrink-0 w-full"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative"
                    data-name="Nav"
                  >
                    <div
                      className="content-center flex flex-wrap items-center relative shrink-0 w-full"
                      data-name="Ordered List"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-name="Item"
                      >
                        <div
                          className="content-stretch flex gap-[16px] items-center relative shrink-0"
                          data-name="Container"
                        >
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0"
                            data-name="Heading 6"
                          >
                            <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">
                              <p className="leading-[32px]">Realtime Debug</p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-[250px]"
                            data-name="Container"
                          >
                            <div
                              className="bg-[rgba(0,0,0,0.06)] relative rounded-[4px] shrink-0 w-full"
                              data-name="Overlay"
                            >
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[65px] py-px relative w-full">
                                  <div
                                    className="content-stretch flex flex-col h-[40px] items-start min-w-[30px] overflow-clip py-[8.5px] relative shrink-0 w-[173px]"
                                    data-name="Combobox"
                                  >
                                    <Wrapper4 additionalClassNames="overflow-auto">
                                      <p className="leading-[23px]">
                                        Mini Ants Empire
                                      </p>
                                    </Wrapper4>
                                  </div>
                                  <div
                                    className="absolute bottom-[16.67%] content-stretch flex flex-col items-start pl-[26px] right-[7px] top-[16.67%]"
                                    data-name="Container"
                                  >
                                    <div
                                      className="content-stretch flex items-center justify-center p-[2px] relative rounded-[14px] shrink-0"
                                      data-name="Button - Open"
                                    >
                                      <Svg additionalClassNames="relative shrink-0" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex items-center justify-center p-[5px] relative rounded-[25px] shrink-0"
                    data-name="Button"
                  >
                    <div
                      className="content-stretch flex items-start relative shrink-0"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex items-center justify-center overflow-clip relative rounded-[20px] shrink-0 size-[40px]"
                        data-name="Container"
                      >
                        <div
                          className="flex-[1_0_0] h-full min-h-px min-w-px relative"
                          data-name="Sabrina"
                        >
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img
                              alt=""
                              className="privacy-blur absolute h-[150%] left-0 max-w-none top-[-25%] w-full"
                              src={imgSabrina}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex h-[49px] items-start max-w-[1366px] min-h-[48px] overflow-clip relative shrink-0"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start overflow-x-auto overflow-y-clip relative self-stretch shrink-0 w-[399px]"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex h-[48px] items-start relative shrink-0 w-full"
                        data-name="Tablist"
                      >
                        <TabText text="Realtime debug dashboard" />
                        <TabText text="Tracking process" />
                      </div>
                      <div
                        className="bg-[rgba(0,0,0,0.6)] h-px shrink-0 w-full"
                        data-name="Horizontal Divider"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper1>
        </div>
        <div
          className="h-[529px] relative shrink-0 w-full"
          data-name="Container"
        >
          <div
            className="absolute content-stretch flex gap-[876.92px] items-center left-[32px] right-[32px] top-[16px]"
            data-name="Container"
          >
            <div
              className="content-stretch flex items-center pr-[8px] relative shrink-0"
              data-name="Container"
            >
              <div
                className="content-stretch flex items-center justify-center p-[5px] relative rounded-[26.63px] shrink-0"
                data-name="Button"
              >
                <div className="relative shrink-0 size-[20px]" data-name="SVG">
                  <svg
                    className="absolute block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 20 20"
                  >
                    <g id="SVG">
                      <path
                        d={svgPaths.p30b85d00}
                        fill="var(--fill-0, #0288D1)"
                        id="Vector"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  className="content-stretch flex flex-col items-center relative shrink-0"
                  data-name="Container"
                >
                  <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0288d1] text-[16px] text-center whitespace-nowrap">
                    <p className="leading-[24px]">BACK</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[16px] items-center relative shrink-0"
              data-name="Container"
            >
              <ContainerText text="Status:" />
              <div
                className="content-stretch flex flex-col items-start min-w-[120px] relative shrink-0 w-[213.09px]"
                data-name="Container"
              >
                <div
                  className="bg-[#f9fbfc] content-stretch flex h-[32px] items-center justify-center relative rounded-[4px] shrink-0 w-full"
                  data-name="Background"
                >
                  <div
                    className="flex-[1_0_0] min-h-[42px] min-w-px relative"
                    data-name="Combobox listbox"
                  >
                    <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[10px] pl-[12px] pr-[38px] pt-[9px] relative w-full">
                        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[16px] w-[177px]">
                          <p className="leading-[23px]">Ready for Dev Review</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-[0.5px] left-0 opacity-0 right-0 rounded-[2.5px]"
                    data-name="Input"
                  >
                    <div className="content-stretch flex flex-col items-start overflow-clip px-[4px] py-[3px] relative rounded-[inherit] w-full">
                      <div
                        className="h-[15px] shrink-0 w-full"
                        data-name="Container"
                      />
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]"
                    />
                  </div>
                  <Svg additionalClassNames="absolute right-[7px] top-[4px]" />
                </div>
              </div>
              <div
                className="content-stretch flex items-center justify-center min-w-[64px] px-[16px] py-[6px] relative rounded-[4px] shrink-0"
                data-name="Button"
              >
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,120,29,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]"
                />
                <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff781d] text-[14px] text-center uppercase whitespace-nowrap">
                  <p className="leading-[24.5px]">Actions</p>
                </div>
                <Wrapper additionalClassNames="relative shrink-0">
                  <path
                    d={svgPaths.p3fdba000}
                    fill="var(--fill-0, #FF781D)"
                    id="Vector"
                  />
                </Wrapper>
              </div>
            </div>
          </div>
          <div
            className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[76.5px]"
            data-name="Heading 6"
          >
            <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[20px] whitespace-nowrap">
              <p className="leading-[32px]">Tracking Update Details</p>
            </div>
          </div>
          <div
            className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[116.5px]"
            data-name="Container"
          >
            <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[16px] whitespace-nowrap">
              <p className="leading-[24px]">Create New Context</p>
            </div>
          </div>
          <div
            className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[147.75px]"
            data-name="Container"
          >
            <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">
              <p className="leading-[20.02px]">
                Game: Mini Ants Empire • Created: 30/10/2025 11:38 • Last
                edited: 04/11/2025 14:37
              </p>
            </div>
          </div>
          <div
            className="absolute content-stretch flex flex-col gap-[24px] items-start left-[32px] right-[32px] top-[200.52px]"
            data-name="Container"
          >
            <div
              className="content-stretch flex gap-[32px] h-[56.41px] items-start justify-center relative shrink-0 w-full"
              data-name="Container"
            >
              <Container2>
                <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[12px] whitespace-nowrap">
                  <p className="leading-[19.92px]">PRIORITY</p>
                </div>
                <div
                  className="h-[32px] relative shrink-0 w-full"
                  data-name="Container"
                >
                  <div
                    className="absolute bg-[red] content-stretch flex items-center justify-center left-0 max-w-[247.60000610351562px] pb-[6.71px] pt-[6.7px] rounded-[16px] top-0"
                    data-name="Background"
                  >
                    <ContainerText1 text="0" />
                  </div>
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[21px] justify-center leading-[0] left-[35.22px] not-italic text-[#252c32] text-[14px] top-[15.08px] w-[57.395px]">
                    <p className="leading-[20.02px]">Critical</p>
                  </div>
                </div>
              </Container2>
              <Container3>
                <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[12px] whitespace-nowrap">
                  <p className="leading-[19.92px]">PLANNED VERSION</p>
                </div>
                <ContainerText2 text="3.1.0" />
              </Container3>
              <Container3>
                <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[12px] whitespace-nowrap">
                  <p className="leading-[19.92px]">SOURCE</p>
                </div>
                <ContainerText2 text="Game Custom" />
              </Container3>
              <Container2>
                <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[12px] whitespace-nowrap">
                  <p className="leading-[19.92px]">TYPE</p>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                  data-name="Container"
                >
                  <div
                    className="bg-[#e8dcf2] content-stretch flex items-center justify-center max-w-[247.60000610351562px] pb-[6.71px] pt-[6.7px] relative rounded-[16px] shrink-0"
                    data-name="Background"
                  >
                    <div
                      className="content-stretch flex flex-col items-start overflow-clip px-[12px] relative shrink-0"
                      data-name="Container"
                    >
                      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#553b69] text-[13px] whitespace-nowrap">
                        <p className="leading-[18.59px]">Context: Create</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Container2>
              <div
                className="flex-[1_0_0] min-h-px min-w-px relative self-stretch"
                data-name="Container"
              >
                <div className="content-stretch flex flex-col gap-[0.75px] items-start pb-[4px] pt-[3.25px] relative size-full">
                  <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[12px] whitespace-nowrap">
                    <p className="leading-[19.92px]">ASSIGNEE</p>
                  </div>
                  <div
                    className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col h-[28px] items-start pr-[8px] relative shrink-0 w-[36px]"
                      data-name="Raphaëlle Fasquelle:margin"
                    >
                      <div
                        className="relative rounded-[20px] shrink-0 size-[32px]"
                        data-name="Text"
                      >
                        <img
                          alt=""
                          className="privacy-blur absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
                          src={imgText}
                        />
                      </div>
                    </div>
                    <ContainerText text="Taoufik Kibba" blurName={true} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[15.3px] items-start pb-[16px] relative shrink-0 w-full"
              data-name="Container"
            >
              <Wrapper4>
                <p className="leading-[24px]">Comments/Questions</p>
              </Wrapper4>
              <div
                className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
                data-name="Container"
              >
                <div className="relative shrink-0 size-[16px]" data-name="SVG">
                  <svg
                    className="absolute block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 16 16"
                  >
                    <g id="SVG">
                      <path
                        d={svgPaths.p316fd480}
                        fill="var(--fill-0, black)"
                        fillOpacity="0.6"
                        id="Vector"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-name="Container"
                >
                  <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">
                    <p className="leading-[20.02px]">Add comments/questions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-[32px] top-[371px] w-[1366px]">
            <div
              className="bg-[#f9fbfc] content-stretch flex flex-col items-start relative shrink-0 w-full"
              data-name="Background"
            >
              <div
                className="absolute bg-[rgba(0,0,0,0.12)] h-px left-0 opacity-0 right-0 top-[-1px]"
                data-name="Horizontal Divider"
              />
              <Heading3Button>
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[20px] relative"
                  data-name="Margin"
                >
                  <div
                    className="content-stretch flex h-[24px] items-start relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <ContainerText3 text="Linked Events" />
                  </div>
                </div>
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="flex-none rotate-180">
                    <div
                      className="content-stretch flex items-start relative"
                      data-name="Container"
                    >
                      <Svg1 />
                    </div>
                  </div>
                </div>
              </Heading3Button>
              <div
                className="content-stretch flex h-[179.24px] items-start justify-center relative shrink-0 w-full"
                data-name="Container"
              >
                <Container4>
                  <div
                    className="bg-[#f9fbfc] content-stretch flex flex-col items-start max-h-[609px] overflow-auto relative rounded-[4px] shrink-0 w-full"
                    data-name="Region"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-name="Table"
                    >
                      <div
                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                        data-name="Header → Row"
                      >
                        <Text text="Game" additionalClassNames="w-[78.63px]" />
                        <div
                          className="bg-white content-stretch flex flex-col items-start pb-[29.25px] pt-[27.75px] px-[16px] shrink-0 sticky top-0 w-[199.75px]"
                          data-name="Cell"
                        >
                          <div
                            aria-hidden="true"
                            className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
                          />
                          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[14px] whitespace-nowrap">
                            <p className="leading-[24px]">{`Event's Name`}</p>
                          </div>
                        </div>
                        <Text
                          text="Group"
                          additionalClassNames="w-[116.23px]"
                        />
                        <Text
                          text="Description"
                          additionalClassNames="w-[688.46px]"
                        />
                        <Cell
                          text="Auto DQA"
                          text1="Prio"
                          additionalClassNames="w-[108.61px]"
                        />
                        <Cell
                          text="First Added"
                          text1="Version"
                          additionalClassNames="w-[142.31px]"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-name="Body"
                      >
                        <div
                          className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                          data-name="Row"
                        >
                          <Data
                            text="No"
                            text1="data"
                            additionalClassNames="gap-[0.41px] w-[78.63px]"
                          />
                          <Text4
                            text="element upgraded"
                            additionalClassNames="w-[199.75px]"
                          />
                          <div
                            className="content-stretch flex flex-col items-start pb-[21.42px] pl-[8px] pr-[16px] pt-[20.41px] relative shrink-0 w-[116.23px]"
                            data-name="Data"
                          >
                            <div
                              aria-hidden="true"
                              className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
                            />
                            <Wrapper3 additionalClassNames="bg-[#f3ddcb]">
                              <div
                                className="content-stretch flex flex-col items-start overflow-clip px-[12px] relative shrink-0"
                                data-name="Container"
                              >
                                <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a4222] text-[13px] whitespace-nowrap">
                                  <p className="leading-[18.59px]">Gameplay</p>
                                </div>
                              </div>
                            </Wrapper3>
                          </div>
                          <div
                            className="content-stretch flex flex-col h-[74px] items-start justify-center pb-[17px] pt-[16px] px-[16px] relative shrink-0 w-[688px]"
                            data-name="Data"
                          >
                            <div
                              aria-hidden="true"
                              className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
                            />
                            <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#252c32] text-[14px] whitespace-nowrap">
                              <p className="leading-[20.02px]">
                                Sent when a level or rank of an element is
                                increased
                              </p>
                            </div>
                          </div>
                          <Text4 text="—" additionalClassNames="w-[108.61px]" />
                          <Text4
                            text="Coming soon"
                            additionalClassNames="w-[142.31px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Container4>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div
                  className="bg-[#f9fbfc] content-stretch flex flex-col items-start relative shrink-0 w-full"
                  data-name="Background"
                >
                  <div
                    className="absolute bg-[rgba(0,0,0,0.12)] h-px left-0 opacity-0 right-0 top-[-1px]"
                    data-name="Horizontal Divider"
                  />
                  <Heading3Button>
                    <div
                      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[20px] relative"
                      data-name="Margin"
                    >
                      <div
                        className="content-stretch flex h-[24px] items-start relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <ContainerText3 text="Linked Attributes" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="flex-none rotate-180">
                        <div
                          className="content-stretch flex items-start relative"
                          data-name="Container"
                        >
                          <Svg1 />
                        </div>
                      </div>
                    </div>
                  </Heading3Button>
                  <div
                    className="content-stretch flex h-[327.72px] items-start justify-center relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <Container4>
                      <div
                        className="bg-[#f9fbfc] content-stretch flex flex-col items-start max-h-[609px] overflow-auto relative rounded-[4px] shrink-0 w-full"
                        data-name="Region"
                      >
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                          data-name="Table"
                        >
                          <div
                            className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                            data-name="Header → Row"
                          >
                            <Text
                              text="Game"
                              additionalClassNames="w-[78.43px]"
                            />
                            <div
                              className="bg-white content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[16px] shrink-0 sticky top-0 w-[147.17px]"
                              data-name="Cell"
                            >
                              <div
                                aria-hidden="true"
                                className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
                              />
                              <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#252c32] text-[14px] whitespace-nowrap">
                                <p className="mb-0">{`Attribute's`}</p>
                                <p>Name</p>
                              </div>
                            </div>
                            <Cell
                              text="Data"
                              text1="Type"
                              additionalClassNames="w-[99.55px]"
                            />
                            <Text
                              text="Description"
                              additionalClassNames="w-[1008.84px]"
                            />
                          </div>
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                            data-name="Body"
                          >
                            <div
                              className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                              data-name="Row"
                            >
                              <Data
                                text="No"
                                text1="data"
                                additionalClassNames="gap-[0.41px] w-[78.43px]"
                              />
                              <Text3
                                text="new_attribute"
                                additionalClassNames="w-[147.17px]"
                              />
                              <Data1 />
                              <Text3
                                text="new attribute desc"
                                additionalClassNames="w-[1008.84px]"
                              />
                            </div>
                            <div
                              className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                              data-name="Row"
                            >
                              <Data
                                text="No"
                                text1="data"
                                additionalClassNames="gap-[0.42px] w-[78.43px]"
                              />
                              <Text3
                                text="player_level"
                                additionalClassNames="w-[147.17px]"
                              />
                              <div
                                className="content-stretch flex flex-col items-start pb-[21.41px] pt-[20.42px] px-[16px] relative shrink-0 w-[99.55px]"
                                data-name="Data"
                              >
                                <div
                                  aria-hidden="true"
                                  className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none"
                                />
                                <div
                                  className="bg-[#9c27b0] max-w-[1334px] relative rounded-[16px] shrink-0"
                                  data-name="Background"
                                >
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] pb-[6.71px] pt-[6.7px] relative">
                                    <ContainerText1 text="string" />
                                  </div>
                                </div>
                              </div>
                              <Data2
                                text="Id of the place where you receive or spend your resources/elements. In case of IAP manager module, it gives which button led to the"
                                text1="purchase. In case of Mini Ants v2.3, this is “get more” button for supplies."
                                additionalClassNames="pb-[17px] pt-[16px] w-[1008.84px]"
                              />
                            </div>
                            <div
                              className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                              data-name="Row"
                            >
                              <Data
                                text="No"
                                text1="data"
                                additionalClassNames="gap-[0.41px] w-[78.43px]"
                              />
                              <Text3
                                text="level_number"
                                additionalClassNames="w-[147.17px]"
                              />
                              <Data1 />
                              <Text3
                                text="Id of the resource/element used in that transaction"
                                additionalClassNames="w-[1008.84px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Container4>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div
                  className="bg-[#f9fbfc] content-stretch flex flex-col items-start relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full"
                  data-name="Background"
                >
                  <Heading3Button>
                    <div
                      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[20px] relative"
                      data-name="Margin"
                    >
                      <div
                        className="content-stretch flex h-[24px] items-start relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <ContainerText3 text="Real Time Events" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="flex-none rotate-180">
                        <div
                          className="content-stretch flex items-start relative"
                          data-name="Container"
                        >
                          <Svg1 />
                        </div>
                      </div>
                    </div>
                  </Heading3Button>
                  <div
                    className="content-stretch flex h-[581.4px] items-start justify-center relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch"
                      data-name="Container"
                    >
                      <div
                        className="relative shrink-0 w-full"
                        data-name="Region"
                      >
                        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-[8px] px-[16px] relative w-full">
                          <div
                            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                            data-name="Container"
                          >
                            <div
                              className="content-stretch flex flex-col items-start relative shrink-0"
                              data-name="Container"
                            >
                              <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">
                                <p className="text-[12.8px]">
                                  <span className="leading-[19.2px] text-[rgba(0,0,0,0.6)]">{`Displayed Fields: name, madlogin_auth_id, publish_time, entity_id, app_version, source, resource_name • `}</span>
                                  <span className="leading-[19.2px] text-[#0288d1]">
                                    96 of 96 results
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div
                              className="content-stretch flex flex-col items-start relative shrink-0"
                              data-name="Container"
                            >
                              <div
                                className="content-stretch flex items-center justify-center p-[8px] relative rounded-[20px] shrink-0"
                                data-name="Button"
                              >
                                <Wrapper additionalClassNames="relative shrink-0">
                                  <path
                                    d={svgPaths.p306ba380}
                                    fill="var(--fill-0, black)"
                                    fillOpacity="0.54"
                                    id="Vector"
                                  />
                                </Wrapper>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-[#f9fbfc] min-h-[485.3999938964844px] relative rounded-[4px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] shrink-0 w-full"
                            data-name="Background+Shadow"
                          >
                            <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[16px] px-[16px] relative w-full">
                                <div
                                  className="h-[485.4px] overflow-auto relative shrink-0 w-full"
                                  data-name="Container"
                                >
                                  <div
                                    className="absolute content-stretch flex flex-col items-start left-0 right-[-110.59px] top-0"
                                    data-name="Table"
                                  >
                                    <div
                                      className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                      data-name="Header → Row"
                                    >
                                      <CellText
                                        text="name"
                                        additionalClassNames="w-[154.85px]"
                                      />
                                      <CellText
                                        text="madlogin_auth_id"
                                        additionalClassNames="w-[302.88px]"
                                      />
                                      <CellText
                                        text="publish_time"
                                        additionalClassNames="w-[116.9px]"
                                      />
                                      <CellText
                                        text="entity_id"
                                        additionalClassNames="w-[126.16px]"
                                      />
                                      <CellText
                                        text="app_version"
                                        additionalClassNames="w-[105.09px]"
                                      />
                                      <CellText
                                        text="source"
                                        additionalClassNames="w-[271.53px]"
                                      />
                                      <CellText
                                        text="resource_name"
                                        additionalClassNames="w-[335.19px]"
                                      />
                                    </div>
                                    <div
                                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                                      data-name="Body"
                                    >
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="95ee273df629e6d5fe617fceb91b78a2"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="13:33:07.773"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="offline_earnings"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="95ee273df629e6d5fe617fceb91b78a2"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="13:33:02.542"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="initialize_timed_event"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="eventTimed_0.seed"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="9475f1c3debda03ee3607561b910f292"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="08:18:17.070"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_decomposition"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <Row />
                                      <Row1 />
                                      <Row1 />
                                      <Row2 />
                                      <Row2 />
                                      <Row />
                                      <Row3 />
                                      <Row3 />
                                      <Row3 />
                                      <Row4 />
                                      <Row4 />
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="9475f1c3debda03ee3607561b910f292"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="08:17:54.590"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_decomposition"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="9475f1c3debda03ee3607561b910f292"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="08:17:49.865"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_decomposition"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <Row5 />
                                      <Row5 />
                                      <Row5 />
                                      <Row5 />
                                      <Row6 />
                                      <Row6 />
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="9475f1c3debda03ee3607561b910f292"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="08:17:44.575"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <Data3 />
                                        <DataText
                                          text="progress.idle_experience"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="9475f1c3debda03ee3607561b910f292"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="08:17:04.965"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_decomposition"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <Row7 />
                                      <Row7 />
                                      <Row8 />
                                      <Row8 />
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <Text2
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <Text2
                                          text="9475f1c3debda03ee3607561b910f292"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <Text2
                                          text="08:17:02.341"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <Text2
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <Data4 additionalClassNames="pb-[21.02px] pt-[20.01px]" />
                                        <Text2
                                          text="progress.idle_experience"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <Text2
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <Text2
                                          text="9475f1c3debda03ee3607561b910f292"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <Text2
                                          text="08:16:13.837"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <Text2
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <Text2
                                          text="building_decomposition"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <Text2
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <Row9 />
                                      <Row9 />
                                      <Row10 />
                                      <Row10 />
                                      <Row10 />
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="9475f1c3debda03ee3607561b910f292"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="08:16:10.381"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_decomposition"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <Row11 />
                                      <Row11 />
                                      <Row12 />
                                      <Row12 />
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="9475f1c3debda03ee3607561b910f292"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="08:16:06.592"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_decomposition"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_spend"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="9475f1c3debda03ee3607561b910f292"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="08:15:56.081"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <Data4 additionalClassNames="pb-[21.01px] pt-[20.02px]" />
                                        <DataText
                                          text="gameEvent_eventTimed_0_level"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_spend"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="9475f1c3debda03ee3607561b910f292"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="08:15:56.081"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="initialize_timed_event"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="eventTimed_0.visited"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_spend"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="9475f1c3debda03ee3607561b910f292"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="08:15:56.081"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="start_timed_event"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="progress.chapter_index_eventTimed_0"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <Text2
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <Text2
                                          text="9475f1c3debda03ee3607561b910f292"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <Text2
                                          text="08:15:56.081"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <Text2
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <Text2
                                          text="initialize_timed_event"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <Text2
                                          text="eventTimed_0.colony"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <Text2
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <Text2
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <Text2
                                          text="07:22:52.225"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <Text2
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <Text2
                                          text="building_decomposition"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <Text2
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <Row13 />
                                      <Row14 />
                                      <Row15 />
                                      <Row16 />
                                      <Row15 />
                                      <Row16 />
                                      <Row17 />
                                      <Row18 />
                                      <Row13 />
                                      <Row14 />
                                      <Row15 />
                                      <Row16 />
                                      <Row15 />
                                      <Row16 />
                                      <Row17 />
                                      <Row18 />
                                      <Row13 />
                                      <Row14 />
                                      <Row15 />
                                      <Row16 />
                                      <Row15 />
                                      <Row16 />
                                      <Row17 />
                                      <Row18 />
                                      <Row13 />
                                      <Row14 />
                                      <Row15 />
                                      <Row16 />
                                      <Row15 />
                                      <Row16 />
                                      <Row17 />
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <Text2
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <Text2
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <Text2
                                          text="07:22:48.418"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <Text2
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <Text2
                                          text="task"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <Text2
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="07:22:48.418"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_level_up"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="building.upgrade_c1_resource1_1_quantity"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_spend"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="07:22:48.418"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_c1_resource1_1_quantity"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <Row19 />
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_spend"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="07:22:48.418"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_c1_resource1_1_quantity"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="07:22:48.418"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_decomposition"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <Row19 />
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <Text2
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <Text2
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <Text2
                                          text="07:22:43.131"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <Text2
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <Text2
                                          text="building_level_up"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <Text2
                                          text="building.upgrade_c1_resource1_1_quantity"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <Text2
                                          text="resource_spend"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <Text2
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <Text2
                                          text="07:22:43.131"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <Text2
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <Text2
                                          text="building_c1_resource1_1_quantity"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <Text2
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="07:22:43.131"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_level_up"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="building.upgrade_c1_resource1_1_quantity"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_spend"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="07:22:43.131"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_c1_resource1_1_quantity"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="07:22:43.131"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_level_up"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="building.upgrade_c1_resource1_1_quantity"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_spend"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="07:22:43.131"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_c1_resource1_1_quantity"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="07:22:43.131"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_decomposition"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="07:22:43.131"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.77px] pt-[15.26px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_level_up"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="building.upgrade_c1_resource1_1_ants"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <Text2
                                          text="resource_spend"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <Text2
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <Text2
                                          text="07:22:43.131"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <Text2
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <Text2
                                          text="building_c1_resource1_1_ants"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <Text2
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <Text2
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <Text2
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <Text2
                                          text="07:22:37.550"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <Text2
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <Text2
                                          text="task"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <Text2
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="07:22:37.550"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <DataText
                                          text="building_decomposition"
                                          additionalClassNames="w-[271.53px]"
                                        />
                                        <DataText
                                          text="currencies.food"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                      <div
                                        className="content-stretch flex items-start justify-center relative shrink-0 w-full"
                                        data-name="Row"
                                      >
                                        <DataText
                                          text="resource_receive"
                                          additionalClassNames="w-[154.85px]"
                                        />
                                        <DataText
                                          text="6bb99c7b3394070b129a6ac1af6d9ded"
                                          additionalClassNames="w-[302.88px]"
                                        />
                                        <DataText
                                          text="07:22:37.550"
                                          additionalClassNames="w-[116.9px]"
                                        />
                                        <Data2
                                          text="madbox.idle-"
                                          text1="ants-2"
                                          additionalClassNames="pb-[16.775px] pt-[15.255px] w-[126.16px]"
                                        />
                                        <DataText
                                          text="3.0.0"
                                          additionalClassNames="w-[105.09px]"
                                        />
                                        <Data3 />
                                        <DataText
                                          text="progress.idle_experience"
                                          additionalClassNames="w-[335.19px]"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


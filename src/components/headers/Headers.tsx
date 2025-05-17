import React from "react";
import Menu from "./Menu";
import Title from "./Title";
import Card from "./Card";

const HeadersComponent = () => {
  return (
    <div className="bg-emerald-600 text-white min-h-[70vh] flex flex-col relative">
      <div>
        <Menu />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Title />
      </div>
      <div className="w-full px-4 sm:px-6 md:max-w-[70vw] mx-auto absolute bottom-[-220px] sm:bottom-[-120px] md:bottom-[-50px] inset-x-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          <Card value="3.5M+" description="Customer" />
          <Card value="3.5+" description="Years Of Experience" />
          <Card value="25+" description="Total Destination" />
          <Card value="4.9" description="Rating Value" />
        </div>
      </div>
    </div>
  );
};

export default HeadersComponent;

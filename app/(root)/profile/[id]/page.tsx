import Header from "@/components/Header";
import React from "react";

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="datacharge53@gmail.com"
        title="Data Charge"
        userImg="/assets/images/dummy.jpg"
      />

      <section className="video-grid"></section>

      {/* {dummyCards.map((card) => (
        <VideoCard key={card.id} {...card} />
      ))} */}
    </div>
  );
};

export default Page;

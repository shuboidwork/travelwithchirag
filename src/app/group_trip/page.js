import LeadGen from "../../../components/common_components/leadgen";
import Footer from "../../../components/common_components/footer";
import Intro from "../../../components/landing_components/intro";
import { DestinationIntro } from "../../../components/landing_components/intro";
import Image from "next/image";

const description =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

const activities = [
  {
    id: 1,
    dest: "Tanah Lot Temple",
    media_url: "/common/travel1.jpg",
  },
  {
    id: 2,
    dest: "Nusa Penida",
    media_url: "/common/travel2.jpg",
  },
  {
    id: 3,
    dest: "Paragliding",
    media_url: "/common/travel3.jpg",
  },
  {
    id: 4,
    dest: "Oasis Restaurant",
    media_url: "/destinations/thailand.jpg",
  },
];
//

export default function destination() {
  return (
    <div className="w-screen bg-cover bg-center relative bg-[url('/common/paperbackedge.png')] my-auto">
      <div className="w-screen pt-10">
        <div className="">
          <DestinationIntro destination_text="Day wise itinerary"></DestinationIntro>
          <LeadGen></LeadGen>
        </div>
      </div>
      <div className="">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="border border-black w-2/3 mt-10 mx-auto rounded-lg bg-white shadow-2xl"
          >
            <div className="h-10 bg-black text-white text-2xl pl-2 pb-2 bold align-center rounded-t-lg">
              {" "}
              Day {activity.id}
            </div>
            <div className="md:flex lg:flex rounded-2xl justify-center items-center   grid-cols-3">
              <div
                style={{ "--image-url": `url(${activity.media_url})` }}
                className={` bg-cover bg-opacity-50 bg-[image:var(--image-url)] w-40 h-40 rounded-bl-lg col-span-2 m-3`}
              >
                <div className="mb-2 bg-cover bg-center bg-[url('/common/Union.png')]">
                  <div className="rounded-lg w-60 bg-gradient-to-b from-transparent text-black text-sm  bold font-denton text-center">
                    {activity.dest}
                  </div>
                </div>
              </div>
              <div
                style={{ "--image-url": `url(${activity.media_url})` }}
                className={` bg-cover bg-opacity-50 bg-[image:var(--image-url)] w-40 h-40 rounded-bl-lg col-span-2 m-3`}
              >
                <div className="mb-2 bg-cover bg-center bg-[url('/common/Union.png')]">
                  <div className="rounded-lg w-60 bg-gradient-to-b from-transparent text-black text-sm  bold font-denton text-center">
                    {activity.dest}
                  </div>
                </div>
              </div>
              <div
                style={{ "--image-url": `url(${activity.media_url})` }}
                className={` bg-cover bg-opacity-50 bg-[image:var(--image-url)] w-40 h-40 rounded-bl-lg col-span-2 m-3`}
              >
                <div className="mb-2 bg-cover bg-center bg-[url('/common/Union.png')]">
                  <div className="rounded-lg w-60 bg-gradient-to-b from-transparent text-black text-sm  bold font-denton text-center">
                    {activity.dest}
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-span-1 border border-black bg-black">
              <p className="text-white bold text-center md:text-lg lg:text-lg sm:text-sm font-roboto p-2">
                This is the description regarding the store owner and their
                journey so far in travel space. This will include how many
                countries they have travelled and how many destinations they are
                expert in.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
}
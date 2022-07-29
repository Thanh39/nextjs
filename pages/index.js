import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
const DUMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg/341px-Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg",
    address: "Some address 5, 1243 city",
    description: "this A first MEetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg/341px-Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg",
    address: "Some address 5, 1243 city",
    description: "this A second MEetup",
  },
];
function HomePage() {
  const [loadMeetup, setLoadMeetup] = useState([]);
  useEffect(
    //render one times
    setLoadMeetup(DUMY_MEETUPS)
  , []);
  return <MeetupList meetups={loadMeetup} />;
}
export default HomePage;

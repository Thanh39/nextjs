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
function HomePage(props) {
  // const [loadMeetup, setLoadMeetup] = useState([]);
  // useEffect(
  //   //render one times , send a http request and fetch data
  //   setLoadMeetup(DUMY_MEETUPS)
  // , []);
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps(context){
    const req =context.req;
    const res =context.res;

     //fetch data from an API
  return{
    props:{
      meetups:DUMY_MEETUPS
    },
  
  }
}
// export async function getStaticProps(){
//   //fetch data from an API
//   return{
//     props:{
//       meetups:DUMY_MEETUPS
//     },
//     //generated revalidate : tao ra xac nhan lai trong 10s
//     revalidate:1
//   }
// }

export default HomePage;

import MeetupDetail from "../../components/meetups/MeetupDetail";
function DetailMeetup() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg/341px-Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg"
      title="A second Meetup"
      address="Some address 5, 1243 city"
      description="this A second MEetup"
    ></MeetupDetail>
  );
}
export async function  getStaticPaths(){
  return{
    fallback:false,
    paths:[
      {
        params:{
          meetupId:'m1'
        }
      },
      {
        params:{
          meetupId:'m2'
        }
      }
    ]
  }
}
export async function getStaticProps(context) {
  //fetch data from an API
  const meetupId = context.params.meetupId
  return {
    props: {
      meetupData: {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg/341px-Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg",
        id:meetupId,
        title: "A second Meetup",
        address: "Some address 5, 1243 city",
        description: "this A second MEetup",
      },
    },
  };
}
export default DetailMeetup;

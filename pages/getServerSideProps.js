export default function getServerSidePropsPage() {
  return <div>YES!</div>;
}

export async function getServerSideProps(context) {
  console.log("Inside getServerSideProps");

  return {
    props: {}, // will be passed to the page component as props
  };
}

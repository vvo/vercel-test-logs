export default function getStaticPropsPage() {
  return <div>YES!</div>;
}

export async function getStaticProps(context) {
  console.log("Inside getStaticProps");

  return {
    props: {}, // will be passed to the page component as props
  };
}

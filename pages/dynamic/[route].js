export default function dynamicRoutePage() {
  return <div>YES!</div>;
}

export async function getStaticProps(context) {
  console.log("Inside getStaticProps");

  return {
    props: {}, // will be passed to the page component as props
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  console.log("Inside getStaticPaths");

  return {
    paths: [{ params: { route: "1" } }],
    fallback: true, // false or 'blocking'
  };
}

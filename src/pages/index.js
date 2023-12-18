import RootLayout from "../../components/Layouts/RootLayout";

const index = () => {
  return (
    <div>
      <h1>hello from office</h1>
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

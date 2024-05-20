import Spinner from "react-bootstrap/Spinner";

const Spin = () => {
  return (
    <>
      <Spinner
        animation="border"
        role="status"
        style={{ height: "70px", width: "70px", margin: "250px 0px 0px 700px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
};

export default Spin;

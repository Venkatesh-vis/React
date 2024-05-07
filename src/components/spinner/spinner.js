import Spinner from 'react-bootstrap/Spinner';

function Spin() {
  return (
    <Spinner style={{
        height:"50px",
        width:"50px",
        margin:"300px 0 0 700px "
        }} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Spin;
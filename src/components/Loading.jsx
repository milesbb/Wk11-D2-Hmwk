import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="w-100 d-flex mx-auto text-center">
      <Spinner className="mx-auto mt-3" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;

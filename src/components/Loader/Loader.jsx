import { RotatingLines } from 'react-loader-spinner';
import { Spinner } from './Loader.styled.jsx';

const Loader = () => {
  return (
    <Spinner>
      <RotatingLines
        strokeWidth={5} strokeColor="#0643ad" width={96} />
    </Spinner>
  );
};

export default Loader;
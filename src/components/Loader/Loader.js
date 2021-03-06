import Loaders from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="wrapperLoader">
      <Loaders
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}

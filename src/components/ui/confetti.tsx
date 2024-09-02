import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
const ConfettiE = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <Confetti
        // initialVelocityY={15}
        width={width}
        height={height}
        recycle={false}
      />
    </div>
  );
};

export default ConfettiE;

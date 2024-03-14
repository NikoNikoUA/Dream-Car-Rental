import { useSelector } from "react-redux";
import { Loader } from "../../src/components/Loader/Loader";
import { selectError, selectIsLoading } from "../redux/selectors";
import { Background, Text, Span } from "../../src/Container.styled";
import pic from "../../src/car-gdd62e2388_1280.jpg";

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Background $url={pic && `url(${pic})`}>
      {isLoading && !error && <Loader />}

      <Text>
        <Span>DreamCarRental</Span> is your reliable partner in car rental
        business!
      </Text>
    </Background>
  );
};

export default HomePage;

import {
  selectIsLoading,
  selectError,
  selectFilter,
  selectGetCars,
  selectGetAllCars,
  selectPage,
} from "../../src/redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { CarsList } from "../components/Catalog/CarsList/CarsList";
import { Loader } from "../../src/components/Loader/Loader";
import { Container, ComponentsContainer } from "../../src/Container.styled";
import Filter from "../../src/components/Catalog/Filter/Filter";
import { useEffect, useState } from "react";
import {
  fetchAllCars,
  fetchCars,
  LIMIT,
} from "../../src/redux/cars/operations";
import { LoadMore } from "../../src/components/LoadMore/LoadMore";

const Catalog = () => {
  const [loadMore, setLoadMore] = useState(false);

  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectGetCars);
  const filter = useSelector(selectFilter);
  const allCars = useSelector(selectGetAllCars);
  const dispatch = useDispatch();

  const totalNumberOfPages = Math.ceil(allCars.length / LIMIT);

  useEffect(() => {
    if (page === 1 && cars.length === 0) {
      dispatch(fetchCars());
      dispatch(fetchAllCars());
      setLoadMore(true);
    }
  }, [dispatch, page, cars]);

  const clickLoadMore = () => {
    if (page < totalNumberOfPages) {
      setLoadMore(true);
      dispatch(fetchCars(page));
    }
  };

  const visibleCarsMake =
    filter?.make && filter?.make !== "all"
      ? cars.filter(
          (car) => car.make.toLowerCase() === filter.make.toLowerCase()
        )
      : cars;

  return (
    <Container>
      {isLoading && !error && <Loader />}
      <ComponentsContainer>
        <Filter />
        <CarsList visibleCarsMake={visibleCarsMake} />
        {loadMore && page < totalNumberOfPages && (
          <LoadMore clickLoadMore={clickLoadMore} />
        )}
      </ComponentsContainer>
    </Container>
  );
};

export default Catalog;

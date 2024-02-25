import {
  selectIsLoading,
  selectError,
  selectFilter,
  selectGetCars,
  selectGetAllCars,
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
  const [page, setPage] = useState(1);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectGetCars);
  console.log("CARS WITH pagination:", cars);
  const filter = useSelector(selectFilter);
  const allCars = useSelector(selectGetAllCars);
  console.log("All cars:", allCars);
  const dispatch = useDispatch();

  const totalNumberOfPages = Math.ceil(allCars.length / LIMIT);
  console.log(totalNumberOfPages);

  useEffect(() => {
    if (page === 1) {
      dispatch(fetchCars(page));
      dispatch(fetchAllCars());
      setLoadMore(true);
    }
    dispatch(fetchCars(page + 1));
  }, [dispatch, page, cars.length]);

  const clickLoadMore = () => {
    if (page < totalNumberOfPages) {
      setLoadMore(true);
    }
    setPage(page + 1);
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

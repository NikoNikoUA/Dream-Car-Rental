import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  ButtonSearch,
  Label,
  InputContainer,
  Forma,
  MilageInputs,
  InputField,
} from "./Filter.styled";
import { useDispatch } from "react-redux";
import { filterValue } from "../../../redux/filter/filterSlice";

const schema = Yup.object().shape({
  make: Yup.string(),
  price: Yup.number(),
  mileage: Yup.number(),
});

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        make: "",
        price: "",
        mileageFrom: "",
        mileageTo: "",
      }}
      validationSchema={schema}
      onSubmit={(values, action) => {
        dispatch(filterValue(values));

        action.resetForm();
      }}
    >
      <Forma>
        <InputContainer>
          <Label htmlFor="make">Car brand</Label>
          <Field
            style={{
              borderRadius: "14px",

              width: "224px",
              height: "48px",
              backgroundColor: "#f7f7fb",
              border: "none",
              fontWeight: "500",
              fontSize: "18px",

              lineHeight: "1.11111",
              color: "#121417",
              padding: "14px 89px 14px 18px",
            }}
            name="make"
            as="select"
            placeholder="Enter the text"
          >
            <option value="all">All</option>
            <option value="buick">Buick</option>
            <option value="volvo">Volvo</option>
            <option value="hummer">HUMMER</option>
            <option value="subary">Subaru</option>
            <option value="mitsubishi">Mitsubishi</option>
            <option value="nissan">Nissan</option>
            <option value="lincoln">Lincoln</option>
            <option value="gmc">GMC</option>
            <option value="hyundai">Hyundai</option>
            <option value="mini">MINI</option>
            <option value="bentley">Bentley</option>
            <option value="mercedes-benz">Mercedes-Benz</option>
            <option value="aston martin">Aston Martin</option>
            <option value="pontiac">Pontiac</option>
            <option value="lamborghini">Lamborghini</option>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="chevrolet">Chevrolet</option>
            <option value="chrysler">Chrysler</option>
            <option value="kia">Kia</option>
            <option value="land rover">Land Rover</option>
          </Field>
        </InputContainer>

        <InputContainer>
          <Label htmlFor="price">Price/ 1 hour</Label>
          <Field
            style={{
              borderRadius: "14px",

              width: "135px",
              height: "48px",
              backgroundColor: "#f7f7fb",
              border: "none",
              fontWeight: "500",
              fontSize: "18px",

              lineHeight: "1.11111",
              color: "#121417",
              padding: "14px 18px",
            }}
            as="select"
            name="price"
            placeholder="To $"
          >
            <option value="all">All prices</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
            <option value="75">75</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="250">250</option>
            <option value="300">300</option>
            <option value="500">500</option>
          </Field>
        </InputContainer>

        <InputContainer>
          <Label htmlFor="mileageFrom">Car mileage / km</Label>
          <MilageInputs>
            <InputField
              className="inputFrom"
              name="mileageFrom"
              placeholder="From"
            />

            <Label htmlFor="mileageTo"></Label>
            <InputField className="inputTo" name="mileageTo" placeholder="To" />
          </MilageInputs>
        </InputContainer>

        <ButtonSearch type="submit">Search</ButtonSearch>
      </Forma>
    </Formik>
  );
};

export default Filter;

import { Header } from "@components/header";
import { useAppSelector } from "@redux/store/configureStore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProductors } from "@redux/reducers/ProductorsThunk";
import Table from "@components/productors/Table";

const Productors: React.FC = () => {
  const dispatch = useDispatch();
  const { productors } = useAppSelector((state) => state.productorReducer);
  
  const newArray = productors?.map((item) =>
    Object.assign({}, item, { edit: "editar", delete: "delete" })
  );

  useEffect(() => {
    const getData = async () => {
      await dispatch(getAllProductors());
    };
    getData();
  }, []);

  return (
    <>
      <Table data={newArray} />
    </>
  );
};

export default Productors;

import { Header } from "@components/header";
import { useAppSelector } from "@redux/store/configureStore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteProductor, getAllProductors } from "@redux/reducers/ProductorsThunk";
import Table from "@components/productors/Table";
import router from "next/router";

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

  const onDelete = async (id: number) => {
    dispatch(deleteProductor(id));
    router.reload();
  };

  return (
    <>
      <Table data={newArray} onDelete={onDelete}  />
    </>
  );
};

export default Productors;

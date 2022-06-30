import * as yup from "yup";

export const RegisterProductor = yup.object().shape({
 fullname: yup.string().min(3).max(32).required("Name cannot be empty"),
 cpf: yup.string().max(11).required("Cpf cannot be empty"),
 city: yup.string().max(32).required("City cannot be empty"),
 estate: yup.string().max(32).required("Estate cannot be empty"),
 total_area_hectares_farm: yup
  .string()
  .max(32)
  .required("TotalAreaHectaresFarm cannot be empty"),
 total_agricultural_area: yup
  .string()
  .max(32)
  .required("TotalAgriculturalArea cannot be empty"),
 total_vegetabel_area: yup
  .string()
  .max(32)
  .required("TotalVegetabelArea cannot be empty"),
 crops: yup.string().min(6).max(32).required("crops cannot be empty"),
});

export const EditProductor = yup.object().shape({
 fullname: yup.string().min(3).max(32).required("Name cannot be empty"),
 cpf: yup.string().max(11).required("Cpf cannot be empty"),
 city: yup.string().max(32).required("City cannot be empty"),
 estate: yup.string().max(32).required("Estate cannot be empty"),
 total_area_hectares_farm: yup
  .string()
  .max(32)
  .required("TotalAreaHectaresFarm cannot be empty"),
 total_agricultural_area: yup
  .string()
  .max(32)
  .required("TotalAgriculturalArea cannot be empty"),
 total_vegetabel_area: yup
  .string()
  .max(32)
  .required("TotalVegetabelArea cannot be empty"),
 crops: yup.string().max(32).required("crops cannot be empty"),
});
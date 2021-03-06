import * as yup from "yup";

export const RegisterProductor = yup.object().shape({
  fullname: yup.string(),
  cpf: yup.string().max(11).required("Cpf cannot be empty"),
  city: yup.string().max(32).required("City cannot be empty"),
  estate: yup.string().max(32).required("City cannot be empty"),
  total_area_hectares_farm: yup
  .number().default(30).required(),
  total_agricultural_area: yup
  .number().default(30).required(),
  total_vegetabel_area: yup
  .number().default(30).required(),
  soy: yup.string().max(32).required("soy cannot be empty"),
  wheat: yup.string().max(32).required("wheat cannot be empty"),
  corn: yup.string().max(32).required("corn cannot be empty"),
  cane: yup.string().max(32).required("cane cannot be empty"),
});

export const EditProductor = yup.object().shape({
  fullname: yup.string().required("Name cannot be empty"),
  cpf: yup.string().max(11).required("Cpf cannot be empty"),
  city: yup.string().required("City cannot be empty"),
  estate: yup.string(),
  total_area_hectares_farm: yup
  .number().default(30).required(),
  total_agricultural_area: yup
  .number().default(30).required(),
  total_vegetabel_area: yup
  .number().default(30).required(),
  crops: yup.string().max(32),
  soy: yup.string().max(32),
  wheat: yup.string().max(32),
  corn: yup.string().max(32),
  cane: yup.string().max(32),
});
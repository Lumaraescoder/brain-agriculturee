import { useForm } from "react-hook-form";
import { IProductorsState } from "src/types/types";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddProductors } from "@redux/reducers/ProductorsThunk";
import { RegisterProductor } from "src/schemas/registerSchema";

export function RegisterProductors() {
 const dispatch = useDispatch();
 const {
   register,
   handleSubmit,
   formState: { errors },
 } = useForm<IProductorsState>({
   resolver: yupResolver(RegisterProductor),
 });

 const onSubmit = (data: IProductorsState) => {
   dispatch(AddProductors(data));
 };
 return {
   register,
   handleSubmit,
   onSubmit,
   errors,
 };
}
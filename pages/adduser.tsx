import React from "react";
import Alert from "@mui/material/Alert";
import { useForm } from "react-hook-form";
import { IProductorsState } from "src/types/types";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddProductors } from "@redux/reducers/ProductorsThunk";
import { RegisterProductor } from "src/schemas/Schemas";
import router, { useRouter } from "next/router";

export const AddUsers: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductorsState>({
    resolver: yupResolver(RegisterProductor),
  });

  const onSubmitHandler = (data: IProductorsState) => {
    dispatch(AddProductors(data));
    router.push('/done');
    console.log(data,"===")
  };

  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-12 dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white"></h2>
        <form className="mt-11" onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">Name</label>
              <input
                {...register("fullname")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.cpf && (
                <Alert severity="error">
                  This is an error alert — check it out!
                </Alert>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200"></label>
              CPF
              <input
                type="text"
                {...register("cpf")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.fullname && (
                <Alert severity="error">
                  This is an error alert — check it out!
                </Alert>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Name of the farm
              </label>
              <input
                {...register("farm_name")}
                className="block w-full px-4 py-2 mt2 tex-t-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.farm_name && (
                <Alert severity="error">
                  This is an error alert — check it out!
                </Alert>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">City</label>
              <input
                
                {...register("city")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.city && (
                <Alert severity="error">
                  This is an error alert — check it out!
                </Alert>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">Estate</label>
              <input
                
                {...register("estate")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.estate && (
                <Alert severity="error">
                  This is an error alert — check it out!
                </Alert>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Hectares
              </label>
              <input
               
                {...register("total_area_hectares_farm")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.total_area_hectares_farm && (
                <Alert severity="error">
                  This is an error alert — check it out!
                </Alert>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Agricultural Area
              </label>
              <input
                type="text"
                {...register("total_agricultural_area")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.total_agricultural_area && (
                <Alert severity="error">
                  This is an error alert — check it out!
                </Alert>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Vegetabel Area
              </label>
              <input
                type="text"
                {...register("total_vegetabel_area")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.total_vegetabel_area && (
                <Alert severity="error">
                  This is an error alert — check it out!
                </Alert>
              )}
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">Soja</label>
              <input
                {...register("soy")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">Wheat</label>
              <input
                {...register("wheat")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">Corn</label>
              <input
                {...register("corn")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">Cane</label>
              <input
                {...register("cane")}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              onClick={handleSubmit(onSubmitHandler)}
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddUsers;

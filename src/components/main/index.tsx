import Graphs from "../graphs/graph"
import { getAllProductors } from '../../redux/reducers/ProductorsThunk'
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  AgriculturalArea,
  CaneData,
  CornData,
  GraphDataByEstate,
  SoyData,
  VegetabelArea,
  WheatData,
} from "../../helpers/helpers";

export const Main: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      await dispatch(getAllProductors());
    };
    getData();
  }, []);

  const { dataEstate, totalProoductors, hectarArea } = GraphDataByEstate();
  const { soyGraphdata:   a } =   SoyData(),
        { wheatGraphdata: b } =   WheatData(),
        { cornGraphdata:  c } =  CornData(),
        { caneGraphdata:  d } =  CaneData(),
        culture = [...a, ...b, ...c, ...d];
  const { agriculturalState } = AgriculturalArea();
  const { vegetabelState }    = VegetabelArea();
  console.log(agriculturalState)
  console.log(vegetabelState)
  return (
    <section>
      <div
        id="main"
        className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
      >
        <div className="bg-gray-800 pt-3">
          <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 className="font-bold pl-2">Dashboard</h1>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-1/6 p-6">
            <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-green-600">
                    <i className="fa fa-wallet fa-2x fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h2 className="font-bold uppercase text-gray-600">
                    Total Farms
                  </h2>
                  <p className="font-bold text-3xl">
                    {totalProoductors}
                    <span className="text-green-500">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/ xl:w-1/5 p-9 ml-11">
            <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-pink-600">
                    <i className="fas fa-users fa-2x fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h2 className="font-bold uppercase text-gray-600">
                    Total Farms Area
                  </h2>
                  <p className="font-bold text-3xl">
                    {hectarArea}
                    <span className="text-pink-500">
                      <i className="fas fa-exchange-alt"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap flex-grow mt-2">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-white border-transparent rounded-lg shadow-xl">
              <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                <h3 className="font-bold uppercase text-gray-600">Estate</h3>
              </div>
              <div className="p-5">
                <Graphs data={dataEstate} />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-white border-transparent rounded-lg shadow-xl">
              <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                <h2 className="font-bold uppercase text-gray-600">Cultive</h2>
              </div>
              <div className="p-5 ml-11">
                <Graphs data={culture} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-white border-transparent rounded-lg shadow-xl">
              <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                <h2 className="font-bold uppercase text-gray-600">
                  Vegetabel Area
                </h2>
              </div>
              <div className="p-5">
                <Graphs data={vegetabelState} />
              </div>
            </div>
          </div>
          <div className="w-full   ml-11 md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-white border-transparent rounded-lg shadow-xl">
              <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                <h2 className="font-bold uppercase text-gray-600">
                  Agricultural Area
                </h2>
              </div>
              <div className="p-5">
                <Graphs data={agriculturalState} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

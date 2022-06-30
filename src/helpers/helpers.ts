import { useAppSelector } from "../../src/redux/store/configureStore";

export function GraphDataByEstate() {
 const { productors } = useAppSelector((state) => state.productorReducer);
 const totalProoductors = productors.length
 const hectarArea = productors.map(a => { let b = 10000 * a.total_area_hectares_farm; return b }).reduce((a, b) => a + b, 0)
 const postIds = productors.map(a => a.estate)
 const occurrences = postIds.reduce((prev: any, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
 const dataEstate = Object.keys(occurrences).map(a => ({ name: a, value: occurrences[a] }))
 return {
  dataEstate,
  totalProoductors,
  hectarArea,
 }
}

export function SoyData() {
 const { productors } = useAppSelector((state) => state.productorReducer);
 const getSoy = productors.map(a => a.soy)
 const sumDatasoy = getSoy.reduce((prev: any, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
 const combinedArraysoy = Object.keys(sumDatasoy).map(a => ({ name: a, value: sumDatasoy[a] }))
 const soyGraphdata = combinedArraysoy.splice(0, 1);
 return { soyGraphdata }
}

export function WheatData() {
 const { productors } = useAppSelector((state) => state.productorReducer);
 const getWheat = productors.map(productor => productor.wheat);
 const sumDatawheat = getWheat.reduce((prev: any, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
 const combinedArraywheat = Object.keys(sumDatawheat).map(a => ({ name: a, value: sumDatawheat[a] })),
  wheatGraphdata = combinedArraywheat.splice(0, 1)
 return { wheatGraphdata }
}

export function CornData() {
 const { productors } = useAppSelector((state) => state.productorReducer);
 const getCorn = productors.map(a => a.corn)
 const sumDataCorn = getCorn.reduce((prev: any, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
 const combinedArraycorn = Object.keys(sumDataCorn).map(a => ({ name: a, value: sumDataCorn[a] })),
  cornGraphdata = combinedArraycorn.splice(0, 1)
 return { cornGraphdata }
}

export function CaneData() {
 const { productors } = useAppSelector((state) => state.productorReducer);
 const getCane = productors.map(productor => productor.cane);
 const sumDataCane = getCane.reduce((prev: any, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
 const combinedArraycane = Object.keys(sumDataCane).map(a => ({ name: a, value: sumDataCane[a] })),
  caneGraphdata = combinedArraycane.splice(0, 1)
 return { caneGraphdata }
}

export function AgriculturalArea() {
 const { productors } = useAppSelector((state) => state.productorReducer);
 const agriculturalArea = productors.map((a) => a.total_agricultural_area);
 const agriculturalState = Object.keys(agriculturalArea).map((a) => ({
  name: a,
  value: agriculturalArea[a],
 }));
 return { agriculturalState }
}

export function VegetabelArea() {
 const { productors } = useAppSelector((state) => state.productorReducer);
 const vegetabelArea = productors.map((a) => a.total_vegetabel_area);
 const vegetabelState = Object.keys(vegetabelArea).map((a) => ({
  name: a,
  value: vegetabelArea[a],
 }));
 return { vegetabelState }
}
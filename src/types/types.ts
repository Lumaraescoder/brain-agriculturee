
export interface IProductorsState {
 id: number;
 fullname: string;
 cpf: string;
 farm_name: string;
 city: string;
 estate: string;
 total_area_hectares_farm: number;
 total_agricultural_area: number;
 total_vegetabel_area: number;
 crops: string;
}
export interface IInitialProductorState {
 productors: IProductorsState[];
}

export interface Data {
 id: number;
 fullname: string;
 cpf: string;
 farm_name: string;
 city: string;
 estate: string;
 total_area_hectares_farm: number;
 total_agricultural_area: number;
 total_vegetabel_area: number;
 crops: string;
 edit: string;
 delete: string;
}

export interface TableProps {
 data: Data[];
}
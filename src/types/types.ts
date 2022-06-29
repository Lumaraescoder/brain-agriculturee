
export interface IProductorsState {
 id?: number | any; 
 fullname: string;
 cpf: string;
 farm_name: string;
 city: string;
 estate: string;
 total_area_hectares_farm: string;
 total_agricultural_area: string;
 total_vegetabel_area: string;
 crops: string;
}
export interface IInitialProductorState { 
 productors: IProductorsState[];
 loading: boolean;
 success?: boolean;
 error?: string;
}

export interface Data {
 id?: number;
 fullname: string;
 cpf: string;
 farm_name: string;
 city: string;
 estate: string;
 total_area_hectares_farm: string;
 total_agricultural_area: string;
 total_vegetabel_area: string;
 crops: string;
 edit: string;
 delete: string;
}

export interface TableProps {
 data: Data[];
}


export interface IProductorsState {
 cane: string;
 corn: string;
 wheat: string;
 soy: string;
 id?: number | any; 
 fullname: string;
 cpf: string;
 farm_name: string;
 city: string;
 estate: string;
 total_area_hectares_farm: number;
 total_agricultural_area: number;
 total_vegetabel_area: number;
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
 total_area_hectares_farm: number;
 total_agricultural_area: number;
 total_vegetabel_area: number;
 edit: string;
 delete: string;
}

export interface TableProps {
 data: Data[];
 onDelete: (id: any) => void;
}

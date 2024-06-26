//Project系列
interface ProjectData {
    id: string;  //注意這裡的id是string
    name: string;
    status: string;
    date: string;
    picture?: string;
    fileNumber: string;
    cost: number;
    sellingPrice: number,
    category: string;   
    thirdPartyLists:ThirdPartyData[]
}

interface ThirdPartyData {
    id: number;
    name: string;
    taskLists: TaskData[];
    cost: number;
    sellingPrice: number;
}

interface TaskData {
    id: number;
    todo: string;
    unit: string;
    quantity: number;
    stock: number;
    cost: number;
    price: number;
}


//選單菜單系列
interface UnitMenuObject {
    id: string;
    unit: string;
}

interface ProjectTypeObject {
    id: string;
    name: string;
};

interface FirmObject {
    id: string;
    name: string;
}
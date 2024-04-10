//Project系列
interface ProjectData {
    id: string;  //注意這裡的id是string
    name: string;
    status: string;
    date: string;
    picture?: string;
    fileNumber: string;
    cost: number;
    category: string;   
    thirdPartyLists:ThirdPartyData[]
}

interface ThirdPartyData {
    id: number;
    name: string;
    taskLists: TaskData[];
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
interface unitList {
    id: number;
    unit: string;
}

interface ProjectTypeList {
    id: number;
    name: string;
};
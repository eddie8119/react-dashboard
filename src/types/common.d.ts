interface ProjectData {
    id: number;
    name: string;
    status: string;
    date: Date;
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
    uint: string;
    quantity: number;
    stock: number;
    cost: number;
    price: number;
}

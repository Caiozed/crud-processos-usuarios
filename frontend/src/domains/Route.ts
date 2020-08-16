export default  interface IRoute{
    path: string,
    name: string,
    icon?: any,
    component: any,
    children?: Array<IRoute> 
}


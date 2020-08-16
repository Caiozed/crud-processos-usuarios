import { Home as HomeIcon, Person, Assessment } from '@material-ui/icons';
import IRoute from "../domains/Route";
import Usuarios from "../pages/Usuarios";
import Processos from '../pages/Processos';

export default [
    {path: "/", name: "Usuarios", component: Usuarios, icon: Person}, 
    {path: "/processos", name: "Processos", component: Processos, icon: Assessment} 
] as Array<IRoute>
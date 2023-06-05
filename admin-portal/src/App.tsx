import { Admin, Resource } from "react-admin";
import { Dashboard } from "./Dashboard";
import { dataProvider } from './dataProvider';
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import { authProvider } from './authProvider';
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";


export const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} >
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="users" list={UserList} recordRepresentation="name" />
    </Admin>
);
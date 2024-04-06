import {
  Admin,
  Resource,
  ShowGuesser,
} from "react-admin";
import { PoemList, PoemShow, PoemCreate } from './routes/poems'
import { ChatList, ChatShow, ChatCreate } from './routes/chats'
import { dataProvider } from "./dataProvider";
import authProvider from "./authProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} >
    <Resource name="poems" list={PoemList} show={PoemShow} create={PoemCreate} />
    <Resource name="chats" list={ChatList} show={ChatShow} create={ChatCreate} />
  </Admin>
);

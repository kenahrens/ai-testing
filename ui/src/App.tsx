import {
  Admin,
  Resource,
  ShowGuesser,
} from "react-admin";
import { PoemList, PoemShow, PoemCreate } from './routes/poems'
import { ChatList, ChatShow } from './routes/chats'
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="poems" list={PoemList} show={PoemShow} create={PoemCreate} />
    <Resource name="chats" list={ChatList} show={ChatShow} />
  </Admin>
);

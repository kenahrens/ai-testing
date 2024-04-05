import {
  Admin,
  Resource,
  ShowGuesser,
} from "react-admin";
import {
  ChatList,
  ChatShow,
} from './chats'
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="chats" list={ChatList} show={ChatShow} />
  </Admin>
);

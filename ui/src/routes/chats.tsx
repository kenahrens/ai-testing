import { Show, SimpleShowLayout, List, Datagrid, TextField, NumberField } from "react-admin";

export const ChatList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="prompt" />
      <TextField source="response" />
      <TextField source="model" />
      <NumberField source="tokens" />
      <NumberField source="duration" />
    </Datagrid>
  </List>
);

export const ChatShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="prompt" />
      <TextField source="response" />
      <TextField source="model" />
      <NumberField source="tokens" />
      <NumberField source="duration" />
    </SimpleShowLayout>
  </Show>
);

import { Create, SimpleForm, TextInput, NumberInput, Show, SimpleShowLayout, List, Datagrid, TextField, NumberField } from "react-admin";

export const ChatList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="prompt" />
      <TextField source="content" />
      <NumberField source="total_tokens" />
      <NumberField source="duration" />
    </Datagrid>
  </List>
);

export const ChatShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="prompt" />
      <TextField source="content" />
      <TextField source="model" />
      <NumberField source="tokens" />
      <NumberField source="max_tokens" />
      <NumberField source="prompt_tokens" />
      <NumberField source="total_tokens" />
      <NumberField source="duration" />
    </SimpleShowLayout>
  </Show>
);

export const ChatCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="prompt" fullWidth defaultValue="I have a question about ..." />
      <NumberInput source="max_tokens" defaultValue="50" />
    </SimpleForm>
  </Create>
)

import { Create, Show, SimpleShowLayout, List, Datagrid, TextField, NumberField, SimpleForm, TextInput, NumberInput } from "react-admin";

export const PoemList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="poem" />
      <NumberField source="total_tokens" />
      <NumberField source="duration" />
    </Datagrid>
  </List>
);

export const PoemShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="poem" />
      <TextField source="prompt" />
      <TextField source="model" />
      <NumberField source="votes" />
      <NumberField source="max_tokens" />
      <NumberField source="prompt_tokens" />
      <NumberField source="total_tokens" />
      <NumberField source="duration" />
    </SimpleShowLayout>
  </Show>
);

export const PoemCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="prompt" fullWidth defaultValue="Generate a brief poem about ..." />
      <NumberInput source="max_tokens" defaultValue="50" />
    </SimpleForm>
  </Create>
)

import { Container } from "@mui/material";

import BasicDrawer from "../component/BasicDrawer";
import RegisterClientForm from "../client/RegisterClientForm";
import ClientTable from "../client/ClienTable";

const Client = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{paddingTop: 7}}>
        <BasicDrawer
          title="Clients"
          description="Register a new client"
          caption="add"
          children={<RegisterClientForm />}
        />
        <ClientTable />
      </Container>
    </>
  );
};

export default Client;

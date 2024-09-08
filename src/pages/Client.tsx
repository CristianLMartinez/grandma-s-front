import { Container } from "@mui/material";
import ClientTable from "../component/ClienTable";
import BasicDrawer from "../component/BasicDrawer";
import RegisterClientForm from "../component/RegisterClientForm";

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

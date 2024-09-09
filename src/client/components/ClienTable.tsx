import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Container,
  IconButton,
  CircularProgress,
  Alert,
  TableFooter,
  TablePagination,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { getClients, deleteClient } from "../service/clientService";
import RegisterClientForm from "./RegisterClientForm";
import TablePaginationActions from "./TablePaginationActions";
import BasicDrawer from "../../component/BasicDrawer";
import { Client } from "../schema/Client";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ClientTable = () => {
  const [open, setOpen] = useState(false);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedClient, setSelectedClient] = useState<any>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await getClients();
        setClients(data);
      } catch (error) {
        setError("Failed to fetch clients. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditClient = (client: Client) => {
    console.log(client);
    setSelectedClient(client);
    setOpen(true);
  };

  const handleDeleteClient = async (document: string) => {
    try {
      console.info("Deleting client with document: ", document);
      await deleteClient(document);
      setClients(clients.filter((client: any) => client.document !== document));
    } catch (error) {
      setError("Failed to delete client. Please try again later.");
    }
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - clients.length) : 0;

  if (loading) {
    return (
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Document</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Delivery Address</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((client: any) => (
                <StyledTableRow key={client.document}>
                  <StyledTableCell component="th" scope="row">
                    {client.name || "N/A"}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {client.document || "N/A"}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {client.email || "N/A"}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {client.deliveryAddress || "N/A"}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {client.phone || "N/A"}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    <IconButton
                      aria-label="edit"
                      onClick={() => handleEditClient(client)}
                    >
                      <EditIcon color="warning" />
                    </IconButton>

                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDeleteClient(client.document)}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <StyledTableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={6}
                count={clients.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      <BasicDrawer
        open={open}
        setOpen={setOpen}
        description="Update client"
        children={<RegisterClientForm client={selectedClient} />}
      />
    </Container>
  );
};

export default ClientTable;

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";

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

function createData(name: string, status: any, table: string, date: string) {
  return { name, status, table, date };
}

export default function TableUsers() {
  const [rows, setRows] = useState([
    createData("Егор", "PAID", "12", "31/10/2024"),
    createData("Сергей", "PAID", "15", "02/11/2024"),
    createData("Константин", "UNPAID", "09", "28/10/2024"),
    createData("Саша", "UNPAID", "2", "01/11/2024"),
    createData("Артем", "UNPAID", "12", "02/11/2024"),
    createData("Василий", "UNPAID", "19", "14/11/2024"),
  ]);
  const [nameToRemove, setNameToRemove] = useState("");
  const [newName, setNewName] = useState("");

  const removePerson = () => {
    setRows(rows.filter((row) => row.name !== nameToRemove));
    setNameToRemove("");
  };
  const addPerson = () => {
    if (newName) {
      setRows((prevRows: any[]) => [
        ...prevRows,
        {
          name: newName,
          status: "UNPAID",
          amount: "0",
          date: new Date().toLocaleDateString(),
        },
      ]);
      setNewName("");
    }
  };
  return (
    <section>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 550, minHeight: 300 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>ИМЯ</StyledTableCell>
              <StyledTableCell align="right">СТАТУС</StyledTableCell>
              <StyledTableCell align="right">СТОЛ</StyledTableCell>
              <StyledTableCell align="right">ДАТА</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
                <StyledTableCell align="right">{row.table}</StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={styles.actions}>
        <div style={styles.removeAct}>
          <TextInput
            style={styles.input}
            placeholder="Введите имя для удаления"
            value={nameToRemove}
            onChangeText={setNameToRemove}
          />
          <Button title="Удалить" onPress={removePerson} />
        </div>
        <div style={styles.addAct}>
          <TextInput
            style={styles.input}
            placeholder="Введите новое имя"
            value={newName}
            onChangeText={setNewName}
          />
          <Button title="Добавить гостя" onPress={addPerson} />
        </div>
      </div>
    </section>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  removeAct: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  addAct: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  actions: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  row: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

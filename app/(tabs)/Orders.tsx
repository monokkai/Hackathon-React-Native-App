import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Layout from "../layouts/article";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import TableAdmin from "../../components/TableAdmin";

const App: React.FC = () => {
  const [totalTables, setTotalTables] = useState(20);

  const decrementTables = () => {
    if (totalTables > 0) {
      setTotalTables(totalTables - 1);
    }
    alert("Стол забронирован!!");
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  return (
    <Layout>
      <View style={styles.container}>
        <div style={styles.logoBox}>
          <Image
            source={{ uri: "../../assets/images/mainLogo.png" }}
            style={styles.logo}
          />
          <Stack direction="row" spacing={2}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src="../../assets/images/user.png" />
            </StyledBadge>
            <button style={styles.buttonExit}>
              <a href="../pages/registration" style={styles.textEdit}>
                ВЫЙТИ
              </a>
            </button>
          </Stack>
        </div>

        <TableAdmin />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  logoBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    marginBottom: 90,
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 200,
    height: 100,
    marginTop: 10,
  },
  tableContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  table: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "lightgray",
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonExit: {
    textDecorationColor: "white",
    backgroundColor: "#e65038",
    cursor: "pointer",
    color: "white",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    borderWidth: 0,
  },
  textEdit: {
    color: "white",
    textDecorationLine: "none",
    textTransform: "uppercase",
  },
  checkboxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    flex: 3,
  },
  checkbox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  button: {
    backgroundColor: "#e65038",
    padding: 15,
    borderRadius: 5,
    width: "80%",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;

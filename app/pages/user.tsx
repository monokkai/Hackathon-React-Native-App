import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { MotiView } from "moti";
import Layout from "../layouts/article";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Orders from "../../components/Orders";
import TableSubAdmin from "../../components/tableSubAdmin";
import { LineChart } from "@mui/x-charts/LineChart";

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("ru-RU", {
  year: "numeric",
});
function createData(name: string, salary: number) {
  return { name, salary };
}

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

export default function HomeScreen() {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  return (
    <ScrollView>
      <Layout>
        <MotiView
          from={{
            opacity: 0,
            translateY: -100,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            type: "timing",
            duration: 500,
          }}
        />

        <section className="main-dashboard" style={styles.mainDashboard}>
          <section className="logoSection" style={styles.logoSection}>
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
                <Avatar
                  alt="Remy Sharp"
                  src="../../assets/images/defaultuser.png"
                />
              </StyledBadge>
              <button style={styles.buttonExit}>
                <a href="../pages/registration" style={styles.textEdit}>
                  ВЫЙТИ
                </a>
              </button>
            </Stack>
          </section>
          <div className="info-container" style={styles.infoContainer}>
            <View style={styles.Date}>
              <Text style={styles.head}>{formattedDate}</Text>
            </View>
            <h2>Мой заработок</h2>
            <h2>2391$</h2>
            <LineChart
              xAxis={[
                {
                  data: [
                    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
                  ],
                },
              ]}
              series={[
                {
                  data: [
                    23, 100, 400, 679, 589, 731, 872, 924, 1232, 2231, 2390,
                  ],
                },
              ]}
              width={500}
              height={300}
            />
          </div>
          <div className="info-container" style={styles.infoContainer}>
            <View style={styles.Date}>
              <Text style={styles.head}>{formattedDate}</Text>
            </View>
            <p></p>
            <TableSubAdmin />
          </div>

          <div className="info-container" style={styles.infoContainer}>
            <View style={styles.DateTable}>
              <Text style={styles.headerBrone}>БРОНИРОВАНИЕ</Text>
              <Orders />
            </View>
          </div>
        </section>
      </Layout>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainDashboard: {
    backgroundColor: "white",
  },
  logoSection: {
    display: "flex",
    justifyContent: "space-around",

    alignItems: "center",
    marginBottom: 20,
  },
  helloText: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    fontFamily: "sans-serif",
  },
  headerBrone: {
    fontSize: 18,
    color: "gray",
  },
  infoContainer: {
    borderRadius: 10,
    margin: 20,
    padding: 20,
    fontFamily: "sans-serif",
    lineHeight: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#edf0ee",
    elevation: 5,
    overflow: "hidden",
    color: "black",
    fontWeight: "bold",
  },
  DateTable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#edf0ee",
  },
  Date: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#edf0ee",
  },
  head: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
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
  sales: {
    width: "100%",
    margin: 20,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 200,
    height: 100,
  },
  textEdit: {
    color: "white",
    textDecorationLine: "none",
    textTransform: "uppercase",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  headerText: {
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  cell: {
    flex: 1,
  },
  cellText: {
    textAlign: "center",
  },
});

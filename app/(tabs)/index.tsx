import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { MotiView } from "moti";
import Layout from "../layouts/article";
import { BarChart } from "@mui/x-charts/BarChart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";


const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("ru-RU", {
  year: "numeric",
});
function createData(name: string, salary: number) {
  return { name, salary };
}

const rows = [
  createData("Egor", 2400),
  createData("Bogdan", 1233),
  createData("Alexander", 2133),
  createData("Gamlet", 941),
  createData("Nikita", 1492),
];
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

export default function HomeScreen() {
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
            {/* <Alert status="error">
              <AlertTitle>Your browser is outdated!</AlertTitle>
              <AlertDescription>
                Your Chakra experience may be degraded.
              </AlertDescription>
            </Alert> */}
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
          </section>
          <div className="info-container" style={styles.infoContainer}>
            <View style={styles.Date}>
              <Text style={styles.head}>{formattedDate}</Text>
            </View>
            <h2>Входящие заявки</h2>
            <h2>4.652</h2>
            <LineChart
              xAxis={[
                {
                  data: [1, 2, 3, 5, 8, 10, 16, 20, 24, 25, 26, 27, 28, 29, 30],
                },
              ]}
              series={[
                {
                  data: [321, 23, 222, 145, 321, 70, 100, 60, 148, 420, 212],
                },
              ]}
              width={500}
              height={300}
            />
          </div>
          <div className="info-container" style={styles.infoContainer}>
            <View style={styles.Date}>
              <Text style={styles.header}>{formattedDate}</Text>
            </View>
            <h2>Расходы</h2>
            <h2>1.324.421</h2>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 471923, label: "Закупки" },
                    { id: 1, value: 132631, label: "Ремонт" },
                    { id: 2, value: 537912, label: "Зарплата" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
          <div className="info-container" style={styles.infoContainer}>
            <View style={styles.Date}>
              <Text style={styles.header}>{formattedDate}</Text>
            </View>
            <h2>Продажи</h2>
            <h2>513.532</h2>

            <LineChart
              xAxis={[
                {
                  data: [1, 2, 3, 5, 8, 10, 16, 20, 24, 25, 26, 27, 28, 29, 30],
                },
              ]}
              series={[
                {
                  data: [
                    43243, 12313, 13433, 4322, 6423, 23123, 5728, 32323, 12145,
                    9847, 6453, 8931, 18923, 23000,
                  ],
                  area: true,
                  baseline: "min",
                },
              ]}
              width={500}
              height={300}
            />
          </div>

          <div className="info-container" style={styles.infoContainer}>
            <View style={styles.Date}>
              <Text style={styles.header}>{formattedDate}</Text>
            </View>
            <h2>Остатки на счетах</h2>
            <h2>973.421</h2>

            <BarChart
              xAxis={[
                { scaleType: "band", data: ["Employees", "VIP", "Director"] },
              ]}
              series={[
                { data: [222134, 341212, 567392] },
                { data: [93000, 157000, 460000] },
                { data: [13022, 25261, 20589] },
              ]}
              width={400}
              height={300}
            />
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
  infoContainer: {
    // border: "1px solid lightgray",
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
    marginTop: 10,
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

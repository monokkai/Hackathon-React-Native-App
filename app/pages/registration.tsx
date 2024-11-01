import Layout from "../layouts/article.js";
import { StyleSheet } from "react-native";
import {
  Image,
  ScrollView,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { useState } from "react";
const Registration = () => {
  // const [login, setLogin] = useState("login");
  // const [password, setPassword] = useState("password");
  // const [fullName, setFullName] = useState("fullName");
  // const [phoneNumber, setPhoneNumber] = useState("phoneNumber");
  // const [email, setEmail] = useState("email");

  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch("192.168.97.188:8080/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         login,
  //         password,
  //         fullName,
  //         phoneNumber,
  //         email,
  //       }),
  //     });

  //   if (response.ok) {
  //     console.log("Регистрация успешна!");
  //   } else {
  //     console.error("Ошибка при регистрации:", response.status);
  //   }
  // } catch (error) {
  //   console.error("Ошибка при отправке данных:", error);
  // }

  return (
    <ScrollView>
      <Layout>
        <div style={styles.colorizeDivHead}>&nbsp;</div>

        <section style={styles.registration}>
          <div>
            <Image
              source={{ uri: "../../assets/images/mainLogo.png" }}
              style={styles.logo}
            />
            <h1 style={styles.text}>РЕГИСТРАЦИЯ</h1>
            <form style={styles.formColl}>
              <div>
                <input
                  type="text"
                  name="login"
                  placeholder="Логин"
                  style={styles.inputField}
                  required
                />
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  style={styles.inputField}
                  required
                />
                <br />
                <input
                  type="text"
                  name="fullName"
                  placeholder="ФИО"
                  style={styles.inputField}
                />
                <br />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Номер телефона"
                  style={styles.inputField}
                />
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  style={styles.inputField}
                  required
                />
                <br />
                <div>
                  <button style={styles.regButton}>
                    <a href="../pages/personInfo" style={styles.linkIn}>
                      Создать аккаунт
                    </a>
                  </button>
                </div>
              </div>
              <div style={styles.singInBlock}>
                <p>Уже есть аккаунт?</p>
                <a href="../pages/login" style={styles.link}>
                  Войти
                </a>
              </div>
            </form>
          </div>
        </section>
        <div style={styles.colorizeDivFooter}>&nbsp;</div>
      </Layout>
    </ScrollView>
  );
};
export default Registration;

const styles = StyleSheet.create({
  formColl: {
    display: "flex",
    flexDirection: "column",
  },
  colorizeDivHead: {
    backgroundColor: "orange",
    height: 100,
    width: "100%",
    textAlign: "left",
  },
  colorizeDivFooter: {
    backgroundColor: "#e65038",
    height: 100,
    width: "100%",
    textAlign: "left",
  },
  registration: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 4,
    fontFamily: "Sans-serif",
    height: 800,
  },
  singInBlock: {
    lineHeight: 1,
    textAlign: "center",
  },
  inputField: {
    borderRadius: 7,
    height: 30,
    width: 200,
    padding: 5,
    borderWidth: 1.5,
    borderColor: "lightgray",
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    color: "#8a191f",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 200,
    height: 100,
    marginTop: 20,
  },
  regButton: {
    backgroundColor: "#e65038",
    borderRadius: 5,
    color: "white",
    width: "100%",
    height: 40,
    borderWidth: 0,
    cursor: "pointer",
  },
  link: {
    textDecorationLine: "none",
    color: "#8a191f",
  },
  linkIn: {
    color: "white",
    textDecorationLine: "none",
  },
});

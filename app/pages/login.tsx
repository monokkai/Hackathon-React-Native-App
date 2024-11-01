import Layout from "../layouts/article.js";
import { StyleSheet } from "react-native";
import { Image, ScrollView, Text, View } from "react-native";
import { useState } from "react"; // Импортируем useState для управления состоянием

const Registration = () => {
  const [email, setEmail] = useState(""); // Состояние для email
  const [password, setPassword] = useState(""); // Состояние для пароля
  const [error, setError] = useState(""); // Состояние для ошибок

  const handleLogin = async (y: React.FormEvent<HTMLFormElement>) => {
    // Указываем тип параметра
    y.preventDefault(); // Предотвращаем перезагрузку страницы

    try {
      const response = await fetch("http://192.168.97.188:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка входа: " + response.statusText);
      }

      const data = await response.json();

      console.log("Успешный вход", data);
    } catch (error) {}
  };

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
            <h1 style={styles.text}>ВХОД</h1>
            <form onSubmit={handleLogin}>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  style={styles.inputField}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  style={styles.inputField}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <br />
                <div>
                  <button type="submit" style={styles.regButton}>
                    <a style={styles.linkAhead} href="../pages/user">
                      ВОЙТИ
                    </a>
                  </button>
                </div>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}

              <div style={styles.singInBlock}>
                <p>Нет аккаунта? Создайте его!</p>
                <a href="../pages/registration" style={styles.link}>
                  Зарегистрироваться
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
  colorizeDivHead: {
    backgroundColor: "#e65036",
    height: 100,
    width: "100%",
    textAlign: "left",
  },
  colorizeDivFooter: {
    backgroundColor: "orange",
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
    backgroundColor: "orange",
    borderRadius: 5,
    color: "white",
    width: "100%",
    height: 40,
    borderWidth: 0,
    cursor: "pointer",
  },
  link: {
    textDecorationLine: "none",
    color: "orange",
    textAlign: "center",
  },
  linkAhead: {
    color: "white",
    textDecorationLine: "none",
  },
});

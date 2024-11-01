import Layout from "../layouts/article.js";
import { StyleSheet } from "react-native";
import { Image, ScrollView, Text, View } from "react-native";

const PersonInfo = () => {
  return (
    <ScrollView>
      <Layout>
        <div style={styles.colorizeDivHead}>&nbsp;</div>

        <section style={styles.registration}>
          <div>
            <div style={styles.noLineHeight}>
              <h1 style={styles.text}>ЗАПОЛНИТЕ</h1>
              <h1 style={styles.text}>ИНФОРМАЦИЮ</h1>
            </div>
            <form style={styles.formColl}>
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="ФИО контактного лица*"
                  style={styles.inputField}
                  required
                />
                <br />
                <input
                  type="text"
                  name="positionName"
                  placeholder="Должность контактного лица*"
                  style={styles.inputField}
                  required
                />
                <br />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Название компании"
                  style={styles.inputField}
                />
                <br />
                <input
                  type="text"
                  name="sphereName"
                  placeholder="Сфера деятельности*"
                  style={styles.inputField}
                  required
                />
                <br />
                <input
                  type="textarea"
                  name="description"
                  placeholder="Описание*"
                  style={styles.inputField}
                  required
                />
                <br />
                <input
                  type="text"
                  name="linkName"
                  placeholder="Ссылка на сайт"
                  style={styles.inputField}
                />
                <br />
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Телефон"
                  style={styles.inputField}
                />
                <br />
                <input
                  type="text"
                  name="tgName"
                  placeholder="Ник телеграмм"
                  style={styles.inputField}
                />
                <br />
                <input
                  type="text"
                  name="dateFormat"
                  placeholder="Когда готов к встрече*"
                  style={styles.inputField}
                  required
                />
                <br />
                <input
                  type="text"
                  name="tariffName"
                  placeholder="Тарифный план*"
                  style={styles.inputField}
                  required
                />
                <br />

                <div>
                  <button style={styles.regButton}>
                    <a href="../pages/participantsList" style={styles.linkIn}>
                      Продолжить
                    </a>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <div style={styles.colorizeDivFooter}>&nbsp;</div>
      </Layout>
    </ScrollView>
  );
};

export default PersonInfo;

const styles = StyleSheet.create({
  noLineHeight: {
    lineHeight: 0.5,
  },
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

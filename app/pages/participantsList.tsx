import React from "react";
import { StyleSheet } from "react-native";
import Accordion from "../../components/Accordion";
import { ScrollView, Image, TouchableOpacity } from "react-native";
import Layout from "../layouts/article";
import { useState } from "react";

const ParticipantsList = () => {
  return (
    <ScrollView>
      <Layout>
        <section>
          <div style={styles.colorizeDivHead}>&nbsp;</div>

          <div style={styles.inputBox}>
            {/* <input
            type="text"
            style={styles.input}
            placeholder="Какая сфера вас интересует?"
          /> */}
          </div>
          <h1 style={styles.title}>СПИСОК ПРИЕМА</h1>
          <div style={styles.accordion}>
            <Accordion />
          </div>
          <h2 style={styles.title2}>СФЕРЫ ДЕЯТЕЛЬНОСТИ</h2>
          <div style={styles.spheres}>
            <div style={styles.sphereBlock}>
              <div>
                <h5>Рестораны</h5>
              </div>
              <div style={styles.imgRight}>
                <Image
                  source={{ uri: "../../assets/images/fork.png" }}
                  style={styles.img}
                />
              </div>
            </div>
            <div style={styles.sphereBlock}>
              <div>
                <h5>Хозяйство</h5>
              </div>
              <div style={styles.imgRight}>
                <Image
                  source={{ uri: "../../assets/images/kolos.png" }}
                  style={styles.img}
                />
              </div>
            </div>
          </div>
          <div style={styles.spheres}>
            <div style={styles.sphereBlock}>
              <div>
                <h5>Отели</h5>
              </div>
              <div style={styles.imgRight}>
                <Image
                  source={{ uri: "../../assets/images/hotel.png" }}
                  style={styles.img}
                />
              </div>
            </div>
            <div style={styles.sphereBlock}>
              <div>
                <h5>IT</h5>
              </div>
              <div style={styles.imgRight}>
                <Image
                  source={{ uri: "../../assets/images/chatbot.png" }}
                  style={styles.img}
                />
              </div>
            </div>
          </div>
          <div style={styles.spheres}>
            <div style={styles.sphereBlock}>
              <div>
                <h5>Логистика</h5>
              </div>
              <div style={styles.imgRight}>
                <Image
                  source={{ uri: "../../assets/images/truck.png" }}
                  style={styles.img}
                />
              </div>
            </div>
            <div style={styles.sphereBlock}>
              <div style={styles.imgRight}>
                <h5>Инвестиции</h5>
              </div>
              <div>
                <Image
                  source={{ uri: "../../assets/images/invests.png" }}
                  style={styles.img}
                />
              </div>
            </div>
          </div>

          <div style={styles.buttonEnd}>
            <button style={styles.button}>
              <a style={styles.link} href="../pages/user">
                ПРОДОЛЖИТЬ
              </a>
            </button>
          </div>

          <div style={styles.colorizeDivFooter}>&nbsp;</div>
        </section>
      </Layout>
    </ScrollView>
  );
};

export default ParticipantsList;

const styles = StyleSheet.create({
  buttonEnd: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  link: {
    color: "white",
    textDecorationLine: "none",
  },
  button: {
    borderRadius: 5,
    backgroundColor: "orange",
    color: "white",
    padding: 10,
    borderWidth: 0,
    width: 200,
    height: 40,
  },
  img: {
    width: 20,
    height: 20,
  },
  imgRight: {
    display: "flex",
  },
  sphereBlock: {
    padding: 10,
    width: 120,
    height: 120,
    backgroundColor: "lightgray",
    borderRadius: 10,
    fontFamily: "Sans-serif",
    fontSize: 23,
    color: "black",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer",
  },
  spheres: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    margin: 10,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    justifyContent: "space-evenly",
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
  title: {
    fontFamily: "Sans-serif",
    fontSize: 26,
    color: "#e65038",
    textAlign: "center",
  },
  title2: {
    fontFamily: "Sans-serif",
    fontSize: 26,
    color: "orange",
    textAlign: "center",
  },
  accordion: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    height: "30%",
  },
  input: {
    marginTop: 20,
    width: 300,
    height: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

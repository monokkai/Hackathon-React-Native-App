import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const BookingScreen = () => {
  const [availableTables, setAvailableTables] = useState(
    Array.from({ length: 20 }, (_, index) => index + 1)
  );

  const handleBooking = (tableNumber: number) => {
    const updatedTables = availableTables.filter(
      (table) => table !== tableNumber
    );
    setAvailableTables(updatedTables);

    if (updatedTables.length === 0) {
      Alert.alert("Все столики были забронированы!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        {availableTables.length > 0 ? (
          availableTables.map((tableNumber) => (
            <TouchableOpacity
              key={tableNumber}
              onPress={() => handleBooking(tableNumber)}
            >
              <View style={styles.table}>
                <Text style={styles.tableText}>{tableNumber}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noTables}>Нет доступных столиков!</Text>
        )}
      </View>
      <Button
        title="ОТМЕНИТЬ БРОНЬ"
        onPress={() =>
          setAvailableTables(
            Array.from({ length: 20 }, (_, index) => index + 1)
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#edf0ee",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  table: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#e65038", //цвет кружков
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  tableText: {
    color: "white",
    fontSize: 20,
  },
  noTables: {
    fontSize: 18,
    color: "red",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default BookingScreen;

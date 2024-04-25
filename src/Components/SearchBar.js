import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";

const SearchBar = ({ term, onTermChange, onTermSubmitted }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <View
        style={{
          marginTop: 50,
          borderColor: "black",
          borderWidth: 1,
          height: 50,
          backgroundColor: "lightgrey",
          flexDirection: "row",
          borderRadius: 10,
        }}
      >
        <Image
          style={{ height: 40, width: 40, marginLeft: 5, marginTop: 4 }}
          source={require("../assets/Images/search (3).png")}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="search"
          value={term}
          style={{
            marginLeft: 10,
            fontSize: 20,
            flex: 1,
          }}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmitted}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchBar;

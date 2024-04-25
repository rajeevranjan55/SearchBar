import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import SearchBar from "../Components/SearchBar";
import axios from "axios";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    Data(term);
  }, [term]);

  useEffect(() => {
    return () => {
      setShowText(true);
    };
  }, [term]);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const screenHeight = event.nativeEvent.layoutMeasurement.height;
    const contentHeight = event.nativeEvent.contentSize.height;

    if (offsetY + screenHeight >= contentHeight / 5) {
      setShowText(false);
    } else {
      setShowText(true);
    }
  };
  const Data = async (searchQuery = "") => {
    const url = `https://dummyjson.com/products/search?q=${term}`;
    const response = await axios.get(url);
    setResults(response.data.products);
    setShowText(true);
  };

  // const filterResult = results.filter((item) =>
  //   item.brand.toLowerCase().includes(term.toLowerCase())
  // );

  return (
    <View style={{ marginHorizontal: 15 }}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmitted={Data} />
      {showText && <Text>we have found {results.length}</Text>}
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        {results.map((item, index) => {
          return (
            <View>
              <Text key={index}>{item.description}</Text>
              <Text key={item.brand} style={{ fontWeight: "bold" }}>
                {item.brand}
              </Text>
              <FlatList
                data={item.images}
                horizontal
                renderItem={({ item }) => (
                  <Image
                    source={{ uri: item }}
                    style={{
                      height: 100,
                      width: 100,
                      marginRight: 10,
                      borderRadius: 4,
                    }}
                  />
                )}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

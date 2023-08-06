import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { dummydata2 } from "../../../data/dummydata2";
import { TouchableOpacity } from "react-native";
import { TextInput, Image } from "react-native";
import { dummydata } from "../../../data/dummydata";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import { Modal } from "react-native";
import { Pressable } from "react-native";

const AssignOrders = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
    // Perform your search logic here
  };
  const renderItem = ({ item }) => (
    <>
      <TouchableOpacity
        style={{
          height: 80,
          flex: 1,
          borderRadius: 5,
          marginHorizontal: 10,
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginVertical: 6,
          paddingLeft: 60,
          elevation: 1,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{item.from}</Text>
          <Text>{item.to}</Text>
          <Text>{item.price}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{item.date}</Text>
          <Text>Express</Text>
        </View>
      </TouchableOpacity>
    </>
  );
  const renderItem2 = ({ item }) => (
    <View>
      <TouchableOpacity
        onPress={toggleModal}
        style={{
          height: 91,
          flex: 1,
          borderRadius: 5,
          elevation: 3, // Add shadow for Android (higher values for stronger shadow)
          marginHorizontal: 10,
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginVertical: 6,
          paddingLeft: 60,
        }}
      >
        <View style={{}}>
          <Image
            source={item.img}
            style={{
              height: 40,
              width: 40,
              position: "absolute",
              borderRadius: 20,
              left: -50,
              top: 20,
            }}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, paddingBottom: 3 }}>
            {item.name}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {item.rating}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ paddingBottom: 3 }}>{item.nbr_delivries}</Text>
          {/* <TouchableOpacity
        style={{ backgroundColor: "#053582", borderRadius: 8 , height : 21 , width :51}}
      >
        <Text style={{ alignSelf: "center" , color : 'white'}}>Assign</Text>
      </TouchableOpacity> */}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Entypo
              name="location-pin"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {item.location}
            </Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#053582",
              borderRadius: 8,
              height: 25,
              width: 60,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "white",
                fontWeight: "700",
                padding: 2,
              }}
            >
              Assign
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{}}>Assign</Text>
            <View style={{flexDirection :'row'}}>
            <Image
            source={require('../../../assets/TDele.png')}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              
            }}
          />
          
          <View style={{paddingLeft : 5}}>
          <Text>Tosin Dele</Text>
          <Text>Ikeja, Lagos.</Text>
          <Text>to : </Text>
          </View>
          
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!isModalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <FlatList
        data={dummydata2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <TouchableOpacity style={{}}>
        <Text style={{ alignSelf: "center", fontSize: 16, fontWeight: "500" }}>
          Select rider
        </Text>
      </TouchableOpacity>
      {/* <TextInput
        style={{
          height: 50,
          borderRadius: 20,
          marginTop: 10,
          backgroundColor: "#EFEEEE",
        }}
      >
        <Text style={{}}>Search order</Text>
      </TextInput> */}
      <View style={{ marginHorizontal: 20 }}>
        <SearchBar
          placeholder="Search..."
          onChangeText={handleSearchChange}
          value={searchText}
        />
      </View>

      <View
        style={{ height: 1, marginTop: 10, backgroundColor: "black" }}
      ></View>
      <FlatList
        data={dummydata}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem2}
        style={{}}
      />
    </ScrollView>
  );
};

export default AssignOrders;

const styles = StyleSheet.create({
  centeredView: {
    height : '80%',
    width :"100%",
    justifyContent: "center",
    alignItems: "center",
    
    backgroundColor :'red',
    position :'absolute',
    bottom : 0
  },
  modalView: {
    
    width : "100%",
    height : "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

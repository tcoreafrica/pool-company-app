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
import PhaseLoso from "../../../constants/PhaseLogo";
import { AntDesign } from "@expo/vector-icons";
import TimeLogo from "../../../constants/TimeLogo";

const AssignOrders = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTextModal, setSearchTextModal] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalvisible, setmodalvisible] = useState(false);
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
        // onPress={() => setmodalvisible(!modalvisible)}
        style={{
          height: 80,
          flex: 1,
          borderRadius: 10,
          marginHorizontal: 10,
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginVertical: 6,
          paddingLeft: 40,
          borderColor: "#DCD9D9",
          borderWidth: 1,
        }}
      >
        <View style={{ position: "absolute", top: 20, left: 15 }}>
          <PhaseLoso />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{item.from}</Text>
          <AntDesign name="arrowright" size={24} color="black" />
          <Text style={{ fontSize: 12 }}>{item.to}</Text>
          <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <TimeLogo style={{ marginVertical: 3 }} />
            <Text style={{ paddingLeft: 5 }}>{item.date}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TimeLogo style={{ marginVertical: 3 }} />
            <Text style={{ paddingLeft: 5, color: "red" }}>Express</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalvisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setmodalvisible(!modalvisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>
              Assign
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../../assets/TDele.png")}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                }}
              />

              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontWeight: "bold" }}>
                  Tosin Dele
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Entypo
                    name="location-pin"
                    size={24}
                    color="black"
                    style={{ marginRight: 2 }}
                  />
                  <Text>Ikeja, Lagos.</Text>
                </View>
              </View>
              <View style={{ paddingLeft: 30 }}>
                <Text style={{ fontWeight: "bold", paddingVertical: 2 }}>
                  to :{" "}
                </Text>
              </View>
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text style={{ fontWeight: "bold", alignSelf: "center" }}>
                Select order from company order list
              </Text>
            </View>
            <View>
              <SearchBar
                placeholder="Search..."
                onChangeText={handleSearchChange}
                value={searchText}
              />
            </View>
            <View>
              <View style={{ marginVertical: 10 }}>
                <Text style={{fontSize : 15 , fontWeight :"600"}}>Ikeja</Text>
              </View>
              
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                backgroundColor: "blue",
                height : 40,
                elevation: 2,
                marginTop :10
              }}
              onPress={() => setmodalvisible(!modalvisible)}
            >
              <Text style={{alignSelf : 'center' , paddingVertical : 10   , color : 'white' , fontWeight :'800'}}>close</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal> */}
    </>
  );
  const renderItem2 = ({ item }) => (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={toggleModal}
        style={{
          height: 91,
          flex: 1,
          borderRadius: 10,
          borderColor: "#DCD9D9",
          borderWidth: 1,
          marginHorizontal: 10,
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginVertical: 6,
          paddingLeft: 60,
          shadowColor: "gray",
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
            onPress={() => setmodalvisible(true)}
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
            <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>
              Assign
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../../assets/TDele.png")}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                }}
              />

              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontWeight: "bold" }}>Tosin Dele</Text>
                <View style={{ flexDirection: "row" }}>
                  <Entypo
                    name="location-pin"
                    size={24}
                    color="black"
                    style={{ marginRight: 2 }}
                  />
                  <Text>Ikeja, Lagos.</Text>
                </View>
              </View>
              <View style={{ paddingLeft: 30 }}>
                <Text style={{ fontWeight: "bold", paddingVertical: 2 }}>
                  to :{" "}
                </Text>
              </View>
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text style={{ fontWeight: "bold", alignSelf: "center" }}>
                Select order from company order list
              </Text>
            </View>
            <View>
              <SearchBar
                placeholder="Search..."
                onChangeText={handleSearchChange}
                value={searchText}
              />
            </View>
            <View>
              <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "600" }}>Ikeja</Text>
              </View>
              <View style={{}}>
                <FlatList
                  data={dummydata2}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={renderItem}
                  style={{}}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                backgroundColor: "#053582",
                height: 40,
                elevation: 2,
                marginTop: 10,
              }}
              onPress={() => setModalVisible(!isModalVisible)}
            >
              <Text
                style={{
                  alignSelf: "center",
                  paddingVertical: 10,
                  color: "white",
                  fontWeight: "800",
                }}
              >
                close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalvisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setmodalvisible(!modalvisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            marginTop: 22,
          }}
        >
          <View
            style={{
              margin: 20,
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
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../../assets/TDele.png")}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                }}
              />

              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontWeight: "bold" }}>Tosin Dele</Text>
                <View style={{ flexDirection: "row" }}>
                  <Entypo
                    name="location-pin"
                    size={24}
                    color="black"
                    style={{ marginRight: 2 }}
                  />
                  <Text>Ikeja, Lagos.</Text>
                </View>
              </View>
              <View style={{ paddingLeft: 30 }}>
                <Text style={{ fontWeight: "bold", paddingVertical: 2 }}>
                  to :{" "}
                </Text>
              </View>
            </View>
            <View style={{marginTop : 8}}>
              <Text style={{alignSelf : 'center' , fontWeight :'bold' , fontSize : 20}}>to order</Text>
            </View>
            <View style={{marginTop : 8 , flexDirection : 'row', justifyContent:'space-between'}}>
                <Text>Phase 1, Lekki</Text>
                <Text>Oba Akran, Ikeja</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity
                // onPress={()=>navigation.navigate('FinaleScreen')}
                style={{
                  height: 40,
                  backgroundColor: "#053582",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 7,
                    fontSize: 17,
                  }}
                >
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginVertical: 15 }}>
              <TouchableOpacity
                onPress={() => setmodalvisible(!modalvisible)}
                style={{
                  height: 40,
                  backgroundColor: "white",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 7,
                    fontSize: 17,
                  }}
                >
                  Back
                </Text>
              </TouchableOpacity>
            </View>
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
        <Text
          style={{
            alignSelf: "center",
            fontSize: 16,
            fontWeight: "500",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
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
      <View style={{ marginHorizontal: 20, marginBottom: 5 }}>
        <SearchBar
          placeholder="Search..."
          onChangeText={handleSearchChange}
          value={searchText}
        />
      </View>

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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80%",
  },
  button: {
    borderRadius: 20,

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
    alignSelf: "center",
  },
  modalText: {
    alignSelf: "center",
  },
});

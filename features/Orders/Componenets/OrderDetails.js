import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const OrderDetails = ({data,location}) => {
    console.log(data)
    return (
        <View style={{
            flex: 1,
            marginHorizontal: 10,
            paddingVertical: 10,
            elevation: 0.5,
        }}>
            <View
                style={{ height: 85, justifyContent: 'center', backgroundColor: '#053582', borderTopLeftRadius: 11, borderTopRightRadius: 11 }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                    <Text style={styles.textOne}>Order No: 003232</Text>
                    <Text style={styles.textOne}>2pm</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 6, justifyContent: 'space-between', paddingHorizontal: 10 }}>
                    <Text style={styles.textTwo}>N2,500</Text>
                    <Text style={styles.textThree}>Express (1hr)</Text>
                </View>
            </View>
            <View
                style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 15, alignItems: 'center' }}
            >
                <Text style={styles.textFour}>Make this delivery for:</Text>
                <Text style={{ fontWeight: '700', fontSize: 16, paddingLeft: 10, textAlign: 'center' }}>N2,500</Text>
            </View>
            <View
                style={{ flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center' }}
            >
                <Text style={styles.textFour}>Customer is going to pay Cash</Text>
                <Text style={{ fontWeight: '700', fontSize: 16, paddingLeft: 5, textAlign: 'center' }}>{data?.amount}</Text>
            </View>
            <View style={styles.PickUp}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../Assets/Union.png')} />
                    <Text style={styles.textFive}>Pickup</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    <Image source={require('../Assets/Frame.png')} />
                    <View>
                        <Text style={styles.textLocation}>{location.from}</Text>
                        <Text style={styles.textFive}>{data.customer.name}</Text>
                        <Text style={styles.textFive}>{data.customer.phone}</Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', marginTop: 6 }}>
                    <MaterialCommunityIcons name="radiobox-marked" size={24} color="black" />
                    <Text style={styles.textFive}>Landmark: Ancilla Hospital</Text>
                </View>

            </View>
            <View style={styles.DropOff}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../Assets/Marker.png')} />
                    <Text style={styles.textFive}>Dropoff</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    <Image source={require('../Assets/Frame.png')} />
                    <View>
                        <Text style={styles.textLocation}>{location.to}</Text>
                        <Text style={styles.textFive}>{data.receiver.name}</Text>
                        <Text style={styles.textFive}>{data.receiver.phone}</Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', marginTop: 6 }}>
                    <MaterialCommunityIcons name="radiobox-marked" size={24} color="black" />
                    <Text style={styles.textFive}>MTN Towerhouse</Text>
                </View>

            </View>
            <TouchableOpacity

                style={styles.ButtonInput}
            >
                <Text
                    style={{
                        color: "white",
                        fontWeight: "700",
                        textAlign: 'center',

                        fontSize: 15,
                    }}
                >
                    Accept Order
                </Text>
            </TouchableOpacity>


        </View>
    )
}

export default OrderDetails

const styles = StyleSheet.create({
    textOne: {
        color: 'white', fontWeight: '400', fontSize: 14
    },
    textTwo: {
        color: 'white', fontWeight: '700', fontSize: 16
    },
    textThree: {
        color: 'white', fontWeight: '700', fontSize: 14
    },
    textFour: {
        fontWeight: '700', fontSize: 14, color: '#92929D'

    },
    textFive: {
        paddingLeft: 8, color: '#92929D', fontWeight: '400'
    },
    ButtonInput: {
        height: 50, justifyContent: 'center', backgroundColor: "#053582", borderRadius: 10, marginHorizontal: 20, marginTop: 15, marginBottom: 15
    },
    DropOff: {
        paddingHorizontal: 20, marginTop: 10, height: 144, justifyContent: 'center', marginTop: 10
    },
    PickUp: {
        paddingHorizontal: 20, height: 144, justifyContent: 'center', marginTop: 10
    },
    textLocation: {
        fontSize: 14, fontWeight: '700', paddingLeft: 6
    }
});
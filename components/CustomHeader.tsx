import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Image source={require('../assets/ethiotelecom.png')} style={styles.logo1} />


                <Image source={require('../assets/tellbirr.png')} style={styles.logo2} />

            </View>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 3,
        padding: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 6
    },
    logo1: {
        width: 90,
        height: 90,
        // resizeMode:'contain'
    },
    logo2: {
        width: 80,
        height: 80,
        // resizeMode: 'contain'
    }
})
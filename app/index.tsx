import { Animated, Easing, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { useEffect, useRef, useState } from 'react';

const data = [
    { label: 'English', value: '1' },
    { label: 'አማርኛ', value: '2' },
    { label: 'Afaa Oromoo', value: '3' },
    { label: 'ትግርኛ', value: '4' },
    { label: 'Af Somali', value: '5' },

];

const HomePage = () => {
    const [value, setValue] = useState(data[0].value);
    const scrollX = useRef(new Animated.Value(0)).current;
    const textWidth = useRef(0);

    const measureText = (event: any) => {
        textWidth.current = event.nativeEvent.layout.width + 50;
    };
    const duration = 4000;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.timing(scrollX, {
                toValue: -textWidth.current,
                duration: duration | 4000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        );
        animation.start();
        return () => {
            animation.stop();
        };
    }, [scrollX, duration]);
    const [value1, onChangeText] = useState('+251935416737');


    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.bgImage} source={require('../assets/bg.jpg')} />
            <View style={styles.innerContainer}>
                <View style={styles.language}>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        // maxHeight={300}
                        labelField="label"
                        valueField="value"
                        value={value}
                        onChange={item => {
                            setValue(item.value);
                        }}
                    />
                </View>
                <View style={{ flexDirection: 'column', marginVertical: 80, }}>
                    <View style={{ marginHorizontal: 40, marginBottom: 25, overflow:'hidden' }} >
                        <Animated.View
                            style={[
                                styles.textContainer,
                                { transform: [{ translateX: scrollX }] },
                            ]}
                        >
                            <Text onLayout={measureText} style={{ fontWeight: 'bold', fontSize: 18, color: '#0496C7', textAlign: 'center' }} >
                                Welcome to telebirr SuperApp!
                            </Text>
                        </Animated.View>
                    </View>
                    <View style={{ marginBottom: 25 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#0496C7', textAlign: 'center' }}>
                            All-in-one
                        </Text>
                    </View>
                    <View style={{ marginBottom: 25 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, textDecorationLine: 'underline', textDecorationColor: '#0496C7', textAlign: 'center' }}>
                            Login
                        </Text>
                    </View>
                    <Text style={{ textAlign: 'left', padding: 4 }}>Mobile Number</Text>
                    <View
                        style={{
                            backgroundColor: 'white',
                            borderColor: 'gray',
                            borderWidth: 1,
                            borderRadius: 8,
                            marginBottom: 30,
                        }}>
                        <TextInput
                            onChangeText={text => onChangeText(text)}
                            value={value1}
                            style={{ padding: 10, paddingHorizontal: 20, textAlign: 'left' }}
                        />
                    </View>
                    <View
                        style={{ marginBottom: 30 }}>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            backgroundColor: '#0496C7',
                            padding: 10,
                            paddingVertical: 14,
                            borderRadius: 8,
                        }} onPress={(value) => console.log(value)}>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 25, flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', color: '#808080' }}>
                            Don't Have an account ?
                        </Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', color: '#B0FC38' }}>
                            Create New Account
                        </Text>
                    </View>
                    <View style={{ marginBottom: 25, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', color: '#B0FC38' }}>
                            TellHub
                        </Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', color: '#B0FC38' }}>
                            Help
                        </Text>
                    </View>


                </View>
                <View style={{ marginTop: 25, flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center', color: '#B0FC38', paddingBottom: 3 }}>
                        Terms and Conditions
                    </Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', color: '#808080' }}>
                        @2023 Ethio telecom,All right reserved
                    </Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', color: '#808080' }}>
                        Version 1.0.0
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        marginHorizontal: 15,
        marginVertical: 4,
        padding: 5,
    },
    language: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    dropdown: {
        height: 50,
        width: '50%',

    },

    placeholderStyle: {
        fontSize: 16,

    },
    selectedTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginStart: 50,

    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },

})
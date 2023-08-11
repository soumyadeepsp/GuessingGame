import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function PrimaryButton(props) {
    return (
        <View>
            <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#72063c' : '#4e0329'}]}
                onPress={props.onPress} android_ripple={{color: '#640233'}}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    buttonPressingStyle: {
        color: 'yellow'
    }
});

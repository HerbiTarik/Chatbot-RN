import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native'

export default function App() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={styles.message}>
                    <Text>Results to be shown here</Text>
                </Text>
                <View style={styles.component}>
                    <View style={styles.inputComponent}>
                        <TextInput placeholder="Enter your question" />
                    </View>
                    <TouchableOpacity>
                        <View style={styles.sendComponent}>
                            <Text>Send</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        flex: 1,
    },
    component: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    sendComponent: {
        backgroundColor: 'red',
    },
    inputComponent: {
        flex: 1,
    },
})

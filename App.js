import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import axios from 'axios'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native'

export default function App() {
    const [inputMessage, setInputMessage] = useState('')
    //touchableOpacity
    //Pour récupérer seulement l'information on utilise la method:"GET"/ pour faire entrer l'information à partir de notre application on utilise "POST"
    // "headers" pour spécifier le type du contenu
    const handleButtonClick = () => {
        const apiKey = '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'
        console.log(inputMessage)

        fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer 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',
            },
            body: JSON.stringify({
                prompt: inputMessage,
                model: 'text-davinci-003',
            }), //pour convertir l'objet javascript sous forme d'un string
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    //textInput
    const handleTextInput = (text) => {
        setInputMessage(text)
        console.log(text)
    }

    //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

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={styles.message}>
                    <Text>Results to be shown here</Text>
                </Text>
                <View style={styles.component}>
                    <View style={styles.inputComponent}>
                        <TextInput
                            placeholder="Enter your question"
                            onChangeText={handleTextInput}
                        />
                    </View>
                    <TouchableOpacity onPress={handleButtonClick}>
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

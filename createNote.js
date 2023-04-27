import React from "react";
import { View, TextInput, Text, Button } from "react-native";

function createNote({ setInputText, saveNote, inputText }) {

    return (
        <View style={styles.TextStuff} >
            <TextInput
                value={inputText}
                onChangeText={setInputText}
                style={{ color: "#000", fontSize: 22 }}
                multiline={true}
                autoFocus
                selectionColor="#fff"
            />
            <Button title="Save" onPress={saveNote} />
        </View>)
}

export default createNote;

const styles = () => StyleSheet.create({
    TextStuff: {
        background: transparent,
        border: "none",
        color: "#fff",
        resize: "none",
    }
})

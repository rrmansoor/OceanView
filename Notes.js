import { useState } from "react";
import { Text, Button, View } from "react-native";
import CreateNote from "./CreateNote";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

function Notes() {
    const [notes, setNotes] = useState("");

    const saveNote = async () => {
        const value = await AsyncStorage.getItem("NOTES")
        const n = value ? JSON.parse(value) : []
        n.push(note)
        await AsyncStorage.setItem("NOTES", JSON.stringify(n)).then(() => navigation.navigate("Homepage"))
        setNote("")
    };


    useFocusEffect(
        React.useCallback(() => {
            getNotes()
        }, [])
    );

    const getNotes = () => {
        AsyncStorage.getItem("NOTES").then((notes) => {
            setNotes(JSON.parse(notes))
        })
    };

    return (
        <View>

            <CreateNote
                textHandler={setNotes}
                saveNote={saveNote}
                inputText={notes}
            />
        </View>
    );
}

export default Notes;

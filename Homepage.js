import { Button } from "react-native";

function Home() {
    return (
        <Button title="Note" onPress={() => navigation.navigate("Notes")} />
    )
};

export default Home;

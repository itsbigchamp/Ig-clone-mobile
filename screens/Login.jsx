import { View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import { loginStyles } from "../assets/styles";


function Login(){
    return (
        <View style={loginStyles.container}>
            <Input placeholder="Email" 
            keyboardType="email-address" 
            autoCapitalize={false}
            autoCorrect={false}
            />
            <Input placeholder="Password" secureTextEntry={true} />
            <Button title='submit'>Submit</Button>
        </View>
    )
}


export default Login;
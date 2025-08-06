import { LogIn } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function LoginPage({ navigation }) {
    return (
        <View>
            <View style={{marginVertical: 70}}>
                <Image source={require('../../assets/casual_dog.png')} style={{width: '100%', resizeMode: 'contain'}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '100%'}}>
                <Text style={{ fontSize: 25, fontWeight: '500', textAlign: 'center' }}>Ótimo dia!</Text>
                <Text style={{ fontSize: 20, fontWeight: '500', textAlign: 'center' }}>Como deseja acessar</Text>
            </View>
            <View style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <TouchableOpacity style={{backgroundColor: '#14C871', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '80%', height: 40, borderRadius: 10}}><LogIn/><Text>Como deseja acessar?</Text></TouchableOpacity>
            </View>
        </View>
    )
}
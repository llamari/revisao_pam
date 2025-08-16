import { LogIn } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import '../../assets/Google.png'

export function LoginPage({ navigation }) {
    return (
        <View>
            <View style={{ marginVertical: 70, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/casual_dog.png')} style={{ width: '90%', resizeMode: 'contain' }} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '100%' }}>
                <Text style={{ fontSize: 30, fontWeight: '600', textAlign: 'center' }}>Ótimo dia!</Text>
                <Text style={{ fontSize: 15, fontWeight: '500', textAlign: 'center' }}>Como deseja acessar?</Text>
            </View>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 30, gap: 20 }}>
                <TouchableOpacity
                    style={{ backgroundColor: '#14C871', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '80%', height: 50, borderRadius: 10 }}
                >
                    <Image source={require('../../assets/Google.png')} style={{ width: 24, height: 24, position: 'absolute', left: 25 }} />
                    <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Como deseja acessar?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: 'transparent', borderColor: '#14C871', borderStyle: 'solid', borderWidth: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '80%', height: 50, borderRadius: 10 }}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={{ color: '#2a3844', fontWeight: '600', fontSize: 16 }}>Outras opções</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
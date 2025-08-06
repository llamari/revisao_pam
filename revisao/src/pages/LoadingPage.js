import { Image, View } from "react-native";
import '../../assets/appIcon.png'

export function LoadingPage({ navigation }) {
    setTimeout(() => {
        navigation.replace('Login')
    }, 5000);

    return (
        <View style={{ width: '100vw', height: '100%', backgroundColor: '#14C871', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../assets/appIcon.png')} style={{ width: '80%', resizeMode: 'contain' }} />
        </View>
    )
}
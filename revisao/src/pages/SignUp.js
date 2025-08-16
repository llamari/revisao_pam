import Checkbox from "expo-checkbox";
import { ArrowLeft, Eye, EyeClosed } from "lucide-react-native";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";


export function SignIn({ navigation }) {
    const [canSeePassword, setCanSeePassword] = useState(false);
    const [isChecked, setChecked] = useState(false);

    return (
        <View>
            <View style={{ marginTop: 50, marginLeft: 20 }}>
                <ArrowLeft size={40} color={'#14C871'} onPress={() => navigation.goBack()} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: 20, marginTop: 20 }}>
                <Text style={{ color: '#2a3844', fontSize: 30, fontWeight: '600', textAlign: 'left' }}>Acesse</Text>
                <Text style={{ color: '#2a3844', fontSize: 15, fontWeight: '500', textAlign: 'left' }}>com e-mail e senha</Text>
            </View>
            <View style={{ maxWidth: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: 20, marginTop: 20, gap: 20 }}>
                <View style={{gap: 10}}>
                    <Text style={{ color: '#2a3844', fontSize: 15, fontWeight: '600', textAlign: 'left' }}>E-mail:</Text>
                    <TextInput placeholder="Digite seu E-mail" style={{ backgroundColor: '#E3E7F3' }} keyboardType="email-address" />
                </View>

                <View style={{gap: 10}}>
                    <Text style={{ color: '#2a3844', fontSize: 15, fontWeight: '600', textAlign: 'left' }}>Senha:</Text>
                    <View style={{ backgroundColor: '#E3E7F3', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20 }}>
                        <TextInput placeholder="Digite sua senha" style={{ maxWidth: '90%' }} secureTextEntry={canSeePassword} />
                        {canSeePassword ? (
                            <Eye onPress={() => setCanSeePassword(false)} />
                        ) : (
                            <EyeClosed onPress={() => setCanSeePassword(true)} />
                        )}
                    </View>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Checkbox
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#14C871' : undefined}
                        />
                        <Text style={{ color: '#2a3844', fontSize: 15, fontWeight: '500', textAlign: 'left' }}>Lembrar senha</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#2a3844', fontSize: 15, fontWeight: '500', textAlign: 'left' }}>Esqueci minha senha</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: '5%', marginTop: 30 }}>
                <TouchableOpacity
                    style={{ backgroundColor: '#14C871', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '50%', height: 50, borderRadius: 10 }}
                >
                    <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: 'transparent', borderColor: '#14C871', borderStyle: 'solid', borderWidth: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '45%', height: 50, borderRadius: 10 }}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={{ color: '#2a3844', fontWeight: '600', fontSize: 16 }}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 40, width: '90%', marginLeft: '5%'}}>
                <View style={{backgroundColor: '#2a3844', height: 1, width: "30%"}}></View>
                <Text>Ou continue com</Text>
                <View style={{backgroundColor: '#2a3844', height: 1, width: "30%"}}></View>
            </View>

            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 20, width: '90%', marginLeft: '5%'}}>
                <Image source={require('../../assets/Google.png')} style={{ width: 50, height: 50 }} />
                <Image source={require('../../assets/Facebook.png')} style={{ width: 50, height: 50 }} />
            </View>
        </View>
    )
}
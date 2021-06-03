import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity} from 'react-native'

const Login = (props) => {
    const [nome,setNome]=useState('');
    const [email,setEmail]=useState('');
    const [senha,setSenha]=useState('');

  const abrir =()=>{
    alert(nome);
    alert(email);
    alert(senha);
  }

    return (
        
        <View style={styles.container}>
            {/* <Text style={styles.titulo}>Indentifique-se para abrir</Text> */}
      
            <Image source={require('../../assets/receitamada.jpg')} 
        style={styles.logo}
      />
      <TextInput style={styles.input}
        placeholder="Nome"
        onChange={text=>setNome(text)}/>
      <TextInput style={styles.input}
        placeholder="E-mail"
        onChange={text=>setEmail(text)}/>
      <TextInput style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChange={text=>setSenha(text)}
      />
       {/* <TouchableOpacity style={styles.btnabrir} onPress={()=>abrir()}>
          <Text> Abrir livro </Text>
       </TouchableOpacity> */}
       <TouchableOpacity style={styles.btnabrir} onPress={()=>abrir()}>
          <Text> Cadastrar </Text>
       </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    titulo: {
      fontSize: 50,
      Color: '#fff',
      justifyContent: 'center 2.2',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: '#Dodger',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 1000,
      height: 500,
      marginBottom:10,
    },
    input:{
     width:'58%',
     height:40,
     backgroundColor:'#d8b',
     padding:10,
     marginBottom:10,
     TextInput: '#fff',
     
    },
    btnabrir:{
  
      height:45,
      backgroundColor:'#d8b',
      borderRadius:70,
      justifyContent:'center',
      textAlign:'center',
      marginBottom:10,
    },  
    
   
  });
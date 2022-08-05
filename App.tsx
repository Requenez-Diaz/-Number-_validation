import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [fecha, setFecha] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [concepto, setConcepto] = useState("");
  const [codigo, setCodigo] = useState("");
  const [cuenta, setCuenta] = useState("");
  const [debit, setDebit] = useState(0);
  const [credit, setCredit] = useState(0);

  const saveDate = (text: string) => {
    if (text.length >= 10 && text !== "2022-07-29") {
      alert("Error en la fecha");
      return;
    }
    if (text.length >= 10) {
      setFecha(text);
      console.log(fecha);
    }
  };
  const saveName = (text: string) => {
    setNombre(text);
    console.log(nombre);
    
  };
  const saveApellido = (text: string) => {
    setApellido(text);
    console.log(apellido);
    
  };
  const saveConcepto = (text: string) => {
    setConcepto(text);
    console.log(concepto);
     
  };
  const saveCodigo = (text: string) => {
    setCodigo(text);
    console.log(codigo);
    
  };
  const saveCuenta = (text: string) => {
    setCuenta(text);
    console.log(cuenta);
    
  };
  const saveDebit = (text: string) => {
    const textInNumber = Number(text);
    const isNaN = Number.isNaN(textInNumber);

    console.log("texInNumber", textInNumber);
    console.log("isNaN", isNaN);

    setDebit(Number(text));
    console.log(debit, text);
  };

  const saveCredit = (text: string) => {
    const textInNumber = Number(text);
    if (Number.isNaN(textInNumber) == true) {
      return false;
    }


    console.log("texInNumber", textInNumber);
    console.log("isNaN", isNaN);

    setCredit(Number(text));
    console.log(credit, text);
  };

  const saveJournal = (text) => {};

  return (
    <View>
      <Text>APP Journal</Text>
      <Text>Fecha: {} </Text>
      <TextInput placeholder="Fecha" onChangeText={(text) => saveDate(text)} />

      <Text>Nombre:</Text>
      <TextInput placeholder="Nombre" onChangeText={(text) => saveName(text)} />

      <Text>Apellido:</Text>
      <TextInput
        placeholder="Apellido"
        onChangeText={(text) => saveApellido(text)}
      />

      <Text>Concepto:</Text>
      <TextInput
        placeholder="Concepto"
        onChangeText={(text) => saveConcepto(text)}
      />

      <View>
        <Text>Codigo:</Text>
        <TextInput
          placeholder="Codigo"
          onChangeText={(text) => saveCodigo(text)}
        />

        <Text>Cuenta:</Text>
        <TextInput
          placeholder="Cuenta"
          onChangeText={(text) => saveCuenta(text)}
        />

        <Text>Debito:</Text>
        <TextInput
          placeholder="Debito"
          onChangeText={(text) => saveDebit(text)}
        />

        <Text>Credito:</Text>
        <TextInput
          placeholder="Credito"
          onChangeText={(text) => saveCredit(text)}
        />

        <Button title="Guardar" onPress={(text) => saveJournal(text)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
 

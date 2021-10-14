import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal,Image } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [enteredNumber,setEnteredNumber]=useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal,enteredNumber);
    setEnteredGoal('');
    setEnteredNumber('');
  };

  const numberInputHandler=(enteredText)=>{
     setEnteredNumber(enteredText);
  }

  return (
    <Modal visible={props.visible} animationType="slide" style={{justifyContent:'center',alignItems:'center',padding:'2%',marginVertical:'5%'}}>
      <View style={styles.inputContainer}>
        <View style={styles.imgCont}><Image source={require('../uncle.jpg')} style={styles.img}/></View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TextInput
          placeholder="Discount %"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
          keyboardType='number-pad'
          />
        <TextInput
          placeholder="Total Coupons"
          style={styles.input}
          onChangeText={numberInputHandler}
          value={enteredNumber}
          keyboardType='number-pad'
        />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '35%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginHorizontal:'4%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  },
  img:{
    width:"100%",
    height:"100%"
  },
  imgCont:{
    width:"70%",
    height:"40%",
    justifyContent:'center',
    alignItems:'center',
    marginVertical:'10%'
  }
});

export default GoalInput;

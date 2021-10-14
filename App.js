import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList,Text } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [deleteItem,setDeleteItem]=useState(false);
  const addCouponHandler =(discount,couponNumbers) => {
    setCourseGoals(currentItem => [
      ...currentItem,
      { id: Math.random().toString(), dis:discount, num:couponNumbers}
    ]);
    setIsAddMode(false);
    setDeleteItem(true);
  };

  const removeCouponHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
    if(!courseGoals){
    setDeleteItem(false);
    }
  };

  const cancelCouponAdditionHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Coupon" onPress={() => setIsAddMode(true)} />
      {deleteItem && <Text style={{textAlign:'center',marginVertical:'2%'}}>Click on Coupon to delete</Text>}
      <GoalInput
        visible={isAddMode}
        onAddGoal={addCouponHandler}
        onCancel={cancelCouponAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeCouponHandler}
            title={itemData.item.dis}
            number={itemData.item.num}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

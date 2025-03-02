import { View ,StyleSheet,Text,Alert} from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constants/styles";
import { useState } from "react";
import Button from "../UI/Button"
import { getFormattedDate } from "../../util/Date";

function ExpenseForm({onCancel,onSubmit,submitButtonLabel ,defaultValues}) {

  const [inputValues, setInputValues] = useState({
    amount:defaultValues?defaultValues.amount.toString() : "",
    date:defaultValues? getFormattedDate(defaultValues.date): "",
    description:defaultValues? defaultValues.description : ""
  })
  function inputChangeHandler(inputIdentifier,enteredValue) {
    setInputValues((curInputValues)=>{
      return{
        ...curInputValues,
        [inputIdentifier]:enteredValue
      }
    })
  }

  function submitHandler(){
    const expenseData = {
      amount:+inputValues.amount,
      date: new Date(inputValues.date),
      description:inputValues.description
    }
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount>0
    const dateIsValid = expenseData.date.toString() !== "Invalid Date"
    const descriptionIsValid = expenseData.description.trim().length >0
    
    if(!amountIsValid || !dateIsValid || !descriptionIsValid){
      Alert.alert("Invalid input" , "Please check your input values")
      return 
    }

    onSubmit(expenseData)
  }

  return (
    <View style={styles.formStyle}>
      <Text style={styles.inputText}>Your Expense</Text>
      <View style={styles.inputRows}>
        <Input
        style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this,"amount"),
            value:inputValues.amount
          }}
        />
        <Input
         style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this,"date"),
            value:inputValues.date
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //autoCapitalize:"none"
          onChangeText: inputChangeHandler.bind(this,"description"),
          value:inputValues.description
        }}
      />
       <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  formStyle:{
    marginTop:40
  },
  inputText:{
    color:"white",
    fontSize:24,
    marginVertical:24,
    fontWeight:"bold",
    textAlign:"center"
  },
  inputRows:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  rowInput:{
    flex:1
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  }
})

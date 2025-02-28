import { View ,StyleSheet,Text} from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm() {
  function amountChangedHandler() {}

  return (
    <View style={styles.formStyle}>
      <Text style={styles.inputText}>Your Expense</Text>
      <View style={styles.inputRows}>
        <Input
        style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangedHandler,
          }}
        />
        <Input
         style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //autoCapitalize:"none"
        }}
      />
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
  }
})

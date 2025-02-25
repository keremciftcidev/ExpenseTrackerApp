import { View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
    function amountChangeHandler(){

    }

    return <View>
        <Input label="Amount" textInputConfig={{
            keyboardType:"Decimal-pad",
            onChangeText:amountChangeHandler
        }}/>
        <Input label="Date" textInputConfig={{
            placeholder:"YYYY-MM-DD",
            maxLength:10,
            onChangeText:()=>{}
        }}/>
        <Input label="Description" textInputConfig={{
            multiline:true,
            //autoCapitalize:"none"
        }}/>
    </View>
}

export default ExpenseForm;
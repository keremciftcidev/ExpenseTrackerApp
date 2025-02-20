import { StyleSheet, Text } from "react-native";
import {useLayoutEffect} from "react"

function ManageExpense({route,navigation}) {
    const editedExpense = route.params?.expenseId
    const isEditing = !!editedExpense

    useLayoutEffect(() => {
        navigation.setOptions({
            title:isEditing? "Edit Expense" : "Add Expense"
        })

    }, [navigation,isEditing])

   

    return <Text>Manage expense</Text>
}

export default ManageExpense;

const styles = StyleSheet.create({
    
})
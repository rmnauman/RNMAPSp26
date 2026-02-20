import React from "react";
import { View } from "react-native";
import EmpChkList from './assets/forms/EmpChkList'
import abc from './assets/forms/ImageHandling'
import ImageHandling from "./assets/forms/ImageHandling";
const App = () => {
    return (
        <EmpChkList />
    );
}
export default App;










// import React, { useState } from "react";
// import { Text, View } from "react-native";
// import { Checkbox, PaperProvider, RadioButton } from "react-native-paper";
// const App = () => {

//     const [gender, setGender] = useState('male');
//     const [ms, setMS] = useState(true);
//     const [employeed, setEmployeed] = useState(true);
//     return (
//         <PaperProvider>
//             <View>
//                 <View style={{ backgroundColor: 'purple', marginTop: 40, padding: 10, }}>
//                     <Text style={{ fontSize: 35, textAlign: 'center', color: 'white', }}> Employee Form</Text>
//                 </View>
//                 <View style={{ borderWidth: 2, margin: 5, borderRadius: 10, }}>
//                     <View style={{ flexDirection: 'row' }}>
//                         <RadioButton
//                             status={gender == 'male' ? 'checked' : 'unchecked'}
//                             onPress={() => setGender('male')}
//                         />
//                         <Text style={{ fontSize: 25 }}>Male</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row' }}>
//                         <RadioButton
//                             status={gender == 'female' ? 'checked' : 'unchecked'}
//                             onPress={() => setGender('female')}

//                         />
//                         <Text style={{ fontSize: 25 }}>Female</Text>
//                     </View>

//                 </View>
//                 <View style={{ borderWidth: 2, margin: 5, borderRadius: 10, }}>
//                     <View style={{ flexDirection: 'row' }}>
//                         <Checkbox
//                             status={ms ? 'checked' : 'unchecked'}
//                             onPress={() => { setMS(!ms) }}
//                         />
//                         <Text style={{ fontSize: 25 }}>Male</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row' }}>
//                         <Checkbox
//                             status={employeed ? 'checked' : 'unchecked'}
//                             onPress={() => setEmployeed(!employeed)}
//                         />
//                         <Text style={{ fontSize: 25 }}>Female</Text>
//                     </View>
//                 </View>
//             </View>
//         </PaperProvider>
//     );
// }
// export default App;


// // import { Alert, Button, FlatList, Text, TextInput, View } from "react-native";

// // const App = () => {
// //     const [name, setName] = useState();
// //     const [salary, setSalary] = useState();
// //     const [empID, setEmpID] = useState(101);
// //     const [employees, setEmployees] = useState([]);

// //     const addEmployee = () => {
// //         let emp = { empID: empID, name: name, salary: salary };
// //         employees.push(emp)
// //         //setEmployees([...employees,emp])
// //         setEmpID(empID + 1)
// //         console.log(employees)
// //     }

// //     const showEmp = () => {
// //         const data = employees.find(e => e.name == name);
// //         if (data)
// //             Alert.alert(data.name);
// //         else
// //             Alert.alert('Not Found')
// //     }
// //     return (
// //         <View style={{ flex: 1, }}>
// //             <View>
// //                 <Text style={{ fontSize: 40, textAlign: 'center' }}> Employee Form</Text>
// //             </View>
// //             <View>
// //                 <TextInput
// //                     placeholder="Enter Name"
// //                     onChangeText={setName}
// //                     value={name}
// //                     style={{
// //                         borderWidth: 2,
// //                         fontSize: 25, margin: 10, padding: 10,
// //                         borderRadius: 10,
// //                     }} />
// //             </View>
// //             <View>
// //                 <TextInput
// //                     placeholder="Enter Salary"
// //                     onChangeText={setSalary}
// //                     value={salary}
// //                     style={{
// //                         borderWidth: 2,
// //                         fontSize: 25, margin: 10, padding: 10,
// //                         borderRadius: 10,
// //                     }} />
// //             </View>
// //             <View style={{
// //                 width: '50%',
// //                 margin: 10,
// //                 alignSelf: 'center'
// //             }}>
// //                 <Button
// //                     onPress={addEmployee}
// //                     title="ADD" />
// //             </View>
// //             <View style={{
// //                 width: '50%',
// //                 margin: 10,
// //                 alignSelf: 'center'
// //             }}>
// //                 <Button
// //                     onPress={showEmp}
// //                     title="Show" />
// //             </View>
// //             <FlatList
// //                 data={employees}
// //                 renderItem={({ item }) => <Text
// //                     style={{ fontSize: 40, borderWidth: 2, margin: 10, }}>{item.name} || {item.salary}</Text>
// //                 }
// //             />

// //         </View>
// //     );
// // }
// // export default App;
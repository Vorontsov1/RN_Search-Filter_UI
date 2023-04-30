import {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const SearchBar = () => {

    const DATA = [
      {value: 1, label: 'Java'},
      {value: 2, label: 'Python'},
      {value: 3, label: 'C#'},
      {value: 4, label: 'Dart'},
      {value: 5, label: 'Ruby'},
      {value: 6, label: 'PHP'},
      {value: 7, label: 'Kotlin'},
      {value: 8, label: 'JavaScript'},
      {value: 9, label: 'Swift'},
      {value: 10, label: 'Scala'},
      {value: 11, label: 'R'},
      {value: 12, label: 'Go lang'},
    ];
const [search, setSearch] = useState(null);
    const [filteredData, setFilteredData] = useState(DATA);
    const filterList = (item) => {
        const newList = DATA.filter((val) => val.label.toLocaleLowerCase().indexOf(item.toLocaleLowerCase()) >= 0);
        setFilteredData(newList);
    }

    useEffect(() => {
        if (search !== null) {
            filterList(search);
        } 

         

    }, [search]);

    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Search/Filter UI</Text>
          <View>
            <View style={styles.search}>
              <View style={styles.icon}>
                <FontAwesome name="search" size={20} color="#ffffff" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Search"
                placeholderTextColor="#ffffff"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onChangeText={text => setSearch(text)}
              />
            </View>
            <View>
              <FlatList
                data={filteredData}
                key={({item}) => item.value}
                renderItem={({item}) => {
                  return (
                    <View style={styles.listItem}>
                      <Text style={styles.listText}>{item.label}</Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </SafeAreaView>
    );
}

export default SearchBar;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FB4B4E',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        margin: 10,
        textAlign: 'center',

    },
  search: {
    backgroundColor: '#F18F01',
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: '#2E86AB',
    padding: 15,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  input: {
    flex: 1,
    padding: 10,
      fontSize: 18,
    color: '#ffffff',
  },
    listItem: {
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 10,
        
  },
    listText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E8871E',
  },
});
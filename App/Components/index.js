import React from 'react';
import { Text, FlatList, StyleSheet, RefreshControl, ScrollView, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BLUE, GRAY, WHITE } from '../colors';
import { Button, List } from '../Presentational';
import { requestData } from '../redux/action';

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    color: WHITE,
  },
  wrapper: {
    flex: 1,
    backgroundColor: BLUE,
    padding: 8,
  },
  list: {
    backgroundColor: WHITE,
    borderRadius: 8,
    height: 40,
    marginVertical: 4,
  },
  flatListWrapper: {
    backgroundColor: GRAY,
    padding: 8,
    borderRadius: 8,
    marginVertical: 8,
  },
});

function Home(props) {
  const { data, navigation } = props;
  const [contact, setContact] = React.useState(null);
  const [refreshStatus, setRefreshStatus] = React.useState(false);

  React.useEffect(() => {
    props.requestData();
  }, []);

  React.useEffect(() => {
    if (data !== null) {
      setContact(data);
    }
  }, [data]);

  const renderItem = ({ item }) => {
    return (
      <List
        name={`${item.firstName + ' ' + item.lastName}`}
        onPress={() =>
          navigation.navigate('Detail', {
            id: item.id,
            firstName: item.firstName,
            lastName: item.lastName,
            image: item.photo,
            age: item.age,
          })
        }
        style={styles.list}
      />
    );
  };

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshStatus(true);
    props.requestData();
    setContact(data);

    wait(300).then(setRefreshStatus(false));
  });

  const refreshControl = () => {
    return (
      <RefreshControl refreshing={refreshStatus} onRefresh={onRefresh} />
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.title}>myColleague</Text>
      <ScrollView style={styles.flatListWrapper} refreshControl={refreshControl()}>
        <FlatList
          data={contact}
          extraData={data}
          keyExtractor={(index) => String(index)}
          renderItem={(item) => renderItem(item)}
        />
      </ScrollView>
      <Button
        name="Add Contact"
        onPress={() => navigation.navigate('Detail')}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  data: state.contactList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

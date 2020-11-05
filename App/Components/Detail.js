import React from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BLACK, BLUE, GRAY } from '../colors';
import { Button } from '../Presentational';
import { postData, deleteData, updateData } from '../redux/action';

function Detail(props) {
  const { params } = props.route;
  const [editable, setEditable] = React.useState(params ? false : true);
  const [contactId, setContactId] = React.useState();
  const [contactImage, setContactImage] = React.useState(null);
  const [contactFirstName, setContactFirstName] = React.useState(null);
  const [contactLastName, setContactLastName] = React.useState(null);
  const [contactAge, setContactAge] = React.useState(null);

  const styles = StyleSheet.create({
    fieldTitle: {
      fontSize: 12,
    },
    inputField: {
      borderBottomWidth: 1,
      borderColor: editable ? BLACK : GRAY,
    },
    idField: {
      borderBottomWidth: 1,
      borderColor: GRAY,
    },
    input: {
      marginVertical: 10,
    },
  });

  React.useEffect(() => {
    setContactData();
  }, []);

  const setContactData = () => {
    if (params) {
      const { id, image, firstName, lastName, age } = params;
      const dataExist = firstName !== null && lastName !== null && age !== null;
      if (dataExist) {
        setContactId(id);
        setContactFirstName(firstName);
        setContactLastName(lastName);
        setContactAge(String(age));
        setContactImage(image);
      }
    }
  };

  const addNewContact = () => {
    const dataComplete =
      contactFirstName !== null &&
      contactLastName !== null &&
      contactAge !== null &&
      contactImage !== null;
    if (dataComplete) {
      const newContact = {
        firstName: contactFirstName,
        lastName: contactLastName,
        age: contactAge,
        photo: contactImage,
      };
      props.postData(newContact);
      props.navigation.goBack();
    }
  };

  const deleteContact = () => {
    props.deleteData(contactId);
    props.navigation.goBack();
  };

  const updateContact = () => {
    const dataComplete =
      contactFirstName !== null &&
      contactLastName !== null &&
      contactAge !== null &&
      contactImage !== null;
    if (dataComplete) {
      const newContact = {
        id: contactId,
        firstName: contactFirstName,
        lastName: contactLastName,
        age: contactAge,
        photo: contactImage,
      };
      props.updateData(newContact);
      props.navigation.goBack();
    }
  };

  const onSave = () => {
    updateContact();
    setEditable(false);
    props.navigation.goBack();
  };

  const onCancel = () => {
    setContactData();
    setEditable(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.5,
          backgroundColor: BLUE,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {contactImage ? (
          <Image
            source={{ uri: contactImage }}
            style={{ height: 150, width: 150, borderRadius: 100 }}
          />
        ) : (
            <View
              style={{
                height: 150,
                width: 150,
                borderRadius: 100,
                backgroundColor: GRAY,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>No Image</Text>
            </View>
          )}
      </View>
      <ScrollView style={{ flex: 4, padding: 8 }}>
        {params ? (
          <View style={styles.input}>
            <Text style={styles.fieldTitle}>id:</Text>
            <TextInput
              style={styles.idField}
              editable={false}
              value={contactId}
            />
          </View>
        ) : null}
        <View style={styles.input}>
          <Text style={styles.fieldTitle}>first name:</Text>
          <TextInput
            style={styles.inputField}
            editable={editable}
            value={contactFirstName}
            onChangeText={(text) => setContactFirstName(text)}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.fieldTitle}>last name:</Text>
          <TextInput
            style={styles.inputField}
            editable={editable}
            value={contactLastName}
            onChangeText={(text) => setContactLastName(text)}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.fieldTitle}>age:</Text>
          <TextInput
            style={styles.inputField}
            editable={editable}
            value={contactAge}
            onChangeText={(text) => setContactAge(text)}
          />
        </View>
        {params ? (
          <View>
            <View style={styles.input}>
              <Text style={styles.fieldTitle}>image url:</Text>
              <TextInput
                style={styles.inputField}
                editable={editable}
                value={contactImage}
                onChangeText={(text) => setContactImage(text)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 8,
              }}>
              {editable ? (
                <View style={{ flexDirection: 'row' }}>
                  <Button
                    secondary
                    name="Save"
                    onPress={onSave}
                    style={{ width: 150 }}
                  />
                  <Button
                    name="Cancel"
                    onPress={onCancel}
                    style={{ width: 150, marginLeft: 8 }}
                  />
                </View>
              ) : (
                  <View style={{ flexDirection: 'row' }}>
                    <Button
                      secondary
                      name="Edit"
                      onPress={() => setEditable(true)}
                      style={{ width: 150 }}
                    />
                    <Button
                      name="Delete"
                      onPress={deleteContact}
                      style={{ width: 150, marginLeft: 8 }}
                    />
                  </View>
                )}
            </View>
          </View>
        ) : (
            <Button name="Add" onPress={addNewContact} />
          )}
      </ScrollView>
    </SafeAreaView>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ postData, deleteData, updateData }, dispatch);

export default connect(null, mapDispatchToProps)(Detail);

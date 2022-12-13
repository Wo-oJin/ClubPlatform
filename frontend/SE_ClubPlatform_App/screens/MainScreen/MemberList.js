/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Topbar from '../Bar/Topbar';
import JoinBlock from '../SubScreen/MemberList/JoinComponent';
import MemberListBlock from '../SubScreen/MemberList/TableComponent';
import {ScrollView} from 'react-native-gesture-handler';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

function MemberList({navigation}) {
  const [isList, SetTag] = useState(true);
  const TrueTag = () => {
    SetTag(CurTag => true);
  };
  const FalseTag = () => {
    SetTag(CurTag => false);
  };
  useEffect(() => {});

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fafafa',
      }}>
      <Topbar navigation={navigation} />
      <View style={{padding: Width * 0.05, paddingBottom: Width * 0.02}}>
        <Text style={styles.fontStyle}>동아리원 관리</Text>
      </View>
      <View style={styles.tag_container}>
        {isList ? (
          <TouchableOpacity
            style={styles.selected_tag_button}
            onPress={TrueTag}>
            <Text style={{color: '#4f4f4f'}}>부원 목록</Text>
          </TouchableOpacity>
        ) : (
          <View>
            <TouchableOpacity
              style={styles.unselected_tag_button}
              onPress={TrueTag}>
              <Text style={{color: '#4f4f4f'}}>부원 목록</Text>
            </TouchableOpacity>
          </View>
        )}
        {!isList ? (
          <TouchableOpacity
            style={styles.selected_tag_button}
            onPress={FalseTag}>
            <Text style={{color: '#4f4f4f'}}>가입 신청 현황</Text>
          </TouchableOpacity>
        ) : (
          <View>
            <TouchableOpacity
              style={styles.unselected_tag_button}
              onPress={FalseTag}>
              <Text style={{color: '#4f4f4f'}}>가입 신청 현황</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {isList ? (
        <MemberListBlock />
      ) : (
        <ScrollView style={styles.context_container}>
          <JoinBlock />
          <JoinBlock />
          <JoinBlock />
          <JoinBlock />
          <JoinBlock />
          <JoinBlock />
          <JoinBlock />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  context_container: {
    backgroundColor: '#ffffff',
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 40,
    marginTop: 24,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  fontStyle: {
    fontSize: 28,
    marginBottom: Height * 0.03,
    color: 'black',
  },
  tag_container: {
    //flex: 0.5,
    height: 40,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  selected_tag_button: {
    width: (Width - 80) / 2,
    height: Height * 0.05,
    borderRadius: 8,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#d9d9d9',
  },
  unselected_tag_button: {
    width: (Width - 80) / 2,
    height: Height * 0.05,
    borderRadius: 8,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#d9d9d9',
    opacity: 0.5,
  },
  borderStyle: {
    borderBottomWidth: 1,
  },
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
});

export default MemberList;
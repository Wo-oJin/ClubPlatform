import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {back} from 'react-native/Libraries/Animated/Easing';
import Topbar from '../Bar/Topbar';

function Home_Profile({navigation, clubInfo, clubId}) {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.container}>
          <Text style={styles.cardTitle}>{clubInfo.clubName}</Text>
          <View style={styles.container_right}>
            <View style={styles.gray_card}>
              <View>
                <Text style={styles.gray_card_title}>회장</Text>
              </View>
              <View>
                <Text style={styles.gray_card_content}>{clubInfo.presidentName}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.gray_card}
              onPress={() => navigation.navigate('MemberList')}>
              <View>
                <Text style={styles.gray_card_title}>부원</Text>
              </View>
              <View>
                <Text style={styles.gray_card_content}>{clubInfo.memberCounts}명</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.clubImg}
            resizeMode="stretch"
            source={require('../../images/DoiT.png')}
          />
          <View style={{flex: 1}}>
            <Text style={styles.captain_name}>
              {clubInfo.introduce}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  container_sub: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 3,
    padding: 5,
  },
  container_right: {
    flex: 2,
    flexDirection: 'row',
  },
  clubImg: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
    elevation: 3,
    padding: 20,
    paddingBottom: 30,
  },
  gray_card: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    flex: 1,
    borderRadius: 7,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'center',
    padding: 5,
    justifyContent: 'space-between',
  },
  cardTitle: {
    flex: 1,
    alignContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gray_card_title: {
    flex: 1,
    marginRight: 10,
  },
  gray_card_content: {
    flex: 1,
    marginLeft: 15,
  },
});
export default Home_Profile;
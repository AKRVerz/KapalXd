/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Lainnya = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'powderblue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{margin: 20}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>
            Menu
          </Text>
          <View
            style={{
              height: 20,
            }}
          />
          <View
            style={{
              height: 310,
              width: 310,
              borderRadius: 10,
              backgroundColor: 'white',
              padding: 10,
            }}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 22,
                }}>
                <View
                  style={{
                    margin: 20,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    padding: 35,
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                  }}>
                  <View>
                    <Image
                      style={{width: 300, height: 300, marginTop: 40}}
                      source={require('../data/sry.jpg')}
                    />
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        marginTop: 40,
                        padding: 2,
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      Pembuat Sudah Knock :
                    </Text>
                    <Text
                      style={{
                        padding: 2,
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      Apri Kurniawansyah
                    </Text>
                    <Text
                      style={{
                        padding: 2,
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      119140141
                    </Text>
                  </View>
                  <Pressable
                    style={{
                      borderRadius: 20,
                      padding: 10,
                      elevation: 2,
                      backgroundColor: '#2196F3',
                    }}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      Tutup Data
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={{
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                backgroundColor: '#F194FF',
              }}
              onPress={() => setModalVisible(true)}>
              <Text
                style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'black',
                }}>
                <FontAwesome name="search" size={20} />
              </Text>
            </Pressable>
          </View>
          <View style={{height: 20}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Lainnya;

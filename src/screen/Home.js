/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, View, ScrollView, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({}) => {
  const navigation = useNavigation();

  const [mulai, setMulai] = React.useState('Pelabuhan Tanjung Priok');
  const [selesai, setSelesai] = React.useState('Pelabuhan Tanjung Emas');
  const [kelas, setkelas] = React.useState('Reguler');
  const [waktu, setWaktu] = React.useState('01-01-2022');
  const [jam, setJam] = React.useState('01.00');

  const getTiket = () => {
    navigation.navigate('DetailTiket', {
      mulai: mulai,
      selesai: selesai,
      kelas: kelas,
      waktu: waktu,
      jam: jam,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 650,
            backgroundColor: 'powderblue',
            borderBottomLeftRadius: 30,
            borderBottomEndRadius: 30,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 2,
              width: '90%',
              borderRadius: 10,
            }}>
            <View style={{margin: 20}}>
              <Text
                style={{
                  fontFamily: 'Cochin',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Plabuhan Awal
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                }}>
                <FontAwesome name="ship" color="black" size={25} />
                <Picker
                  selectedValue={mulai}
                  onValueChange={(value, index) => setMulai(value)}
                  mode="dropdown"
                  style={{width: 300, borderRadius: 20, color: 'gray'}}>
                  <Picker.Item label="Silakan Pilih Keberangkatan" />
                  <Picker.Item
                    label="Pelabuhan Tanjung Priok"
                    value="Pelabuhan Tanjung Priok"
                  />
                  <Picker.Item
                    label="Pelabuhan Merak"
                    value="Pelabuhan Merak"
                  />
                  <Picker.Item
                    label="Pelabuhan Tanjung Perak"
                    value="Pelabuhan Tanjung Perak"
                  />
                  <Picker.Item
                    label="Pelabuhan Bakauheni"
                    value="Pelabuhan Bakauheni"
                  />
                  <Picker.Item
                    label="Pelabuhan Tanjung Emas"
                    value="Pelabuhan Tanjung Emas"
                  />
                </Picker>
              </View>

              <Text
                style={{
                  fontFamily: 'Cochin',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Plabuhan Tujuan
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                }}>
                <FontAwesome name="ship" color="black" size={25} />
                <Picker
                  selectedValue={selesai}
                  onValueChange={(value, index) => setSelesai(value)}
                  mode="dropdown"
                  style={{width: 300, borderRadius: 20, color: 'gray'}}>
                  <Picker.Item label="Silakan Pilih Tujuan" />
                  <Picker.Item
                    label="Pelabuhan Tanjung Priok"
                    value="Pelabuhan Tanjung Priok"
                  />
                  <Picker.Item
                    label="Pelabuhan Merak"
                    value="Pelabuhan Merak"
                  />
                  <Picker.Item
                    label="Pelabuhan Tanjung Perak"
                    value="Pelabuhan Tanjung Perak"
                  />
                  <Picker.Item
                    label="Pelabuhan Bakauheni"
                    value="Pelabuhan Bakauheni"
                  />
                  <Picker.Item
                    label="Pelabuhan Tanjung Emas"
                    value="Pelabuhan Tanjung Emas"
                  />
                </Picker>
              </View>

              <Text
                style={{
                  fontFamily: 'Cochin',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Kelas Layanan
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                }}>
                <FontAwesome name="users" color="black" size={25} />
                <Picker
                  selectedValue={kelas}
                  onValueChange={(value, index) => setkelas(value)}
                  mode="dropdown"
                  style={{width: 300, borderRadius: 20, color: 'gray'}}>
                  <Picker.Item label="Silakan Pilih Kelas" />
                  <Picker.Item label="Kelas Reguler" value="Kelas Reguler" />
                  <Picker.Item
                    label="Kelas Eksekutif"
                    value="Kelas Eksekutif"
                  />
                </Picker>
              </View>

              <Text
                style={{
                  fontFamily: 'Cochin',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Tanggal Masuk Keberakatan
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                }}>
                <MaterialIcons name="date-range" color="black" size={30} />
                <Picker
                  selectedValue={waktu}
                  onValueChange={(value, index) => setWaktu(value)}
                  mode="dropdown"
                  style={{width: 300, borderRadius: 20, color: 'gray'}}>
                  <Picker.Item label="Silakan Pilih Tanggal Keberangkatan" />
                  <Picker.Item label="01-01-2022" value="01-01-2022" />
                  <Picker.Item label="02-01-2022" value="02-01-2022" />
                  <Picker.Item label="03-01-2022" value="03-01-2022" />
                  <Picker.Item label="04-01-2022" value="04-01-2022" />
                  <Picker.Item label="05-01-2022" value="05-01-2022" />
                </Picker>
              </View>
              <Text
                style={{
                  fontFamily: 'Cochin',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Jam Masuk Pelabuhan
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                }}>
                <MaterialCommunityIcons
                  name="clock-time-three"
                  color="black"
                  size={30}
                />
                <Picker
                  selectedValue={jam}
                  onValueChange={(value, index) => setJam(value)}
                  mode="dropdown"
                  style={{width: 300, borderRadius: 20, color: 'gray'}}>
                  <Picker.Item label="Silakan Pilih Jam Keberangkatan" />
                  <Picker.Item label="07.00 WIB" value="07.00" />
                  <Picker.Item label="12.00 WIB" value="12.00" />
                  <Picker.Item label="15.40 WIB" value="15.40" />
                  <Picker.Item label="20.30 WIB" value="20.30" />
                  <Picker.Item label="01.00 WIB" value="01.00" />
                </Picker>
              </View>
              <Button onPress={getTiket} title="Pesan Tiket" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

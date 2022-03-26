/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Konfirmasi = ({navigation}) => {
  const route = useRoute();

  const GetPesanan = () => {
    navigation.navigate('Pesanan', {
      mulai: route.params.mulai,
      selesai: route.params.selesai,
      classes: route.params.classes,
      waktu: route.params.waktu,
      jam: route.params.jam,
      namaLengkap: nama,
      jenisKelamin: kelamin,
      harga: route.params.harga,
      kondisi: 'true',
    });
  };

  const [nama, onChangeNama] = React.useState('');
  const [kelamin, onChangeKelamin] = React.useState('Laki Laki');

  return (
    <SafeAreaView style={{backgroundColor: 'powderblue', flex: 1}}>
      <View style={{margin: 20}}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome
            name="arrow-left"
            size={30}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text style={{fontSize: 24, color: 'black'}}>Pesanan Tiket</Text>
          <FontAwesome name="ticket" size={30} color="black" />
        </View>
        <View style={{height: 40}} />
        <View
          style={{
            backgroundColor: '#FCFEFF',
            height: 450,
            borderRadius: 10,
            padding: 20,
          }}>
          <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>
            Cek Pesanan Tiket Kamu
          </Text>
          <View style={{height: 30}} />
          <View style={{backgroundColor: '#FDF6EC', padding: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                {route.params.mulai}
              </Text>
              <FontAwesome name="arrow-right" size={12} color="black" />
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                {route.params.selesai}
              </Text>
            </View>
            <View style={{height: 10}} />
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                Tanngal :
              </Text>
              <View style={{padding: 5}} />
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                {route.params.waktu}
              </Text>
            </View>
            <View style={{height: 10}} />
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                Jam :
              </Text>
              <View style={{padding: 5}} />
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                {route.params.jam}
              </Text>
            </View>
            <View style={{height: 10}} />
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                Layanan :
              </Text>
              <View style={{padding: 5}} />
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                {route.params.classes}
              </Text>
            </View>
            <View style={{height: 10}} />
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Ubuntu-Bold',
                  color: '#DDA106',
                }}>
                {route.params.harga}
              </Text>
            </View>
          </View>

          <View>
            <View style={{height: 10}} />
            <Text style={{fontSize: 14, color: 'black'}}>Name</Text>
            <TextInput
              style={{backgroundColor: '#FDF6EC', padding: 10}}
              onChangeText={onChangeNama}
              value={nama}
              placeholder="Nama Lengkap"
            />
          </View>
          <View>
            <View style={{height: 10}} />
            <Text style={{fontSize: 14, color: 'black'}}>Gender</Text>
            <View>
              <Picker
                selectedValue={kelamin}
                onValueChange={(value, index) => onChangeKelamin(value)}
                mode="dropdown" // Android only
                style={{backgroundColor: '#FDF6EC', padding: 10}}>
                <Picker.Item label="Laki-laki" value="Laki-laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
              </Picker>
            </View>
          </View>
        </View>

        <View style={{height: 30}} />

        <TouchableOpacity
          style={{
            backgroundColor: '#DDA106',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            borderRadius: 10,
          }}
          onPress={GetPesanan}>
          <Text style={{fontSize: 14, color: 'black'}}>Deal Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Konfirmasi;

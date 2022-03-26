/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {pAkhir, pAwal, classs, tglBerangkat, CARI} from '../data/Data';
import {useRoute} from '@react-navigation/native';
import dataTidakDitemukan from '../components/dataTidakDitemukan';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DetailTiket = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor: 'powderblue', flex: 1}}>
      <View style={{margin: 20}}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome
            name="arrow-left"
            size={30}
            style={{color: 'black'}}
            onPress={() => navigation.goBack()}
          />
          <Text style={{fontSize: 24, color: 'black'}}>Ticket List</Text>
        </View>
        <View style={{height: 40}} />
        <SearchData />
      </View>
    </SafeAreaView>
  );
  function dataDitemukan(hasil) {
    return (
      <FlatList
        data={hasil}
        renderItem={({item}) => (
          <View style={{paddingBottom: 10}}>
            <TouchableOpacity
              style={{
                height: 250,
                width: '100%',
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 20,
              }}
              onPress={() => {
                navigation.navigate('OrderConfirm', {
                  mulai: pAwal
                    .find(sub => sub.id_datang === item.id_datang)
                    .nama_plbh.toString(),
                  selesai: pAkhir
                    .find(sub => sub.id_pergi === item.id_pergi)
                    .nama_plbh.toString(),
                  waktu: tglBerangkat
                    .find(sub => sub.tgl_id === item.tgl_id)
                    .tgl_nama.toString(),
                  kelas: classs
                    .find(sub => sub.class_id === item.class_id)
                    .class_nama.toString(),
                  jam: CARI.find(sub => sub.id === item.id).jam.toString(),
                  harga: CARI.find(sub => sub.id === item.id).harga.toString(),
                });
              }}>
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  {
                    pAwal.find(sub => sub.id_datang === item.id_datang)
                      .nama_plbh
                  }
                </Text>
                <FontAwesome
                  name="arrow-right"
                  size={16}
                  style={{color: 'black'}}
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  {pAkhir.find(sub => sub.id_pergi === item.id_pergi).nama_plbh}
                </Text>
              </View>
              <View style={{height: 20}} />
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    fontWeight: 'bold',
                    marginBottom: 3,
                  }}>
                  Tanggal Keberangkatan :
                  {
                    tglBerangkat.find(sub => sub.tgl_id === item.tgl_id)
                      .tgl_nama
                  }
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    fontWeight: 'bold',
                    marginBottom: 3,
                  }}>
                  Kelas Pelayanan :
                  {
                    classs.find(sub => sub.class_id === item.class_id)
                      .class_nama
                  }
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    fontWeight: 'bold',
                    marginBottom: 3,
                  }}>
                  Waktu Keberangkat :{CARI.find(sub => sub.id === item.id).jam}
                </Text>
              </View>
              <View style={{height: 40}} />
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Harga Tiket :{CARI.find(sub => sub.id === item.id).harga_id}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.Data_id}
      />
    );
  }
  function SearchData() {
    const awalID = pAwal.find(
      id => id.nama_plbh.toLowerCase() === route.params.mulai.toLowerCase(),
    ).id_datang;
    const akhirID = pAkhir.find(
      id => id.nama_plbh.toLowerCase() === route.params.selesai.toLowerCase(),
    ).id_pergi;
    const classID = classs.find(
      id => id.class_nama.toLowerCase() === route.params.kelas.toLowerCase(),
    ).class_id;
    const BerangkatID = tglBerangkat.find(
      id => id.tgl_nama.toLowerCase() === route.params.waktu,
    ).tgl_id;

    const hasil = CARI.filter(
      id =>
        id.id_datang.toLowerCase() === awalID.toLowerCase() &&
        id.id_pergi.toLowerCase() === akhirID.toLowerCase() &&
        id.class_id.toLowerCase() === classID.toLowerCase() &&
        id.tgl_id.toLowerCase() === BerangkatID.toLowerCase(),
    );

    let dapatData =
      hasil.length >= 1 ? dataDitemukan(hasil) : dataTidakDitemukan();

    return dapatData;
  }
};

export default DetailTiket;

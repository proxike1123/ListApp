import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const DATA = [
  {
      id: '1',
      ten: 'ALT - Công ty TNHH ALT',
      diachi: '123 abc',
      dienthoai: '011445566',
      ngaygiao: '21/11/2019',
      thanhtoan: '0',
      conno: '750,000',
      trangthai: 'Còn nợ'
  },
  {
      id: '2',
      ten: 'ALOMA - Gia dụng Aloma',
      diachi: '123 testing',
      dienthoai: '09996685',
      ngaygiao: '21/11/2019',
      thanhtoan: '30,000',
      conno: '3,330',
      trangthai: 'Còn nợ'
  }
]
class FlatListItem extends Component{
  render() {
      return(
          <View style = {styles.ItemContainer}>
              <View style = {{flexDirection: 'row'}}>
                  <Text style = {{fontWeight: 'bold', fontSize: 16}}> 
                      {this.props.item.ten} </Text>
              </View>
              <View style = {{flexDirection: 'row'}}>
                  <Text style = {{fontSize: 16}}>Địa chỉ: </Text>
                  <Text style = {{fontWeight: 'bold', fontSize: 16}}> 
                      {this.props.item.diachi} 
                      </Text>
              </View>
              <View style = {{flexDirection: 'row'}}>
                  <Text style = {{fontSize: 16}}>Điện thoại: </Text>
                  <Text style = {{fontWeight: 'bold', fontSize: 16}}> 
                      {this.props.item.dienthoai} 
                  </Text>
              </View>
              <View style = {{flexDirection: 'row'}}>
                  <Text style = {{fontSize: 16}}>Ngày giao: </Text>
                  <Text style = {{fontWeight: 'bold', fontSize: 16}}> 
                      {this.props.item.ngaygiao} 
                  </Text>
              </View>
              <View style = {{flexDirection: 'row'}}>
                  <Text style = {{fontSize: 16}}>(Khách thanh toán: </Text>
                  <Text style = {{fontWeight: 'bold', fontSize: 16}}> 
                      {this.props.item.thanhtoan} 
                  </Text>
                  <Text style = {{fontSize: 16}}>  |  Còn nợ: </Text>
                  <Text style = {{fontWeight: 'bold', fontSize: 16}}> 
                      {this.props.item.conno} 
                  </Text>    
                  <Text style = {{fontSize: 16}}>)</Text>
              </View>
              <View style = {{flexDirection: 'row'}}>
                  <Text style = {{fontSize: 16}}>Trạng thái thanh toán: </Text>
                  <Text style = {{fontWeight: 'bold', color: 'red', fontSize: 16}}> 
                      {this.props.item.trangthai} 
                  </Text>
              </View>
              <View style = {styles.listMark}>
                  <Text style = {{fontWeight: 'bold',alignSelf: 'center'}}>Hoàn tất</Text>
              </View>
          </View>
      )
  }
}
export default class ListApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 50, flexDirection: 'row'}}>
          <TouchableOpacity style={{marginLeft: 15, justifyContent: 'center'}}>
            <Icon
              name="menu"
              size={40}
              color="#32cd32"
            />
          </TouchableOpacity>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.LabelText}> Đơn hàng cần giao</Text>
          </View>
        </View>
        <View style={styles.SearchContainer}>
            <TextInput
              style={styles.SearchText}
              placeholder="Nhập thông tin cần tìm"
            />
            <Icon
              name="magnifying-glass"
              size={26}
              color="#778899"
              style={styles.IconSearch}
            />
        </View>
        <TouchableOpacity style={styles.TouchStyle}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.TextStyle}> Trạng thái </Text>
            <Icon
              name="chevron-down"
              size={26}
              color="#778899"
              style={styles.TouchIcon}
            />
          </View>
        </TouchableOpacity>
        <View style = {{margin: 10}}>
          <Text style = {{fontSize: 17,fontWeight: 'bold'}}>
            Tổng số kết quả: {DATA.length} 
          </Text>
        </View>
        <FlatList
          style ={{marginLeft: 15, marginRight: 15}} 
          data = {DATA}
          renderItem = {({item, index}) => {
            return (
              <FlatListItem item = {item} index = {index}>
              </FlatListItem>
            )
        }}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ItemContainer: {
    flex: 1,
    width: '100%', 
    borderBottomWidth: 0.5, 
    paddingBottom: 10, 
    paddingTop: 10, 
    justifyContent: 'center'
  },
  SearchContainer: {
    height: 60, 
    backgroundColor: '#EAEAEA', 
    paddingLeft: 10, 
    paddingRight: 10, 
    justifyContent: 'center'
  },
  IconSearch: {
    position: 'absolute',
    alignContent: 'center',
    alignSelf: 'flex-start',
    paddingLeft: 30,
  },
  LabelText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 15
  },
  SearchText: {
    borderRadius: 25,
    backgroundColor: 'white',
    margin: 10,
    paddingLeft: 50,
    fontSize:  16
  },
  TextStyle: {
    fontSize: 16,
    justifyContent: 'center',
    color: '#778899'
  },
  TouchStyle: {
    justifyContent: 'center',
    height: 40,
    margin: 10,
    borderBottomWidth: 0.5
  },
  listMark: {
    alignSelf: 'flex-end',
    position: 'absolute', 
    height: 25, 
    width: 80, 
    borderRadius: 25, 
    borderBottomWidth: 3, 
    backgroundColor: 'yellow'
  }
});

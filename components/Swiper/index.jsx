import { Component } from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { styles } from "./styles";

export class Swiper extends Component {
  render() {
    return (
      <SwiperFlatList {...styles} >
        {this.props.children}
      </SwiperFlatList >
    );
  }
}
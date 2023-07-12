import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export class GenericCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Let's start!!!</Text>
      </View>
    );
  }
}

export class WorkoutsCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      time: 0,
      image: '',
    };
  }

  componentDidMount() {
    console.log('Card Component Mounted');
    this.setState({
      title: this.props.title,
      time: this.props.time,
      image: this.props.image,
    });
  }

  render() {
    const {title, time, image, onPress, type} = this.props;

    return (
      <View style={styles.workoutCard}>
        <ImageBackground
          source={image}
          style={styles.image}
          imageStyle={{borderRadius: 20}}>
          <View style={styles.innerCard}>
            <></>
            <View style={styles.innerCardTxt}>
              <Text style={styles.txt}>{title}</Text>
              <Text style={styles.txt}>
                {time.toString()} {'min'}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  workoutCard: {
    width: '100%',
    height: 200,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#192a56',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 20,
  },
  innerCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCardTxt: {
    alignItems: 'center',
  },
  txt: {
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
    fontSize: 30,
    lineHeight: 34,
  },
});

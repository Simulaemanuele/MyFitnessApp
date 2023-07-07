import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';

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

  shouldComponentUpdate(prevProps) {
    return prevProps !== this.props;
  }

  render() {
    const {title, time, image} = this.props;

    return (
      <View style={styles.workoutCard}>
        <ImageBackground
          source={image}
          style={styles.image}
          imageStyle={{borderRadius: 20}}>
          <Text style={{color: '#fff'}}>{title}</Text>
          <Text style={{color: '#fff'}}>
            {time.toString()} {'min'}
          </Text>
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
    backgroundColor: 'blue',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

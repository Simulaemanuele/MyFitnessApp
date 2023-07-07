import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

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

    this.state = {};
  }

  render() {
    const {title, time, imgUrl} = this.props;

    return (
      <View>
        <Text>{title}</Text>
        <Text>
          {time.toString()} {'min'}
        </Text>
      </View>
    );
  }
}

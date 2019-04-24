/* eslint-disable no-use-before-define */
import React from "react"
import { View, Text, Image } from "react-native"
import { Icon } from "react-native-elements"

import { Card, CardSection } from "./index"

class FeedCard extends React.Component {
  state = {
    iconSelected: false,
  }

  render() {
    return (
      <Card>
        <View style={styles.containerStyle}>
          <Text style={styles.cardHeader}>{this.props.title}</Text>
          <View style={{ width: 400, height: 400 }}>
            <Image style={styles.imageStyle} source={{ uri: `${this.props.imageUrl}` }} />
          </View>
        </View>
        <CardSection>
          <Icon
            color={this.state.iconSelected ? "#FFD662" : "#000"}
            raised
            name="thumb-up"
            type="material"
            // eslint-disable-next-line react/jsx-no-bind
            onPress={() => {
              this.setState({ iconSelected: !this.state.iconSelected })
            }}
          />
          <Text style={{alignSelf:"center"}}>Like</Text>
        </CardSection>
      </Card>
    )
  }
}

export { FeedCard }

const styles = {
  containerStyle: {
    flex: 1,
    alignSelf: "center",
  },
  imageStyle: {
    flex: 1,
    alignSelf: "center",
    aspectRatio: 0.9,
  },
  cardHeader: {
    fontFamily: "OpenSans-Bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    paddingBottom: 10,
  },
}

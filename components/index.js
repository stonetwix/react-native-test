import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from './StyledButton';
import styles from './styles';

const DestinationItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.destination;

    return (
        <View style={styles.destinationContainer}>

        <ImageBackground source={image} 
        style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline}
            {' '}
            <Text style={styles.subtitleCTA}>
              {taglineCTA}
            </Text>
          </Text>
        </View> 

        <View style={styles.buttonsContainer}>
          <StyledButton type='primary' 
            content={'Book now'} 
            onPress={() => {
              console.warn('Book now was pressed')
            }}/>

            <StyledButton type='secondary' 
              content={'More details'} 
            onPress={() => {
              console.warn('More details was pressed')
            }}/>
        </View>
        
      </View>
    );
};

export default DestinationItem;
import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import styles from './styles';
import destinations from './destinations';
import DestinationItem from '../index';

const DestinationList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={destinations}
                renderItem={({item}) => <DestinationItem destination = {item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default DestinationList;
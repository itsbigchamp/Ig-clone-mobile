import { View, Image, Text } from "react-native";
import { photoCardStyles } from "../assets/styles";
import { Avatar } from "react-native-elements";
import { Icon } from "react-native-elements";

function PhotoCard({ photo }){
    const BASE_URL = 'https://source.unsplash.com/random?supercars='
    return (
        <>
            <View style={photoCardStyles.cardContainer}>
                <View style={photoCardStyles.cardHeader}>
                    {/* avatar */}
                    <Avatar rounded size='small' source={{uri: `https://randomuser.me/api/portraits/men/${photo.id}.jpg`}} />

                    <View style={photoCardStyles.cardHeaderText}>
                        <Text>Allen Perry</Text>
                        <Text style={photoCardStyles.cardLocation}>Miami, Florida</Text>
                    </View>
                </View> 
                <Icon name='more-vert' />   
            </View>

            <Image source={{ uri: BASE_URL + photo.id}} style={photoCardStyles.cardImage}/>
            <Icon name='favorite'/>
            <Text style={photoCardStyles.cardText}>Caption Area</Text>

        </>
    )
}

export default PhotoCard;
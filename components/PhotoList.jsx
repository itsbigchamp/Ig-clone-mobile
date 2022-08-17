
import { ScrollView } from "react-native";
import PhotoCard from "./PhotoCard";
import { photoListStyles } from "../assets/styles";

const bsPhotos = [
    {id:1,description: 'Selfie with Mom'},
    {id:2,description: 'Airplane pic'},
    {id:3,description: 'Latte Art'},
    {id:4,description: 'Family Vacation'},
    {id:5,description: 'Mountain-Top'},
    {id:6,description: 'Beach pic'},
]

function PhotoList() {
    return (
        <ScrollView style={photoListStyles.photoList}>
            {bsPhotos.map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </ScrollView>
    )
}


export default PhotoList;
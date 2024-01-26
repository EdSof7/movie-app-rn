import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
interface Props {
    movie: Movie;
}
export const PosterCard = ({ movie }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <View style={{ width: 300, height: 420 }}>
            <View style={styles.imgContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18
    },
    imgContainer: {
        flex: 1,
        borderRadius:18,
        shadowColor: "purple",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }
})

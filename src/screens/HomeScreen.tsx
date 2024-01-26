import React from 'react'
import { ActivityIndicator, View, } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies'
import { PosterCard } from '../components/PosterCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const HomeScreen = () => {
    const { moviesInTheather, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="purple" size={50} />
            </View>
        )
    }
    return (
        <View style={{ marginTop: top + 20 }}>
                <Carousel
                    data={moviesInTheather}
                    renderItem={()=> <PosterCard movie={moviesInTheather[0]}/>}
                    sliderWidth={350}
                    itemWidth={300}
                />
        </View>
    )
}

export default HomeScreen

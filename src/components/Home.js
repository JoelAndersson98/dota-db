import React from 'react'
// Styles
import LoadingSpinner from './LoadingSpinner';
import Grid from './Grid'
import HeroItemThumb from './HeroItemThumb';
import Background from './Background';
import SearchBar from './SearchBar';
// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';
import { IMAGE_BASE_URL } from '../config';
// Image
import IceFrog from '../images/icefrog.jpg';

const Home = () => {
    const { state, loading, error, setSearchTerm } = useHomeFetch();

    if(loading) {
        return (
            <>
            <Background>
                <LoadingSpinner/>
            </Background>
            </>
        )
    }
    if(error) {
        return (
            <>
            <Background>
                <h1 className="text-center padding-med">Something went wrong while fetching heroes.</h1>
            </Background>
            </>
        )
    }


    return (
        <>
        <Background>
        <SearchBar 
            setSearchTerm={setSearchTerm}
            placeholderText='Search Heroes'
        />
            <Grid>
                {state.heroes
                ?   state.heroes.map(hero => (
                        <HeroItemThumb
                            type="hero"
                            key={hero.id}
                            image={
                                hero.img
                                ? `${IMAGE_BASE_URL}${hero.img}`
                                : IceFrog
                            }
                            id={hero.id}
                            name={hero.localized_name}
                        />
                    ))
                :   ''
                }
            </Grid>
        </Background>
        </>
    )
};

export default Home;

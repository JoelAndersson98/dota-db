import React from 'react'
// Styles
import Grid from '../components/Grid';
import LoadingSpinner from './LoadingSpinner';
import Background from './Background';
import SearchBar from './SearchBar';
import HeroItemThumb from './HeroItemThumb';
import { IMAGE_BASE_URL } from '../config';
// Hook
import { useItemsFetch } from '../hooks/useItemsFetch';
// Image
import IceFrog from '../images/icefrog.jpg';

const Items = () => {
    const { state, loading, error, setSearchTerm } = useItemsFetch();

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
                <h1 className="text-center padding-med">Something went wrong while fetching items.</h1>
            </Background>
            </>
        )
    }

    return (
        <>
        <Background>
            <SearchBar 
                setSearchTerm={setSearchTerm}
                placeholderText='Search Items'
            />
            <Grid>
            {state.items.map(item => (
                <HeroItemThumb
                    type="item"
                    key={item.id}
                    id={item.id}
                    image={
                        item.img
                        ? `${IMAGE_BASE_URL}${item.img}`
                        : IceFrog
                    }
                    name={item.dname}
                />
            ))}
            </Grid>
        </Background>
        </>
    )
};

export default Items;
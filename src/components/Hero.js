import React from 'react'
import { useParams } from 'react-router-dom'
// Hook & Config
import { useHeroFetch } from '../hooks/useHeroFetch';
// Components
import LoadingSpinner from './LoadingSpinner';
import Background from './Background';
import HeroBanner from './HeroBanner';
import AbilityGrid from './AbilityGrid';
import AbilityCard from './AbilityCard';
import HeroLore from './HeroLore';
import HeroStats from './HeroStats';


const Hero = () => {
    const { heroId } = useParams();
    const { state: hero, loading, error, abilities, lore } = useHeroFetch(heroId);

    console.log(abilities);

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
                <h1 className="text-center padding-med">Something went wrong while fetching hero data.</h1>
            </Background>
            </>
        )
    }

    return (
        <>
        <HeroBanner hero={hero[0]}/>
            <Background>
                <h1 className="text-center padding-sm">Stats</h1>
                <HeroStats stats={hero[0]}/>
                <HeroLore lore={lore.heroLore}/>
                <h1 className="text-center">Abilities</h1>
                <AbilityGrid
                    children={abilities.abilities.map(ab => (
                        <AbilityCard ability={ab} key={ab.dname}/>
                    ))}
                />
            </Background>
        </>
    )
};

export default Hero;
import React from 'react'
import { Link } from 'react-router-dom';
import { Wrapper,Image } from './HeroItemThumb.styles'
// Fallback Image
import { addFallback } from '../../helpers';

const HeroItemThumb = ({ type, image, id, name }) => {

    return (
        <Wrapper>
            {type === "hero"
            ?   <Link to={`/hero/${id}`}>
                    <Image type="hero" src={image} alt='hero-img' onError={(e) => {addFallback(e.currentTarget)}}/>
                    <p>{name}</p>
                </Link>
            :   <Link to={`/item/${id}`}>
                    <Image type="item" src={image} alt='item-img' onError={(e) => {addFallback(e.currentTarget)}}/>
                    <p>{name}</p>
                </Link>
            }
        </Wrapper>
    )
};

export default HeroItemThumb;
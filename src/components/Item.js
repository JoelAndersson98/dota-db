import React from 'react'
import {useParams} from 'react-router-dom'
// Hook & Config
import { useItemFetch } from '../hooks/useItemFetch';
import { IMAGE_BASE_URL } from '../config';
// Components
import ItemHeader from './ItemHeader';
import LoadingSpinner from './LoadingSpinner';
import Background from './Background';
import ItemAttributes from './ItemAttributes';
import ItemActive from './ItemActive';

const Item = () => {
    const { itemId } = useParams();
    const { item, loading, error } = useItemFetch(itemId);

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
                <h1 className="text-center padding-med">Something went wrong while fetching item data.</h1>
            </Background>
            </>
        )
    }

    return (
        <>
        <div className="container">
            <ItemHeader
                image={`${IMAGE_BASE_URL}${item[0].img}`}
                name={item[0].dname}
                components={item[0].components}
                goldCost={item[0].cost}
                tier={item[0].tier}
            />
            <Background>
                {item[0].attrib
                ? <ItemAttributes attributes={item[0].attrib} lore={item[0].lore}/>
                : ''
                }
                {item[0].hint
                ? <ItemActive 
                    active={item[0].hint} 
                    notes={item[0].notes}
                    mc={item[0].mc}
                    cd={item[0].cd}/>
                : ''}
            </Background>
        </div>
        </>
    )
}

export default Item;
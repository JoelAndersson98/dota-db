import React from 'react'
import { Wrapper, Content, Components } from './ItemHeader.styles'
// Hook & Config
import { IMAGE_BASE_URL } from '../../config';
import useComponentFetch from '../../hooks/useComponentFetch';
import { addFallback } from '../../helpers';
// Icons
import Gold from '../../images/gold_icon.png';

const ItemHeader = ({image, name, components, goldCost, tier}) => {
    const { comp } = useComponentFetch(components)

    return (
        <>
            <Wrapper>
                <Content>
                    <img src={image} onError={(e) => {addFallback(e.currentTarget)}} alt='item-img'/>
                    <h2>{name}</h2>
                    {goldCost
                    ?   <div className="cost">
                            <img src={Gold} alt='gold-cost'/>
                            <p>{goldCost}</p>
                        </div>
                    :   ''
                    }
                    {tier
                    ?   <div className="tier">
                            <p>Tier: <span>{tier}</span></p>
                        </div>
                    :   ''
                    }
                    {components
                    ? 
                    <Components>
                        <h3>Components</h3>
                        <div className="wrap">
                            {comp.itemsArray
                            ?   comp.itemsArray.map((item) => (
                                <img 
                                    src={
                                    item[0].img
                                    ? `${IMAGE_BASE_URL}${item[0].img}`
                                    : ''
                                    }
                                    alt={item[0].dname}
                                    key={item[0].id}
                                />
                            ))
                            :   'no'
                            }
                        </div>
                    </Components>
                    : ''}
                </Content>
            </Wrapper>
        </>
    )
};

export default ItemHeader;
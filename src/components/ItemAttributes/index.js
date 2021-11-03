import React from 'react'
import { Wrapper, Content, Lore, Stats } from './ItemAttributes.styles'

const ItemAttributes = ({attributes, lore}) => (
    <Wrapper>
        <Content>
            <Lore>
                <h3>Lore</h3>
                <p>{lore}</p>
            </Lore>
            <Stats>
                <div>
                    {attributes.length > 0
                    ? <h3>Attributes</h3>
                    : ''
                    }
                    {attributes.map(attrib => (
                    <div className="stat-box" key={attrib.key}>
                        <p>{attrib.header} 
                        {Array.isArray(attrib.value)
                        ? attrib.value.map(a => (
                            `${a}/`
                        ))
                        : attrib.value
                        }
                        </p>
                        <p>{attrib.footer}</p>
                    </div>
                    ))}
                </div>
            </Stats>
        </Content>
    </Wrapper>
);

export default ItemAttributes;
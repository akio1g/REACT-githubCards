import React from 'react';
import Card from './Card';

const CardList = (props) => (
    <>
        {props.list.map(
        profile => (
            <Card key={profile.id} image={profile.srcImg} name={profile.name} repo={profile.repos} />
            )
        )}
    </>
)

export default CardList;
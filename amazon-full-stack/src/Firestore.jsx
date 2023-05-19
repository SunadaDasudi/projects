// import { db } from './firebase_configuration';
import { collection } from 'firebase/firestore'
import { db } from './firebase_configuration'
import React from 'react'

function Firestore() {
    const ref = collection(db, 'test-collection');//.Firestore().collection('test-collection');

    console.log('test-collection', ref);

    return (
        <div>Firestore</div>
    )
}

export default Firestore

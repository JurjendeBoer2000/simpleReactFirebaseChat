import React, {useState, useEffect, useRef} from 'react'
import SignOut from './SignOut'
import {db} from '../firebase'
import {onSnapshot, collection, query, orderBy} from '@firebase/firestore'
import SendMessage from './SendMessage'
import { auth } from '../firebase'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    console.log(messages)
    useEffect(() => {
        const collectionRef = collection(db, "messages")
        const q = query(collectionRef, orderBy("timestamp", "asc"));

        onSnapshot(q, collection(db, "messages"), (snapshot) => 
            setMessages(snapshot.docs.map((doc) => doc.data()))
    )}, []);
    return (
        <div>
          <SignOut/>
          <div className='msgs'>
          {messages.map(({id, text, photoURL, uid}) => (
                <div>
                    <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                    <img src={photoURL} alt=""/>
                    <p>{text}</p>
                    </div>
                    </div>
            ))}
            </div>

            <SendMessage scroll={scroll}/>
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat

'use server'
import util from 'util'
import client from 'emitter-io'

export const getChatrooms = async () => {
    try {
        const roomsClient = client.connect({
            host: 'localhost',
            port: 5071,
        })
        const roomsKey = process.env.SERVER_GENERAL_KEY
        if (!roomsKey) throw new Error('No general key found for subscribing to available chatrooms.')
        roomsClient.subscribe({
            key: roomsKey,
            channel: 'chatrooms',
        })
        roomsClient.on('message', function(msg: any) {
            console.log('Message from roomsClient: ', msg.asString())
        })
        const chatroomURL = new URL(process.env.BACKEND_URL + '/api/Chatroom')
        const res = await fetch(process.env.BACKEND_URL + '/api/Chatroom', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: null
        })
        if (!res.ok) throw new Error('Error while fetching chatrooms.', { cause: util.inspect(res) })
        console.log('Response From getChatrooms: ', res)
        return res.json();
    } catch (error: any) {
        console.log('Error From getChatrooms: ', error)
        return {
            status: 500,
            message: error.message
        };
    }
}

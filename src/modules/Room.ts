import { addDoc, collection, getFirestore } from 'firebase/firestore'


export interface Room {
    data: RoomRecord | null
}

export interface RoomRecord {
    id: string
}

export async function createRoom(ownerID: string | null): Promise<Room> {
    if (ownerID == null) return { data: null }

    const data = await addDoc(collection(getFirestore(), 'rooms'), {}) as RoomRecord | null
    return { data }
}
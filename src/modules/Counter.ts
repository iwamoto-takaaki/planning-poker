import { ref, Ref } from 'vue'
import {
    getFirestore,
    increment as firestoreIncrement, 
    onSnapshot,
    updateDoc,
    doc,
} from 'firebase/firestore';
 
export interface Counter {
    count: Ref<number>
    increment: () => {}
}

interface counterRecord {
    id: string,
    value: number
}

export function getCounter(): Counter {
    const count = ref(0)

    const docRef = doc(getFirestore(), 'counter', 'JPk5xNLIe0yww0g9VejV')

    onSnapshot(docRef, function(snapshot) {
        const record = snapshot.data() as counterRecord
        count.value = record.value
    })

    const increment = async () => {
        await updateDoc(docRef, { value: firestoreIncrement(1) })
    }

    return {count, increment}
}

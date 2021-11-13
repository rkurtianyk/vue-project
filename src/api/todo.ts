import {
    DocumentReference,
    collection,
    getDocs,
    doc,
    setDoc,
    addDoc,
    deleteDoc,
} from 'firebase/firestore';
import { TodoItem } from '../models/state';

const getTodos = async (database): Promise<TodoItem[]> => {
    const todosCollection = collection(database, 'todos');
    const todosSnapshot = await getDocs(todosCollection);
    const todosList = todosSnapshot.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        return {
            id,
            text: data.text,
            done: data.done,
        };
    });
    return todosList;
};

const addTodo = async (database, text: string): Promise<DocumentReference<any>> =>
    await addDoc(collection(database, 'todos'), {
        text,
        done: false,
    });

const deleteTodo = async (database, id: string): Promise<void> =>
    await deleteDoc(doc(database, 'todos', id));

const updateTodo = async (database, id: string, data: TodoItem): Promise<void> =>
    await setDoc(doc(database, 'todos', id), data);

export { getTodos, addTodo, deleteTodo, updateTodo };

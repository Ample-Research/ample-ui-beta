import { firestore } from './firebaseConfig';  // adjust the import based on your Firebase configuration file
// userUID is the UID from Firebase Authentication
// const firestore = getFirestore(firebaseApp);

export const addTaskToUser = async (userId, data, task_id) => {
    try {
        const userRef = firestore.collection('users').doc(userId);
        const tasksCollection = userRef.collection('tasks');
        const currentDate = new Date();
        await tasksCollection.doc(task_id).set({
            task_id: task_id,
            title: data.title,
            date_created: currentDate,
        });
        console.log(`Task ${task_id} added successfully`);
    } catch (error) {
        console.error('Error adding task:', error);
    }
}


export const getTasksForUser = async (userId) => {
    try {
        const userRef = firestore.collection('users').doc(userId);
        const tasksCollection = userRef.collection('tasks');
        const snapshot = await tasksCollection.get();
        const tasks = snapshot.docs.map(doc => doc.data());
        return tasks;
    } catch (error) {
        console.error('Error retrieving tasks:', error);
        return [];
    }
}


export const deleteTaskForUser = async (userId, taskId) => {
    try {
        const userRef = firestore.collection('users').doc(userId);
        const taskRef = userRef.collection('tasks').doc(taskId);

        await taskRef.delete();

        console.log('Task deleted successfully');
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}

export const updateTaskForUser = async (userId, task) => {
    try {
        const userRef = firestore.collection('users').doc(userId);
        const taskRef = userRef.collection('tasks').doc(task.task_id);

        await taskRef.update({
            error_message: task.error_message,
            status: task.status
        });

        console.log('Task updated successfully');
    } catch (error) {
        console.error('Error updating task:', error);
    }
}



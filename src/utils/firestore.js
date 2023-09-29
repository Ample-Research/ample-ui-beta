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
            status: "initiated",
            completion_percentage: 0,
            date_created: currentDate.toString(),
            error_message: "",
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
        let error_update = ""
        if (task.error_message) {
            error_update = task.error_message
        }
        await taskRef.update({
            error_message: error_update,
            status: task.status,
            completion_percentage: task.completion_percentage,
            date_created: task.date_created,
            download_link: task.download_link
        });

        console.log('Task updated successfully');
    } catch (error) {
        console.error('Error updating task:', error);
    }
}



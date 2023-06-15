// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { useDispatch, useSelector } from 'react-redux';
// import FormContainer from '../components/FormContainer';
// import Loader from '../components/Loader';
// import { useGetnoteQuery } from '../slices/usersApiSlice';
// import { setCredentials } from '../slices/authSlice';

// const ViewNoteScreen = () => {
//   const { noteId } = useParams();
//   const { userInfo } = useSelector((state) => state.auth);

//   const title = useSelector((state) => state.title)

//   useEffect(() => {
//     // Fetch the note details using the noteId
//     // You can use an API call or fetch the note from your state/store
//     // Example:
//     // const note = fetchNoteById(noteId);
    

//     // Handle cases where note is not found or user is not authorized to view the note
//     // Example:
//     // if (!note || note.userId !== userInfo.userId) {
//     //   toast.error('Note not found or unauthorized to view');
//     //   // Redirect to a different page, such as the note list page
//     //   // history.push('/notes');
//     // }
//   }, [noteId, userInfo]);

//   return (
//     <div>
//       {/* Display the note details */}
//       {/* Example: */}
//       {/* <h1>{note.title}</h1>
//       <p>{note.content}</p> */}
//     </div>
//   );
// };

// export default ViewNoteScreen;

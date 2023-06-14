import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetNotesQuery } from '../slices/notesApiSlice';
import { toast } from 'react-toastify';

const ViewNotesScreen = () => {
  const dispatch = useDispatch();

  const { data: notes, isLoading, isError } = useGetNotesQuery();

  useEffect(() => {
    if (isError) {
      toast.error('Failed to fetch notes');
    }
  }, [isError]);

  return (
    <div>
      <h1>View Notes</h1>

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Failed to fetch notes</div>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewNotesScreen;

import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateNoteMutation } from '../slices/notesApiSlice';
import { toast } from 'react-toastify';

const AddNoteScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [createNote, { isLoading }] = useCreateNoteMutation();

  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    navigate('/');
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await createNote({
        title,
        content,
      }).unwrap();
      // Do something with the response if needed
      toast.success('Note created successfully');
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div>
      <h1>Create Note</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter note title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='my-2' controlId='content'>
          <Form.Label>Note</Form.Label>
          <Form.Control
            as='textarea'
            rows={4}
            placeholder='Enter note'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3' disabled={isLoading}>
          Save Note
        </Button>

        {isLoading && <div>Loading...</div>}
      </Form>
    </div>
  );
};

export default AddNoteScreen;

import React,{useState,useEffect} from 'react';
import Rating from './Rating';
import Modal from './Modal/Modal';


const Add = ({ addMovie }) => {
    const [show, setShow] = useState(false);

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [rate, setRate] = useState(0);
  
    const handleRate = (rate) => setRate(rate);
  
    const toggleModal = () => setShow(!show);
    
    const resetModal = () => {
      setName("");
      setImage("");
      setDate("");
      setRate(0);
    };
  
    useEffect(() => {
      resetModal();
    }, [show]);
  
    return (
      <div className="add">
        <button className="btn1" onClick={toggleModal}>
          Add Movie
        </button>
        <Modal isOpen={show} closeModal={toggleModal}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const newMovie = {
                name,
                image,
                date,
                rate,
                id: Math.random(),
              };
              addMovie(newMovie);
              toggleModal();
            }}
          >
            <h1>Add Movie </h1>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Date of Release</label>
            <input
              required
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Rate</label>
  
            <Rating handleRate={handleRate} movieRate={rate} />
  
            <input
              required
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <label>Image URL</label>
            <input
              required
              value={image}
              type="url"
              onChange={(e) => setImage(e.target.value)}
            />
            <div>
              <button className="btn2">Add</button>
              <button className="btn3" onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  };
  
  export default Add;
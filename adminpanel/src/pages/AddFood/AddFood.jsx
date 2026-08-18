import React from 'react';
import { assets } from '../../assets/assets';
import { addFood } from '../../services/foodService';
import { toast } from 'react-toastify';

const AddFood = () => {
  const [image, setImage] = React.useState(false);
  const [data, setData] = React.useState({
    name: '',
    category: '',
    price: '',
    description: ''
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const onsubmitHandler = async (event) => {
    event.preventDefault();
    if (!image) {
      alert('Please upload an image');
      return;
    }
    try {
      await addFood(data, image);
      toast.success('Food Added Successfully');
      setData({
        name: '',
        category: '',
        price: '',
        description: ''
      });
      setImage(null); 
      
    } catch (error) {
      toast.error('Error while adding food');
      console.log(error);
    }


  };

  return (
    <div className="mx-2 mt-2">
      <div className="row ">
        <div className="card col-md-4">
          <div className="card-body mt-4">
            <h2 className="mb-4">Add Food</h2>
            <form onSubmit={onsubmitHandler}>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img
                    src={image ? URL.createObjectURL(image) : assets.upload}
                    alt="upload"
                    style={{ width: '60px', height: '60px', cursor: 'pointer' }}
                  />
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  placeholder='Enter food name'
                  className="form-control"
                  id="name"
                  required
                  name="name"
                  onChange={onChangeHandler}
                  value={data.name}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="category"
                  required
                  name="category"
                  onChange={onChangeHandler}
                  value={data.category}
                >
                  <option value="" disabled>Select Category</option>
                  <option value="Biryani">Biryani</option>
                  <option value="Burger">Burger</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Cake">Cake</option>
                  <option value="Salad">Salad</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Ice-cream">Ice-cream</option>
                  
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                  type="number"
                  placeholder='₹ Enter food price'
                  name="price"
                  className="form-control"
                  id="price"
                  required
                  onChange={onChangeHandler}
                  value={data.price}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  placeholder='Write description content here ...'
                  id="description"
                  rows="5"
                  required
                  name="description"
                  onChange={onChangeHandler}
                  value={data.description}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
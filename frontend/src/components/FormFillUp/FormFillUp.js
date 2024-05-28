// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import '../../assets/styles/FormFillUp.css';

// const FormFillUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     address: '',
//     assets: '',
//     fieldOfInterest: '',
//     typeOfUser: 'entrepreneur',
//     rating: 5,
//     profit: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to submit data to the backend
//     console.log('Form Data:', formData);

//     // Post data to the backend
//     fetch('https://your-backend-api.com/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//       navigate('/dashboard');
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   };

//   return (
//     <div className="form-container">
//       <h2>Fill Up Your Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Assets</label>
//           <input type="text" name="assets" value={formData.assets} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Field of Interest</label>
//           <input type="text" name="fieldOfInterest" value={formData.fieldOfInterest} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Type of User</label>
//           <select name="typeOfUser" value={formData.typeOfUser} onChange={handleChange} required>
//             <option value="entrepreneur">Entrepreneur</option>
//             <option value="mentor">Mentor</option>
//             <option value="investor">Investor</option>
//           </select>
//         </div>
//         {formData.typeOfUser === 'mentor' && (
//           <div className="form-group">
//             <label>Rating</label>
//             <input type="number" name="rating" value={formData.rating} readOnly />
//           </div>
//         )}
//         {formData.typeOfUser === 'investor' && (
//           <div className="form-group">
//             <label>Profit on Past Investments</label>
//             <input type="text" name="profit" value={formData.profit} onChange={handleChange} required />
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormFillUp;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import '../../assets/styles/FormFillUp.css';

// const FormFillUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     address: '',
//     assets: '',
//     fieldOfInterest: '',
//     typeOfUser: 'entrepreneur',
//     rating: 5,
//     profit: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to submit data to the backend
//     console.log('Form Data:', formData);

//     // Post data to the backend
//     fetch('http://localhost:5000/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//       navigate('/dashboard');
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   };

//   return (
//     <div className="form-container">
//       <h2>Fill Up Your Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Assets</label>
//           <input type="text" name="assets" value={formData.assets} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Field of Interest</label>
//           <input type="text" name="fieldOfInterest" value={formData.fieldOfInterest} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Type of User</label>
//           <select name="typeOfUser" value={formData.typeOfUser} onChange={handleChange} required>
//             <option value="entrepreneur">Entrepreneur</option>
//             <option value="mentor">Mentor</option>
//             <option value="investor">Investor</option>
//           </select>
//         </div>
//         {formData.typeOfUser === 'mentor' && (
//           <div className="form-group">
//             <label>Rating</label>
//             <input type="number" name="rating" value={formData.rating} readOnly />
//           </div>
//         )}
//         {formData.typeOfUser === 'investor' && (
//           <div className="form-group">
//             <label>Profit on Past Investments</label>
//             <input type="text" name="profit" value={formData.profit} onChange={handleChange} required />
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormFillUp;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import '../../assets/styles/FormFillUp.css';

// const FormFillUp = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     name: '',
//     phone: '',
//     address: '',
//     assets: '',
//     field_of_interest: '',
//     type: 'Entrepreneur', // default type
//     profit_on_past_investments: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/users/register', formData);
//       alert('User registered successfully');
//     } catch (error) {
//       console.error(error);
//       alert('Error registering user');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//       <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//       <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
//       <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
//       <input type="text" name="assets" placeholder="Assets" value={formData.assets} onChange={handleChange} required />
//       <input type="text" name="field_of_interest" placeholder="Field of Interest" value={formData.field_of_interest} onChange={handleChange} required />
      
//       <select name="type" value={formData.type} onChange={handleChange} required>
//         <option value="Entrepreneur">Entrepreneur</option>
//         <option value="Mentor">Mentor</option>
//         <option value="Investor">Investor</option>
//       </select>

//       {formData.type === 'Investor' && (
//         <input type="text" name="profit_on_past_investments" placeholder="Profit on Past Investments" value={formData.profit_on_past_investments} onChange={handleChange} required />
//       )}
      
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormFillUp;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import '../../assets/styles/FormFillUp.css';

// const FormFillUp = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const email = location.state?.email || '';

//   const [formData, setFormData] = useState({
//     email, // Autofill email from location state
//     name: '',
//     phone: '',
//     address: '',
//     assets: '',
//     fieldOfInterest: '',
//     typeOfUser: 'entrepreneur',
//     rating: 5,
//     profit: ''
//   });


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to submit data to the backend
//     console.log('Form Data:', formData);

//     // Post data to the backend
//     fetch('http://localhost:5000/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//       navigate('/dashboard');
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   };

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({
//   //     ...formData,
//   //     [name]: value
//   //   });
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   // Logic to submit data to the backend
//   //   console.log('Form Data:', formData);

//   //   // Post data to the backend
//   //   fetch('http://localhost:5000/api/users', {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     },
//   //     body: JSON.stringify(formData)
//   //   })
//   //   .then(response => response.json())
//   //   .then(data => {
//   //     console.log('Success:', data);
//   //     navigate('/dashboard');
//   //   })
//   //   .catch((error) => {
//   //     console.error('Error:', error);
//   //   });
//   // };

//   return (
//     <div className="form-container">
//       <h2>Fill Up Your Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} readOnly />
//         </div>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Assets</label>
//           <input type="text" name="assets" value={formData.assets} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Field of Interest</label>
//           <input type="text" name="fieldOfInterest" value={formData.fieldOfInterest} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Type of User</label>
//           <select name="typeOfUser" value={formData.typeOfUser} onChange={handleChange} required>
//             <option value="entrepreneur">Entrepreneur</option>
//             <option value="mentor">Mentor</option>
//             <option value="investor">Investor</option>
//           </select>
//         </div>
//         {formData.typeOfUser === 'mentor' && (
//           <div className="form-group">
//             <label>Rating</label>
//             <input type="number" name="rating" value={formData.rating} readOnly />
//           </div>
//         )}
//         {formData.typeOfUser === 'investor' && (
//           <div className="form-group">
//             <label>Profit on Past Investments</label>
//             <input type="text" name="profit" value={formData.profit} onChange={handleChange} required />
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormFillUp;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../../assets/styles/FormFillUp.css';

const FormFillUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';

  const [formData, setFormData] = useState({
    email,
    name: '',
    phone: '',
    address: '',
    assets: '',
    field_of_interest: '',
    type: 'Entrepreneur',
    rating: 5,
    profit_on_past_investments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        // console.log('Success:', data);

        navigate('/');
        alert('Successful SignUp',data);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Fill Up Your Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} readOnly />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Assets</label>
          <input type="text" name="assets" value={formData.assets} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Field of Interest</label>
          <input type="text" name="field_of_interest" value={formData.field_of_interest} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Type of User</label>
          <select name="type" value={formData.type} onChange={handleChange} required>
            <option value="Entrepreneur">Entrepreneur</option>
            <option value="Mentor">Mentor</option>
            <option value="Investor">Investor</option>
          </select>
        </div>
        {formData.type === 'Mentor' && (
          <div className="form-group">
            <label>Rating</label>
            <input type="number" name="rating" value={formData.rating} readOnly />
          </div>
        )}
        {formData.type === 'Investor' && (
          <div className="form-group">
            <label>Profit on Past Investments</label>
            <input type="text" name="profit_on_past_investments" value={formData.profit_on_past_investments} onChange={handleChange} required />
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormFillUp;

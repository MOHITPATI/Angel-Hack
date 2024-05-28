// const express = require('express');
// const router = express.Router();

// const Entrepreneur = require('../models/Entrepreneur');
// const Mentor = require('../models/Mentor');
// const Investor = require('../models/Investor');

// router.post('/', (req, res) => {
//     const { name, phone, address, assets, fieldOfInterest, typeOfUser, rating, profit } = req.body;

//     if (typeOfUser === 'entrepreneur') {
//         const newEntrepreneur = new Entrepreneur({ name, phone, address, assets, fieldOfInterest });
//         newEntrepreneur.save()
//             .then(user => res.json(user))
//             .catch(err => res.status(400).json('Error: ' + err));
//     } else if (typeOfUser === 'mentor') {
//         const newMentor = new Mentor({ name, phone, address, assets, fieldOfInterest, rating });
//         newMentor.save()
//             .then(user => res.json(user))
//             .catch(err => res.status(400).json('Error: ' + err));
//     } else if (typeOfUser === 'investor') {
//         const newInvestor = new Investor({ name, phone, address, assets, fieldOfInterest, profit });
//         newInvestor.save()
//             .then(user => res.json(user))
//             .catch(err => res.status(400).json('Error: ' + err));
//     } else {
//         res.status(400).json('Error: Invalid user type');
//     }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Entrepreneur = require('../models/Entrepreneur');
// const Mentor = require('../models/Mentor');
// const Investor = require('../models/Investor');
// const User = require('../models/User');

// router.post('/register', async(req, res) => {
//     const { email, name, phone, address, assets, field_of_interest, type, profit_on_past_investments } = req.body;

//     try {
//         // Create a new user entry
//         const newUser = new User({ email_id: email, type });
//         await newUser.save();

//         // Insert data into the appropriate collection
//         if (type === 'Entrepreneur') {
//             const newEntrepreneur = new Entrepreneur({ email_id: email, name, phone, address, assets, field_of_interest });
//             await newEntrepreneur.save();
//         } else if (type === 'Mentor') {
//             const newMentor = new Mentor({ email_id: email, name, phone, address, assets, field_of_interest });
//             await newMentor.save();
//         } else if (type === 'Investor') {
//             const newInvestor = new Investor({ email_id: email, name, phone, address, assets, field_of_interest, profit_on_past_investments });
//             await newInvestor.save();
//         }

//         res.status(201).send('User registered successfully');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Entrepreneur = require('../models/Entrepreneur');
const Mentor = require('../models/Mentor');
const Investor = require('../models/Investor');
const User = require('../models/User');

router.post('/register', async(req, res) => {
    const { email, name, phone, address, assets, field_of_interest, type, profit_on_past_investments } = req.body;

    // Log received data for debugging
    console.log('Received data:', req.body);

    try {
        // Create a new user entry
        const newUser = new User({ email_id: email, type });
        await newUser.save();

        // Insert data into the appropriate collection
        if (type === 'Entrepreneur') {
            const newEntrepreneur = new Entrepreneur({ email_id: email, name, phone, address, assets, field_of_interest });
            await newEntrepreneur.save();
        } else if (type === 'Mentor') {
            const newMentor = new Mentor({ email_id: email, name, phone, address, assets, field_of_interest });
            await newMentor.save();
        } else if (type === 'Investor') {
            const newInvestor = new Investor({ email_id: email, name, phone, address, assets, field_of_interest, profit_on_past_investments });
            await newInvestor.save();
        }

        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send('Server error');
    }
});

router.post('/getUserData', async(req, res) => {
    const { email } = req.body;

    try {
        // Fetch user type
        const user = await User.findOne({ email_id: email });
        if (!user) {
            return res.status(404).send('User not found');
        }

        let userData;
        if (user.type === 'Entrepreneur') {
            userData = await Entrepreneur.findOne({ email_id: email });
        } else if (user.type === 'Mentor') {
            userData = await Mentor.findOne({ email_id: email });
        } else if (user.type === 'Investor') {
            userData = await Investor.findOne({ email_id: email });
        }

        if (!userData) {
            return res.status(404).send('User data not found');
        }

        res.status(200).json({ userData, type: user.type });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});


module.exports = router;
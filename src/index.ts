// import { User } from './models/User';
// const user = new User({ name: 'myname', age: 20 });

// user.set({ name: 'newname', age: 9999 });

// user.on('change', () => {
//   console.log('change1');
// });
// user.on('change', () => {
//   console.log('change2');
// });
// user.on('save', () => {
//   console.log('save');
// });

// user.trigger('xxsxa');

// import axios from 'axios';

// axios.get('http://localhost:3000/users/1');

import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'Manjado', age: 33 });

user.save();

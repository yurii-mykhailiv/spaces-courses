import avatarYurii from '../assets/AvatarYurii.jpg'
import avatarPeter from '../assets/AvattarPeter.png'
export const usersInfo = [
  {
    id:1,
    email:'yurii@gmail.com',
    password:'password1',
    name:'Yurii',
    role:'Developer',
    avatar: avatarYurii,
    courses:{
      length:15,
      progress:3
    },
    folders:{
      length:10,
      progress:6
    },
    books:{
      length:19,
      progress:3
    },
    completed: '37%',
    nextLevel: '63%'
  },
  {
    id:2,
    email:'peter@gmail.com',
    password:'password1',
    name:'Peter',
    role:'Admin',
    avatar:avatarPeter,
    courses:{
      length:14,
      progress:7
    },
    folders:{
      length:10,
      progress:5
    },
    books:{
      length:19,
      progress:18
    },
    completed: '77%',
    nextLevel: '23%'
  }
]
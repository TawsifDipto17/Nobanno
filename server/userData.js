

let user = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    avatar: 'https://via.placeholder.com/150', // Sample avatar URL
    bio: 'A React enthusiast',
    username: 'johndoe',
    contact: '123-456-7890',
  };
  
  export function getUserData() {
    return user;
  }
  
  export function updateUserData(updatedUser) {
    
    user = { ...user, ...updatedUser };
  }
  
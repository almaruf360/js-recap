const isActive = false;
const showUser = () => console.log('show user');
const hideUser = () => console.log('hide user');
isActive ? showUser() :hideUser();

isActive || showUser;
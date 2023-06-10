const initialState = {
  
  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out'
    },
   {
      id: '2',
      title: 'Test list',
      description: 'Lorem Ipsum'
   }
 ],

  columns: [
    {
      id: 1,
      listId: '1',
      title: 'Books',
      icon: 'book',
    },
    {
      id: 2,
      listId: '1',
      title: 'Movies',
      icon: 'film',
    },
    {
      id: 3,
      listId: '1',
      title: 'Games',
      icon: 'gamepad',
    },
    {
      id: 4,
      listId: '2',
      title: 'Music',
      icon: 'headphones',
    },
    {
      id: 5,
      listId: '2',
      title: 'Movies',
      icon: 'film',
    },
  ],


  cards: [
    { id: 1, columnId: 1, title: 'This is Going to Hurt' },
    { id: 2, columnId: 1, title: 'Interpreter of Maladies' },
    { id: 3, columnId: 2, title: 'Harry Potter' },
    { id: 4, columnId: 2, title: 'Star Wars' },
    { id: 5, columnId: 3, title: 'The Witcher' },
    { id: 6, columnId: 3, title: 'Skyrim' },
    { id: 7, columnId: 4, title: 'Star Trek music' },
    { id: 8, columnId: 5, title: 'Star Trek' },
  ],
  searchQuery: '',
};

export default initialState;

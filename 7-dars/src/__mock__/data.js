export const usersFake = [
  {
    id: 1,
    name: 'John',
    phoneNumber: '+999912121',
    avatarUrl: '',
    lastMessage: {
      createdDate: new Date(),
      text: 'Salom',
      isMyMessage: true,
      isRead: true,
    },
    messages: [
      {
        createdDate: new Date(),
        text: 'Salom',
        isMyMessage: true,
        isRead: true,
      },
      {
        createdDate: new Date(),
        text: 'Qalesan',
      },
    ],
  },
  {
    id: 2,
    name: 'Doe',
    phoneNumber: '123123123',
    avatarUrl: '',
    lastMessage: {
      createdDate: new Date(),
      text: 'Salom',
      isMyMessage: false,
    },
    messages: [
      {
        createdDate: new Date(),
        text: 'Yaxshi ',
      },
      {
        createdDate: new Date(),
        text: 'Ozinche',
        isMyMessage: true,
        isRead: true,
      },
    ],
  },
  {
    id: 3,
    name: 'nimadir 3',
    phoneNumber: 'nimadir 1',
    avatarUrl: '',
    lastMessage: {
      createdDate: new Date(),
      text: 'Salom',
      isMyMessage: false,
    },
    messages: [],
  },
]

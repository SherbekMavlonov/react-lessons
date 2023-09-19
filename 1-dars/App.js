// Javascript
// const rootJs = document.querySelector('#root')
// const heading1 = document.createElement('h1')
// heading1.textContent = 'Hello world'

// rootJs.appendChild(heading1)

// React
// const heading = React.createElement('h1', {}, 'Hello world')

// const root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(heading)
// const heading1 = React.createElement('h1', {}, 'Hello world')
// const heading2 = React.createElement('h2', {}, 'Salom dunyo')
// const container = React.createElement(
//   'div',
//   {
//     id: 'container',
//     // hello: 'world',
//     // john: 'doe',
//   },
//   heading1,
//   heading2
// )

// const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render(container)

// const fruits = ['Olma', "Olxo'ri", 'Olcha', 'Banan', 'Anor']

// const lists = fruits.map((fruit, index) => {
//   return React.createElement(
//     'li',
//     {
//       key: index,
//     },
//     `${fruit}`
//   )
// })

// const ul = React.createElement('ol', {}, lists)

// const row = React.createElement(
//   'div',
//   {
//     className: 'row',
//   },
//   ul
// )

// const container = React.createElement(
//   'div',
//   {
//     className: 'container',
//   },
//   row
// )

// const root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(container)

// const cards = []

// const imgs = [
//   'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ANyU-xB6BUCwLXDLjKUZHNeVyGdyyKnf2eS2aF4ppQ&s',
// ]
// const imgElements = imgs.map((img, idx) =>
//   React.createElement('img', {
//     src: img,
//     key: idx,
//   })
// )

// ReactDOM.createRoot(document.querySelector('#root')).render(imgElements)

const cards = [
  {
    userID: 1,
    title: 'Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    img: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
  },
  {
    userID: 2,
    title: 'Lorem Ipsum 2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    img: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
  },
  {
    userID: 3,
    title: 'Lorem Ipsum 3',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    img: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
  },
]

const boxes = cards.map(({ title, description, img }, idx) =>
  React.createElement(
    'div',
    { className: 'box', key: idx },
    React.createElement('img', { src: img }),
    React.createElement('h2', {}, title),
    React.createElement('p', {}, description)
  )
)

const wrapper = React.createElement('div', { className: 'wrapper' }, boxes)

ReactDOM.createRoot(document.querySelector('#root')).render(wrapper)

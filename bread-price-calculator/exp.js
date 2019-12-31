const breadList= [
  {
    name: 'Breadmeal',
    sizes: [
      {
        sizeName: 'Solo',
        purchasePrice: 70,
        sellingPrice: 100,
      },
      {
        sizeName: 'Midi',
        purchasePrice: 100,
        sellingPrice: 150,
      },
      {
        sizeName: 'Ultra',
        purchasePrice: 170,
        sellingPrice: 250,
      },
      {
        sizeName: 'Jumbo',
        purchasePrice: 320,
        sellingPrice: 400,
      },
      {
        sizeName: 'Mega',
        purchasePrice: 370,
        sellingPrice: 500,
      }
    ]
  },
  {
    name: 'Piaate',
    sizes: [
      {
        sizeName: 'Small Size',
        purchasePrice: 3,
        sellingPrice: 3
      },
      {
        sizeName: 'Big Size',
        purchasePrice: 3,
        sellingPrice: 3
      }
    ]
  },
  {
    name: 'Tac',
    sizes: [
      {
        sizeName: 'Small Size',
        purchasePrice: 3,
        sellingPrice: 3
      },
      {
        sizeName: 'Big Size',
        purchasePrice: 3,
        sellingPrice: 3
      }
    ]
  },
  {
    name: 'Country Fresh',
    sizes: [
      {
        sizeName: 'Eco',
        purchasePrice: 3,
        sellingPrice: 3
      },
      {
        sizeName: 'Jumbo Special',
        purchasePrice: 320,
        sellingPrice: 400
      },
      {
        sizeName: 'Jumbo Extra',
        purchasePrice: 3,
        sellingPrice: 3
      },
    ]
  }
];

const orders = [
  {name: 'Breadmeal', size: 'Midi', quantity: 10},
  {name: 'Breadmeal', size: 'Solo', quantity: 10},
  {name: 'Country Fresh', size: 'Jumbo Special', quantity: 10},
]

const breadOrders = orders.map((order) => {
  breadList.forEach(bread => {
    if(order.name === bread.name) {
      bread.sizes.forEach((size) => {
        if(order.size === size.sizeName) {
          order.purchasePrice = size.purchasePrice;
          order.sellingPrice = size.sellingPrice;
        }
      })
    }
  })
  return order;
})

const totalAmountArr = breadOrders.map(breadOrder => {
  return breadOrder.purchasePrice * breadOrder.quantity;
})

const totalSalesArr = breadOrders.map(breadOrder => {
  return breadOrder.sellingPrice * breadOrder.quantity;
})

const totalSales = totalSalesArr.reduce((total, currentValue) => {
  return total + currentValue;
})

const totalAmount = totalAmountArr.reduce((total, currentValue) => {
  return total + currentValue;
})

const profit = totalSales - totalAmount;

console.log(totalAmount);
console.log(breadOrders);
console.log(profit);

import { Injectable } from '@angular/core';
import { IBread, ISize } from '../common/bread.interface';

@Injectable({
  providedIn: 'root'
})
export class BreadService {

  constructor() { }

  getBreadNames(): string[] {
    return breadList.map(bread => {
      return bread.name;
    })
  }

  getBreadSizes(breadName: string): string[] {
    const bread = breadList.find(breadType => breadType.name === breadName);

    const breadSizes = bread.sizes.map(breadSize => {
      return breadSize.sizeName;
    });
    return breadSizes;
    // const breadSizeArray: ISize[] = breadList.map(bread => {
    //   let breadSizeList;
    //   if(bread.name === breadName) {
    //     // If the any bread is the same with that passed into the getBreadSizes function,
    //     // assign the sizes of that bread to the breadSizeList variable
    //     breadSizeList = bread.sizes;
    //   }

    //   return breadSizeList;
    // });
    // return breadSizeArray.map((size: ISize) => {
    //   return size.sizeName;
    // });
    // // const breadSizes: string[] = [];
    // // breadSizeArray.forEach(size => {
    // //   breadSizes.push(size.sizeName);
    // // });
    // // return breadSizes;
  }

  getBreadList() {
    return breadList;
  }

}

const breadList: IBread[] = [
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
        purchasePrice: 3,
        sellingPrice: 3
      },
      {
        sizeName: 'Jumbo Extra',
        purchasePrice: 3,
        sellingPrice: 3
      },
    ]
  }
];

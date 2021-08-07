export class Product {
    id: number; name: string; description: string; price: number; imageUrl: string;

    constructor(id: number, name: string, description: string = '', price: number = 0, imageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrSM1JPSU9SLRU-XVMOdBJMBmGPkPpWAf-g&usqp=CAU') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
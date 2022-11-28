function sendRequest(name, phone, address, goods, sum) {
    let data = {client: '', order: {}, goods: []};

    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
       let req_goods = {};
       req_goods.title = goods[i].title;
       req_goods.count = goods[i].count;
       data.goods.push(req_goods);
    }
 
    data.order.address = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв. ${address.flat}`;
    data.order.sum = sum;

    data.client = `${name} ${phone}`;

    return JSON.stringify({data});
}

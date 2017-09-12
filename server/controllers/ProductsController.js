import ProductsModel from "../models/ProductsModel";


export function list(request, response) {
  ProductsModel.find({}).exec()
  .then(users => {
    return response.json(users);
  });
}

export function show(request, response) {
  return response.json({theId: request.params.id});
}
export function create(request, response) {

  const product = new ProductsModel({
    name: request.body.name,
    description: request.body.description
  });

  product.save()
  .then(user => {
    return response.json(user);
  });

}

export function update(request, response) {
  return response.json({theId: request.params.id});
}
export function remove(request, response) {
  return response.json({});
}

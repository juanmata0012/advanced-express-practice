import VehiclesModel from "../models/VehiclesModel";


export function list(request, response) {
  VehiclesModel.find({}).exec()
  .then(users => {
    return response.json(users);
  });
}

export function show(request, response) {
  return response.json({theId: request.params.id});
}
export function create(request, response) {

  const vehicle = new VehiclesModel({
    year: request.body.year,
    make: request.body.make,
    model: request.body.model
  });

  vehicle.save()
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

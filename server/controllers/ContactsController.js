import ContactModel from "../models/ContactModel";


export function list(request, response) {
  ContactModel.find({}).exec()
  .then(users => {
    return response.json(users);
  });
}

export function show(request, response) {
  return response.json({theId: request.params.id});
}
export function create(request, response) {

  const contact = new ContactModel({
    name: request.body.name,
    occupation: request.body.occupation,
    avatar: request.body.avatar
  });

  contact.save()
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

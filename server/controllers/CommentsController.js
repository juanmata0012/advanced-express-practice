import CommentsModel from "../models/CommentsModel";


export function list(request, response) {
  CommentsModel.find({}).exec()
  .then(users => {
    return response.json(users);
  });
}

export function show(request, response) {
  return response.json({theId: request.params.id});
}
export function create(request, response) {

  const comment = new CommentsModel({
    body: request.body.body
  });

  comment.save()
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

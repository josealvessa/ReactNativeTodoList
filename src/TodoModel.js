class TodoModel {
  constructor(title,completed){
      this.title = title;
      this.completed = completed;
      this.createdAt = new Date();
  }
}

module.exports = TodoModel;

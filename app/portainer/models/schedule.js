export function ScheduleDefaultModel() {
  this.Name = '';
  this.CronExpression = '';
  this.JobType = 1;
  this.Job = new ScriptExecutionDefaultJobModel();
}

function ScriptExecutionDefaultJobModel() {
  this.Image = '';
  this.Endpoints = [];
  this.FileContent = '';
  this.File = null;
  this.Method = 'editor';
}

export function ScheduleModel(data) {
  this.Id = data.Id;
  this.Name = data.Name;
  this.JobType = data.JobType;
  this.CronExpression = data.CronExpression;
  this.Created = data.Created;
  if (this.JobType === 1) {
    this.Job = new ScriptExecutionJobModel(data.ScriptExecutionJob);
  }
}

function ScriptExecutionJobModel(data) {
  this.Image = data.Image;
  this.Endpoints = data.Endpoints;
  this.FileContent = '';
  this.Method = 'editor';
}

export function ScheduleCreateRequest(model) {
  this.Name = model.Name;
  this.CronExpression = model.CronExpression;
  this.Image = model.Job.Image;
  this.Endpoints = model.Job.Endpoints;
  this.FileContent = model.Job.FileContent;
  this.File = model.Job.File;
}

export function ScheduleUpdateRequest(model) {
  this.id = model.Id;
  this.Name = model.Name;
  this.CronExpression = model.CronExpression;
  this.Image = model.Job.Image;
  this.Endpoints = model.Job.Endpoints;
  this.FileContent = model.Job.FileContent;
}
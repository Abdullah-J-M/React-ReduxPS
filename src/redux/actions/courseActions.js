import * as types from "./actionTypes";

export function createCourse(course) {
  // the only requirement for an action is to have an "Type" property, rest of the shape is upto us
  return { type: types.CREATE_COURSE, course };
}

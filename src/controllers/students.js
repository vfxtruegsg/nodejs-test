import createHttpError from 'http-errors';
import {
  createStudent,
  getAllStudents,
  getStudentById,
  deleteStudent,
  updateStudent,
} from '../services/students.js';

export const getStudentsController = async (req, res) => {
  const students = await getAllStudents();

  if (!students) {
    return res.status(404).json({ message: 'Students not found!' });
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully found students!',
    data: students,
  });
};

export const getStudentByIdController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);

  if (!student) {
    throw createHttpError(404, 'Student not found!');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found student with id ${studentId}!`,
    data: student,
  });
};

export const createStudentController = async (req, res) => {
  const student = await createStudent(req.body);

  res.status(201).json({
    status: 201,
    messgae: 'Successfully created a student!',
    data: student,
  });
};

export const deleteStudentController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await deleteStudent(studentId);

  if (!student) {
    next(createHttpError(404, 'Student not found!'));
    return;
  }

  res.status(204).json({
    status: 204,
    message: 'Student deleted!',
  });
};

export const upsertStudentController = async (req, res, next) => {
  const { studentId } = req.params;

  const result = await updateStudent(studentId, req.body, { upsert: true });

  if (!result) {
    next(createHttpError(404, 'Student not found!'));
  }

  const status = result.isNew ? 200 : 201;

  res.status(status).json({
    status,
    message: 'Succesfully upserted a student!',
    data: result.student,
  });
};

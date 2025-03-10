import { Router } from 'express';
import {
  getStudentsController,
  getStudentByIdController,
  createStudentController,
  deleteStudentController,
  upsertStudentController,
  patchStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createStudentsSchema,
  updateStudentSchema,
} from '../validation/students.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/students', ctrlWrapper(getStudentsController));

router.get(
  '/students/:studentId',
  isValidId,
  ctrlWrapper(getStudentByIdController),
);

router.post(
  '/students',
  validateBody(createStudentsSchema),
  ctrlWrapper(createStudentController),
);

router.delete(
  '/students/:studentId',
  isValidId,
  ctrlWrapper(deleteStudentController),
);

router.put(
  '/students/:studentId',
  isValidId,
  validateBody(updateStudentSchema),

  ctrlWrapper(upsertStudentController),
);

router.patch(
  '/students/:studentId',
  isValidId,
  validateBody(updateStudentSchema),

  ctrlWrapper(patchStudentController),
);

export default router;

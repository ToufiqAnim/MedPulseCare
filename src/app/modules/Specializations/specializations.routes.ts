import express from 'express'
import { specializationController } from './specializations.controller'

const router = express.Router()

router.post(
  '/create-specialization',
  specializationController.CreateSpecialization,
)
router.get('/', specializationController.GetSpecializations)
router.get('/:id', specializationController.GetSpecialization)
router.delete('/:id', specializationController.DeleteSpecialization)
router.patch('/:id', specializationController.UpdateSpecialization)

export const specializationRoutes = router

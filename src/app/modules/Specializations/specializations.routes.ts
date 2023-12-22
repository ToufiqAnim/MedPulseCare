import express from 'express'
import { specializationController } from './specializations.controller'

const router = express.Router()

router.post(
  '/create-specialization',
  specializationController.CreateSpecialization,
)

export const specializationRoutes = router

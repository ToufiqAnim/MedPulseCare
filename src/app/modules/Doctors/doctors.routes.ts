import express from 'express'
import { DoctorsController } from './doctors.controller'

const router = express.Router()

router.post('/create-doctor', DoctorsController.CreateDoctor)
router.get('/', DoctorsController.GetDoctors)
router.get('/:id', DoctorsController.GetDoctor)
router.patch('/:id', DoctorsController.DeleteDoctor)
router.patch('/:id', DoctorsController.UpdateDoctor)
export const doctorsRoutes = router

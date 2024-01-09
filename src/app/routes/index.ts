/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { specializationRoutes } from '../modules/Specializations/specializations.routes'
import { doctorsRoutes } from '../modules/Doctors/doctors.routes'

const router = express.Router()

const moduleRoutes: any[] = [
  {
    path: '/specializations',
    route: specializationRoutes,
  },
  {
    path: '/doctors',
    route: doctorsRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router

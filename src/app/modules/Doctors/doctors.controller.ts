import { Request, Response } from 'express'
import { DoctorServices } from './doctors.services'

const CreateDoctor = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body
    const result = await DoctorServices.CreateDoctor(data)
    res.status(200).json({
      status: 'success',
      message: 'Doctor data created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Something Went Wrong',
      error,
    })
  }
}
const GetDoctors = async (req: Request, res: Response) => {
  try {
    const result = await DoctorServices.GetDoctors()
    res.status(200).json({
      status: 'success',
      message: 'Doctors data fetched successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Something Went Wrong',
      error,
    })
  }
}
const GetDoctor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await DoctorServices.GetDoctor(id)
    res.status(200).json({
      status: 'success',
      message: 'Doctor data fetched successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Something Went Wrong',
      error,
    })
  }
}
const DeleteDoctor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const result = await DoctorServices.DeleteDoctor(id)
    res.status(200).json({
      status: 'success',
      message: 'Doctor data deleted successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Something Went Wrong',
      error,
    })
  }
}
const UpdateDoctor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const result = await DoctorServices.UpdateDoctor(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Doctor data updated successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Something Went Wrong',
      error,
    })
  }
}

export const DoctorsController = {
  CreateDoctor,
  GetDoctors,
  GetDoctor,
  DeleteDoctor,
  UpdateDoctor,
}

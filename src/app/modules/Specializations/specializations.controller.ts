import { Request, Response } from 'express'
import { specializationServices } from './specializations.services'

const CreateSpecialization = async (req: Request, res: Response) => {
  try {
    const { ...specializationData } = req.body
    const result = await specializationServices.CreateSpecialization(
      specializationData,
    )
    res.status(200).json({
      status: 'success',
      message: 'Specialization created successfully',
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

const GetSpecializations = async (req: Request, res: Response) => {
  try {
    const result = await specializationServices.GetSpecializations()
    res.status(200).json({
      status: 'success',
      message: 'Specialization Data Fetched successfully',
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
const GetSpecialization = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await specializationServices.GetSpecialization(id)
    res.status(200).json({
      status: 'success',
      message: 'Specialization fetched successfully',
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
const DeleteSpecialization = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await specializationServices.DeleteSpecialization(id)
    res.status(200).json({
      status: 'success',
      message: 'Specialization data deleted successfully',
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

const UpdateSpecialization = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { ...newData } = req.body
    const result = await specializationServices.UpdateSpecialization(
      id,
      newData,
    )
    res.status(200).json({
      status: 'success',
      message: 'Specialization data updated successfully',
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
export const specializationController = {
  CreateSpecialization,
  GetSpecializations,
  GetSpecialization,
  DeleteSpecialization,
  UpdateSpecialization,
}

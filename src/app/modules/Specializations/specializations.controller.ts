import { Request, Response } from 'express'
import { specializationServices } from './specializations.services'

const CreateSpecialization = async (req: Request, res: Response) => {
  try {
    const { ...specializationData } = req.body
    const specialization = await specializationServices.CreateSpecialization(
      specializationData,
    )
    res.status(200).json({
      status: 'success',
      message: 'Specialization created successfully',
      data: specialization,
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
export const specializationController = {
  CreateSpecialization,
  GetSpecializations,
}

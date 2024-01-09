import { Specialization } from '@prisma/client'
import prisma from '../../shared/prisma'

const CreateSpecialization = async (
  data: Specialization,
): Promise<Specialization> => {
  const result = await prisma.specialization.create({
    data,
  })
  return result
}

const GetSpecializations = async (): Promise<Specialization[] | null> => {
  const result = await prisma.specialization.findMany()
  return result
}
const GetSpecialization = async (
  id: string,
): Promise<Specialization | null> => {
  const result = await prisma.specialization.findUnique({
    where: {
      id,
    },
  })
  return result
}

const DeleteSpecialization = async (id: string) => {
  const result = await prisma.specialization.delete({
    where: {
      id,
    },
  })
  return result
}
const UpdateSpecialization = async (
  id: string,
  payload: Partial<Specialization>,
): Promise<Partial<Specialization>> => {
  const result = await prisma.specialization.update({
    where: {
      id,
    },
    data: payload,
  })
  return result
}

export const specializationServices = {
  CreateSpecialization,
  GetSpecializations,
  GetSpecialization,
  DeleteSpecialization,
  UpdateSpecialization,
}

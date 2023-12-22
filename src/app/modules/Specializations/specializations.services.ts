import { Specialization } from '@prisma/client'
import prisma from '../../shared/prisma'

const CreateSpecialization = async (
  specialization: Specialization,
): Promise<Specialization> => {
  const result = await prisma.specialization.create({
    data: specialization,
  })
  return result
}

const GetSpecializations = async (): Promise<Specialization[] | null> => {
  const result = await prisma.specialization.findMany()
  return result
}

export const specializationServices = {
  CreateSpecialization,
  GetSpecializations,
}

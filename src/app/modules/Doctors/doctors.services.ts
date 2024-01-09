import { Doctor } from '@prisma/client'
import prisma from '../../shared/prisma'

const CreateDoctor = async (data: Doctor): Promise<Doctor> => {
  const result = await prisma.doctor.create({
    data,
  })
  return result
}

const GetDoctors = async (): Promise<Doctor[] | null> => {
  const result = await prisma.doctor.findMany({
    include: {
      specialization: true,
    },
  })
  return result
}
const GetDoctor = async (id: string): Promise<Doctor | null> => {
  const result = await prisma.doctor.findUnique({
    where: {
      id,
    },
    include: {
      specialization: true,
    },
  })
  return result
}

const DeleteDoctor = async (id: string) => {
  const result = await prisma.doctor.delete({
    where: {
      id,
    },
  })
  return result
}
const UpdateDoctor = async (
  id: string,
  payload: Partial<Doctor>,
): Promise<Partial<Doctor>> => {
  const result = await prisma.doctor.update({
    where: {
      id,
    },
    data: payload,
  })
  return result
}

export const DoctorServices = {
  CreateDoctor,
  GetDoctors,
  GetDoctor,
  DeleteDoctor,
  UpdateDoctor,
}

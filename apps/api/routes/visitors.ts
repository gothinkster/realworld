import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const method = event.node.req.method
  const id = getRouterParam(event, 'id')

  switch (method) {
    case 'GET':
      if (id) {
        // 获取单个访客信息
        const visitor = await prisma.visitor.findUnique({
          where: { id: parseInt(id) }
        })
        if (!visitor) {
          throw createError({
            statusCode: 404,
            statusMessage: '访客不存在'
          })
        }
        return visitor
      } else {
        // 获取所有访客信息
        const visitors = await prisma.visitor.findMany()
        return visitors
      }

    case 'POST':
      if (id && getRouterParam(event, 'action') === 'checkin') {
        // 访客签到
        const visitor = await prisma.visitor.update({
          where: { id: parseInt(id) },
          data: {
            checkInTime: new Date(),
            status: 'checked-in'
          }
        })
        return visitor
      } else {
        // 创建新访客
        const body = await readBody(event)
        const visitor = await prisma.visitor.create({
          data: {
            name: body.name,
            phone: body.phone,
            idCard: body.idCard,
            visitTime: new Date(body.visitTime),
            visitFloor: body.visitFloor,
            receptionistId: body.receptionistId
          }
        })
        return visitor
      }

    case 'PUT':
      // 更新访客信息
      if (!id) {
        throw createError({
          statusCode: 400,
          statusMessage: '缺少访客ID'
        })
      }
      const body = await readBody(event)
      const visitor = await prisma.visitor.update({
        where: { id: parseInt(id) },
        data: {
          name: body.name,
          phone: body.phone,
          idCard: body.idCard,
          visitTime: new Date(body.visitTime),
          visitFloor: body.visitFloor,
          receptionistId: body.receptionistId,
          status: body.status
        }
      })
      return visitor

    case 'DELETE':
      // 删除访客信息
      if (!id) {
        throw createError({
          statusCode: 400,
          statusMessage: '缺少访客ID'
        })
      }
      await prisma.visitor.delete({
        where: { id: parseInt(id) }
      })
      return { message: '删除成功' }

    default:
      throw createError({
        statusCode: 405,
        statusMessage: '不支持的请求方法'
      })
  }
})
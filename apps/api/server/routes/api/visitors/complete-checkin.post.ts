import type { H3Event } from 'h3';
import { usePrisma } from '../../../utils/prisma';
import VisitorModel from '../../../models/visitor.model';

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event);
    
    // 验证必填字段
    if (!body.visitorId) {
      throw createError({
        statusCode: 400,
        statusMessage: '缺少访客ID',
      });
    }

    const prisma = usePrisma();
    const visitorModel = new VisitorModel(prisma);

    // 根据ID查找访客
    const visitor = await visitorModel.findVisitorById(body.visitorId);
    if (!visitor) {
      throw createError({
        statusCode: 404,
        statusMessage: '未找到该访客信息',
      });
    }

    // 检查访客状态
    if (visitor.status === 'checked-in') {
      throw createError({
        statusCode: 400,
        statusMessage: '该访客已签到',
      });
    }

    // 完成签到
    const updatedVisitor = await visitorModel.checkInVisitor(body.visitorId);

    return {
      success: true,
      data: updatedVisitor,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
});
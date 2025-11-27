import type { H3Event } from 'h3';
import { usePrisma } from '../../../utils/prisma';
import VisitorModel from '../../../models/visitor.model';

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event);
    
    // 验证必填字段
    if (!body.phone && !body.idCard) {
      throw createError({
        statusCode: 400,
        statusMessage: '至少需要提供手机号或身份证号',
      });
    }

    const prisma = usePrisma();
    const visitorModel = new VisitorModel(prisma);

    // 根据手机号或身份证号查找访客
    const visitor = await visitorModel.findVisitorByPhoneOrIdCard(body.phone, body.idCard);
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

    // 检查是否为当天行程
    const today = new Date();
    const visitDate = new Date(visitor.visitTime);
    const isToday = today.toDateString() === visitDate.toDateString();

    return {
      success: true,
      data: {
        visitor,
        isToday,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
});
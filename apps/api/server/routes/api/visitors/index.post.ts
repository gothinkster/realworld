import type { H3Event } from 'h3';
import { usePrisma } from '../../../utils/prisma';
import VisitorModel from '../../../models/visitor.model';

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event);
    
    // 验证必填字段
    if (!body.name || !body.phone || !body.idCard || !body.visitTime || !body.visitFloor || !body.receptionistId) {
      throw createError({
        statusCode: 400,
        statusMessage: '缺少必填字段',
      });
    }

    // 验证手机号格式
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(body.phone)) {
      throw createError({
        statusCode: 400,
        statusMessage: '手机号格式不正确',
      });
    }

    // 验证身份证号格式
    const idCardRegex = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    if (!idCardRegex.test(body.idCard)) {
      throw createError({
        statusCode: 400,
        statusMessage: '身份证号格式不正确',
      });
    }

    // 验证来访时间格式
    const visitTime = new Date(body.visitTime);
    if (isNaN(visitTime.getTime())) {
      throw createError({
        statusCode: 400,
        statusMessage: '来访时间格式不正确',
      });
    }

    const prisma = usePrisma();
    const visitorModel = new VisitorModel(prisma);

    // 检查是否已存在相同手机号或身份证号的访客
    const existingVisitor = await visitorModel.findVisitorByPhoneOrIdCard(body.phone, body.idCard);
    if (existingVisitor) {
      throw createError({
        statusCode: 400,
        statusMessage: '该访客已存在',
      });
    }

    // 创建访客
    const visitor = await visitorModel.createVisitor({
      name: body.name,
      phone: body.phone,
      idCard: body.idCard,
      visitTime: visitTime,
      visitFloor: body.visitFloor,
      receptionistId: body.receptionistId,
    });

    return {
      success: true,
      data: visitor,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
});
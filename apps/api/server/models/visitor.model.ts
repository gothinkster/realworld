import type { PrismaClient } from '@prisma/client';
import type { Visitor } from '@prisma/client';

class VisitorModel {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  /**
   * 创建访客
   * @param visitorData 访客数据
   * @returns 创建的访客对象
   */
  async createVisitor(visitorData: Omit<Visitor, 'id' | 'createdAt' | 'updatedAt' | 'status'>): Promise<Visitor> {
    return this.prisma.visitor.create({
      data: {
        ...visitorData,
        status: 'pending',
      },
    });
  }

  /**
   * 根据手机号或身份证号查找访客
   * @param phone 手机号
   * @param idCard 身份证号
   * @returns 访客对象或null
   */
  async findVisitorByPhoneOrIdCard(phone?: string, idCard?: string): Promise<Visitor | null> {
    if (!phone && !idCard) {
      throw new Error('至少需要提供手机号或身份证号');
    }

    return this.prisma.visitor.findFirst({
      where: {
        OR: [
          phone ? { phone } : undefined,
          idCard ? { idCard } : undefined,
        ].filter(Boolean),
      },
    });
  }

  /**
   * 根据ID查找访客
   * @param id 访客ID
   * @returns 访客对象或null
   */
  async findVisitorById(id: number): Promise<Visitor | null> {
    return this.prisma.visitor.findUnique({
      where: { id },
    });
  }

  /**
   * 更新访客状态
   * @param id 访客ID
   * @param status 新状态
   * @returns 更新后的访客对象
   */
  async updateVisitorStatus(id: number, status: string): Promise<Visitor> {
    return this.prisma.visitor.update({
      where: { id },
      data: { status },
    });
  }

  /**
   * 访客签到
   * @param id 访客ID
   * @returns 签到后的访客对象
   */
  async checkInVisitor(id: number): Promise<Visitor> {
    return this.prisma.visitor.update({
      where: { id },
      data: {
        checkInTime: new Date(),
        status: 'checked-in',
      },
    });
  }

  /**
   * 获取所有访客列表
   * @returns 访客列表
   */
  async getAllVisitors(): Promise<Visitor[]> {
    return this.prisma.visitor.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * 获取当天的访客列表
   * @returns 当天的访客列表
   */
  async getTodayVisitors(): Promise<Visitor[]> {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfDay = new Date(startOfDay.getTime() + 24 * 60 * 60 * 1000 - 1);

    return this.prisma.visitor.findMany({
      where: {
        visitTime: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      orderBy: { visitTime: 'asc' },
    });
  }
}

export default VisitorModel;
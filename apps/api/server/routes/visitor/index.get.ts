import type { H3Event } from 'h3';
import fs from 'fs';
import path from 'path';

export default defineEventHandler(async (event: H3Event) => {
  try {
    // 读取访客签到页面的HTML文件
    const htmlPath = path.join(process.cwd(), 'server', 'public', 'visitor', 'index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    // 设置响应头
    setHeader(event, 'Content-Type', 'text/html; charset=utf-8');

    // 返回HTML内容
    return htmlContent;
  } catch (error) {
    console.error('Error reading visitor page:', error);
    throw createError({
      statusCode: 500,
      statusMessage: '无法加载访客签到页面',
    });
  }
});
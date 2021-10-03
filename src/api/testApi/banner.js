import request from './index';

export async function getBanners() {
  return await request.get('/api/banner');
}

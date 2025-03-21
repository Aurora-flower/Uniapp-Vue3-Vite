import Request from '@/utils/request';

export async function getToken(data: any) {
  try {
    const res: any = await Request.post('api/token', data);
    if (res.code == 200) {
      return res.data;
    }
    throw new Error(
      `Error: Token request failed with code ${res.code}`
    );
  } catch (err: any) {
    throw new Error(
      `Request failed: ${err.message || 'Unknown error'}`
    );
  }
}

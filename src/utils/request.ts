// const baseUrl = "https://xxx.xxx.xxx";

function requestInterceptor(options: any) {
  const token = uni.getStorageSync('token');
  if (token) {
    options.header = options.header || {};
    options.header['Authorization'] = `Bearer ${token}`;
  }
  uni.showLoading({
    title: '加载中...'
  });
  return options;
}

function responseInterceptor(response: any) {
  uni.hideLoading();

  if (response.statusCode === 200) {
    return response.data;
  } else {
    if (response.statusCode === 401) {
      uni.showToast({
        title: '未授权，请登录',
        icon: 'none'
      });
      uni.navigateTo({
        url: '/pages/login/index'
      });
    } else {
      uni.showToast({
        title: response.data.message || '请求失败',
        icon: 'none'
      });
    }
    return Promise.reject(response.data);
  }
}

function request(options: any) {
  options = requestInterceptor(options);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      uni.request({
        ...options,
        url: options.url, // baseUrl + options.url,
        success: (res: any) => {
          const result = responseInterceptor(res);
          if (result) {
            resolve(result);
          } else {
            reject(result);
          }
        },
        fail: (err: any) => {
          uni.showToast({
            title: '网络异常',
            icon: 'none'
          });
          reject({ message: '网络异常', error: err });
        }
      });
    }, 1000);
  });
}

function get(url: string, data: any, params: any = {}) {
  return request({
    url,
    data,
    method: 'GET',
    ...params
  });
}

function post(url: string, data: any, params: any = {}) {
  return request({
    url,
    data,
    method: 'POST',
    ...params
  });
}

function put(url: string, data: any, params: any = {}) {
  return request({
    url,
    data,
    method: 'PUT',
    ...params
  });
}

function del(url: string, data: any, params: any = {}) {
  return request({
    url,
    data,
    method: 'DELETE',
    ...params
  });
}

export default {
  request,
  get,
  post,
  put,
  del
};

import axios from 'axios';

export default {
  baseUrl: process.env.VUE_APP_FIREBASE_DATABASE || '',
  resource: '',
  create(payload) {
    return axios.post(`${this.baseUrl}/${this.resource}`, payload);
  },
  update(payload) {
    return axios.put(`${this.baseUrl}/${this.resource}/${payload.id}`, payload);
  },
  delete(id) {
    return axios.delete(`${this.baseUrl}/${this.resource}`, id);
  },
  async fetch() {
    const response = await axios.get(`${this.baseUrl}/${this.resource}`);
    const { data } = response;
    const result = [];
    Object.keys(data).forEach((key) => {
      result.push({ ...data[key], id: key });
    });
    return result;
  },
};

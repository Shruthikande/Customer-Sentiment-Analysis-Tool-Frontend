// Centralized axios client and API endpoints (stubs)
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth
export const AuthAPI = {
  login: async (payload) => apiClient.post('/auth/login/', payload),
  signup: async (payload) => apiClient.post('/auth/signup/', payload),
  me: async () => apiClient.get('/auth/me/'),
};

// Feedback
export const FeedbackAPI = {
  uploadCSV: async (formData) => apiClient.post('/feedback/upload/', formData, { headers: { 'Content-Type': 'multipart/form-data' } }),
  create: async (payload) => apiClient.post('/feedback/', payload),
  list: async (params) => apiClient.get('/feedback/', { params }),
};

// Analysis
export const AnalysisAPI = {
  analyzeText: async (payload) => apiClient.post('/analysis/analyze/', payload),
  trends: async (params) => apiClient.get('/analysis/trends/', { params }),
  summary: async (params) => apiClient.get('/analysis/summary/', { params }),
};

// Admin
export const AdminAPI = {
  users: async (params) => apiClient.get('/admin/users/', { params }),
  logs: async (params) => apiClient.get('/admin/logs/', { params }),
  trainModel: async (payload) => apiClient.post('/admin/train/', payload),
};

// Reports
export const ReportsAPI = {
  exportCSV: async (params) => apiClient.get('/reports/export/csv/', { params, responseType: 'blob' }),
  exportPDF: async (params) => apiClient.get('/reports/export/pdf/', { params, responseType: 'blob' }),
};

export default apiClient;


